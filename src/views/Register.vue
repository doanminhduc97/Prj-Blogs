<template>
    <div class="form-wrap">
        <Loading v-if="loading"/>
        <form class="register">
            <p class="login-register">Already have an account? <router-link class="router-link" :to="{name: 'Login'}">Register</router-link> </p>
            <h2>Create Your FireBlog Account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName" />
                    <user class="icon" />
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName" />
                    <user class="icon" />
                </div>
                <div class="input">
                    <input type="text" placeholder="User Name" v-model="userName" />
                    <user class="icon" />
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email" />
                    <email class="icon" />
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password" />
                    <password class="icon" />
                </div>
                <div v-show="error" class="error">
                    {{ errorMsg }}
                </div>
            </div>
            <button @click.prevent="register">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import email from '../assets/Icons/envelope-regular.svg'
import password from '../assets/Icons/lock-alt-solid.svg'
import user from '../assets/Icons/user-alt-light.svg'
import Loading from '../components/Loading'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'
export default {
    name: "Register",
    components: {
        email,
        password,
        user,
        Loading
    },
    data () {
        return {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            error: '',
            errorMsg: "",
            loading: null
        }
    },
    methods: {
        async register () {
            this.loading = true
            if (
                this.email.trim() !== '' &&
                this.password.trim() !== '' && 
                this.firstName.trim() !== '' &&
                this.lastName.trim() !== ''  &&
                this.userName.trim() !== ''
            ) {
                this.error = false
                this.errorMsg = null
                const firebaseAuth = await firebase.auth()
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
                const result = await createUser
                const dataBase = db.collection('users').doc(result.user.uid)
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.userName,
                    email: this.email
                })
                this.$router.push({ name: 'Home' })
                this.loading = false
                return
            }
            this.loading = false
            this.error = true
            this.errorMsg = 'Please fill out all the fields!'
            return 
        }
    },
}
</script>
<style lang="scss" scoped>
.register {
    h2 {
        max-width: 350px;

    }
}
</style>