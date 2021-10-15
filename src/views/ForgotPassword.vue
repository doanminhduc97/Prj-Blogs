<template>
    <div class="reset-password">
        <Modal v-show="modalActive" :modal-message="modalMessage" @close-modal="closeModal"/>
        <Loading v-if="loading"/>
        <div class="form-wrap">
            <form action="" class="reset">
                <p class="login-register"> 
                    Back To 
                    <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
                </p>
                <h2>Reset Password</h2>
                <p>Forgot your password? Enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                        <email class="icon"/>
                    </div>
                </div>
                <div v-show="error" class="error">
                    {{ errorMsg }}
                </div>
                <button @click.prevent="resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>
<script>
import email from '../assets/Icons/envelope-regular.svg'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    components: {
        email,
        Modal,
        Loading
    },
    data() {
        return {
            email: null,
            modalActive: false,
            modalMessage: '',
            loading: null,
            error: null,
            errorMsg: ''
        }
    },
    methods: {
        closeModal () {
            this.modalActive = !this.modalActive
            this.email = null
        },
        resetPassword () {
            this.errorMsg = ''
            this.loading = true;
            if (this.email) {
                firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                    this.modalMessage = 'If your account exists, you receive a email'
                    this.loading = false
                    this.modalActive = true
                }).catch(err => {
                    this.modalMessage = err.message
                    this.modalActive = true
                    this.loading = false
                })
                return
            }
            this.loading = false;
            this.errorMsg = 'Please fill out all the fields!'
            this.error = true
        }
    },
}
</script>
<style lang="">
    
</style>