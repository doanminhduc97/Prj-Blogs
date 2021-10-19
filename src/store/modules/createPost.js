import { 
    TOGGLE_EDIT_POST,
    SET_BLOG_HTML,
    SET_BLOG_TITLE
} from '../mutation-types'

const state = () => {
    return {
        editPost: null,
        blogHTML: "Write your blog title here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        blogPhotoPreview: null
    }
}
const getters = {
    getBlogPhotoFileURL: state => {
        return state.blogPhotoFileURL
    },
    getBlogTitle: state => {
        return state.blogTitle
    },
    getBlogHTML: state => {
        return state.blogHTML
    },
}
const mutations = {
    [TOGGLE_EDIT_POST] (state, payload) {
        state.editPost = payload
    },
    [SET_BLOG_HTML] (state, payload) {
        state.blogHTML = payload
    },
    [SET_BLOG_TITLE] (state, payload) {
        state.blogTitle = payload
    }
}
const actions = {
    setBlogHTML (context, payload) {
        context.commit(SET_BLOG_HTML, payload)
    },
    setBlogTitle (context, payload) {
        context.commit(SET_BLOG_TITLE, payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}