<template>
    <div class="profile">
    <Modal v-if="modalActive" :modal-message="modalMessage" @close-modal="closeModal"/>
    <Loading v-if="loading"/>
        <div class="container">
            <h2>Account Settings</h2>
            <div class="profile-info">
                <div class="initials">{{ profileInitials }}</div>
                <div class="admin-badge">
                    <adminIcon class="icon" />
                    <span>admin</span>
                </div>
                <div class="input">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" v-model="firstName" />
                </div>
                <div class="input">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" v-model="lastName" />
                </div>
                <div class="input">
                    <label for="userName">User Name:</label>
                    <input type="text" id="userName" v-model="userName" />
                </div>
                <div class="input">
                    <label for="email">Email:</label>
                    <input disabled type="text" id="email" v-model="getEmail" />
                </div>
                <button @click.prevent="submitForm">Save Changes</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import adminIcon from '../assets/Icons/user-crown-light.svg'

export default {
    components: {
        Modal,
        adminIcon,
        Loading
    },
    data() {
        return {
            modalMessage: '',
            modalActive: false,
            loading: null

        }
    },
    computed: {
        profileInitials () {
            return this.$store.getters['user/getProfileInitials']
        },
        getEmail () {
            return this.$store.getters['user/getProfileEmail'] 
        },
        firstName: {
            get () {
                return this.$store.getters['user/getProfileFirstName']
            },
            set (payload) {
                this.$store.dispatch('user/setFirstName', payload)
            }
        },
        lastName: {
            get () {
                return this.$store.getters['user/getProfileLastName']
            },
            set (payload) {
                this.$store.dispatch('user/setLastName', payload)
            }
        },
        userName: {
            get () {
                return this.$store.getters['user/getProfileUserName']
            },
            set (payload) {
                this.$store.dispatch('user/setUserName', payload)
            }
        },
    },
    methods: {
        closeModal () {
            this.modalActive = !this.modalActive
        },
        async submitForm () {
            this.loading = true
            this.modalMessage = ''
            let firstName = this.$store.getters['user/getProfileFirstName']
            let lastName = this.$store.getters['user/getProfileLastName']
            let userName = this.$store.getters['user/getProfileUserName']
            if (firstName || lastName || userName) {
                try {
                    await this.$store.dispatch('user/updateUserSettings')
                    this.modalMessage = 'Changes were saved!'
                } catch {
                    this.modalMessage = 'The system is temporarily under maintenance! Please try again later'
                }
                this.loading = false
                this.modalActive = true
                return
            }
            this.modalMessage = 'Please fill out all the fields!'
            this.loading = false
            this.modalActive = true
        }
    }
}
</script>
<style lang="scss">
    .container {
        max-width: 1000px;
        padding: 60px 25px;

        h2 {
            text-align: center;
            margin-bottom: 16px;
            font-weight: 300;
            font-size: 32px;
        }

        .profile-info {
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 32px;
            background-color: #f1f1f1;
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin: 32px auto;

            .initials {
                position: initial;
                width: 80px;
                height: 80px;
                font-size: 32px;
                background-color: #303030;
                color: #fff;
                display: flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
            .admin-badge {
                display: flex;
                align-self: center;
                color: #fff;
                font-size: 14px;
                padding: 8px 24px;
                border-radius: 8px;
                background-color: #303030;
                margin: 16px 0;
                text-align: center;
                text-transform: capitalize;

                .icon {
                    width: 14px;
                    height: auto;
                    margin-right: 8px;
                }
            }

            .input {
                margin: 16px 0;

                label {
                    font-size: 14px;
                    display: block;
                    padding-bottom: 6px;
                }
                input {
                    width: 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 8px;
                    height: 50px;
                    @media (min-width: 900px) {

                    }

                    &:focus {
                        outline: none;
                    }
                }
            }

            button {
                align-self: center;
            }
        }
    }
</style>