import { 
    TOGGLE_EDIT_POST,
    SET_BLOG_HTML,
    SET_BLOG_TITLE,
    SET_BLOG_PHOTO_NAME,
    SET_BLOG_PHOTO_FILE_URL,
    SET_STATE_BLOG
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
    getBlogPhotoName: state => {
        return state.blogPhotoName
    }
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
    },
    [SET_BLOG_PHOTO_NAME] (state, payload) {
        state.blogPhotoName = payload
    },
    [SET_BLOG_PHOTO_FILE_URL] (state, payload) {
        state.blogPhotoFileURL = payload
    },
    [SET_STATE_BLOG] (state, payload) {
        state.blogTitle = payload.blogTitle
        state.blogHTML = payload.blogHTML
        state.blogPhotoFileURL = payload.blogCoverPhoto
        state.blogPhotoName = payload.blogCoverPhotoName
    }
}
const actions = {
    setBlogHTML (context, payload) {
        context.commit(SET_BLOG_HTML, payload)
    },
    setBlogTitle (context, payload) {
        context.commit(SET_BLOG_TITLE, payload)
    },
    fileNameChange (context, payload) {
        context.commit(SET_BLOG_PHOTO_NAME, payload)
    },
    createFileURL (context, payload) {
        context.commit(SET_BLOG_PHOTO_FILE_URL, payload)
    },
    setStateBlog (context, payload) {
        context.commit(SET_STATE_BLOG, payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}