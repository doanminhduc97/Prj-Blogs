import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

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

const mutations = {
    'TOGGLE_EDIT_POST' (state, payload) {
        state.editPost = payload
    }
}
const actions = {
    async getCurrentUser (context) {
        const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
        const dbResult = await dataBase.get();
        context.commit()
    }
}