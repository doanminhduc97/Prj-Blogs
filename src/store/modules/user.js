import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../../firebase/firebaseInit'
import { 
    TOGGLE_EDIT_POST, 
    SET_PROFILE_INFO, 
    SET_FULL_NAME,
    UPDATE_USER, 
    SET_FIRST_NAME, 
    SET_LAST_NAME,
    SET_USER_NAME
} from '../mutation-types'
const state = () => {
    return {
        editPost: null,
        user: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUserName: null,
        profileId: null,
        profileInitials: null
    }
}
const getters = {
    getProfileInitials: state => {
        return state.profileInitials
    },
    getProfileId: state => {
        return state.profileId
    },
    getUser: state => {
        return state.user
    },
    getProfileFirstName: state => {
        return state.profileFirstName
    },
    getProfileLastName: state => {
        return state.profileLastName
    },
    getProfileUserName: state => {
        return state.profileUserName
    },
    getProfileEmail: state => {
        return state.profileEmail
    }
}
const mutations = {
    [TOGGLE_EDIT_POST] (state, payload) {
        state.editPost = payload
    },
    [SET_PROFILE_INFO] (state, payload) {
        state.profileId = payload.id
        state.profileEmail = payload.data().email
        state.profileFirstName = payload.data().firstName
        state.profileLastName = payload.data().lastName
        state.profileUserName = payload.data().userName
    },
    [SET_FULL_NAME] (state) {
        state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join('') + 
        state.profileLastName.match(/(\b\S)?/g).join('')
    },
    [UPDATE_USER] (state, payload) {
        state.user = payload
    },
    [SET_FIRST_NAME] (state, payload) {
        state.profileFirstName = payload
    },
    [SET_LAST_NAME] (state, payload) {
        state.profileLastName = payload
    },
    [SET_USER_NAME] (state, payload) {
        state.profileUserName = payload
    }
}
const actions = {
    async getCurrentUser (context) {
        const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
        const dbResult = await dataBase.get()
        context.commit(SET_PROFILE_INFO, dbResult)
        context.commit(SET_FULL_NAME)
        console.log(dbResult)
    },
    updateUser (context, payload) {
        context.commit(UPDATE_USER, payload)
    },
    setFirstName (context, payload) {
        context.commit(SET_FIRST_NAME, payload)
    },
    setLastName (context, payload) {
        context.commit(SET_LAST_NAME, payload)
    },
    setUserName (context, payload) {
        context.commit(SET_USER_NAME, payload)
    },
    async updateUserSettings ({commit, state}) {
        console.log('ID', state.profileId)
        const database = await db.collection('users').doc(state.profileId)
        await database.update({
            firstName: state.profileFirstName,
            lastName: state.profileLastName,
            userName: state.profileUserName
        })
        commit(SET_FULL_NAME)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}