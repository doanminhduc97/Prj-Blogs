// import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../../firebase/firebaseInit'

import {SET_BLOG_CARDS, FILTER_BLOG_POST} from '../mutation-types'

const state = () => {
    return {
        sampleBlogCards: [
            { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2021' },
            { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2021' },
            { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'May 1, 2021' },
            { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'May 1, 2021' }
          ],
          blogPosts: [],
          postLoaded: null
    }
}
const getters = {
    getListBlogs: state => {
        return state.sampleBlogCards
    },
    blogPostsFeed: state => {
        return state.blogPosts.slice(0, 2)
    },
    blogPostsCard: state => {
        return state.blogPosts.slice(2, 6)
    },
    getBlogPost: state => {
        return state.blogPosts
    }
}
const mutations = {
    [SET_BLOG_CARDS] (state, blogs) {
        state.sampleBlogCards = blogs
    },
    [FILTER_BLOG_POST] (state, blogId) {
        state.blogPosts = state.blogPosts.filter(blog => {
            return blog.blogID !== blogId
        })
    }
}
const actions = {
    getBlogsCards (context) {
        console.log(context)
    },
    async getPost ({ state }) {
        const dataBase = await db.collection('blogPosts')
        const dbResult = await dataBase.get()
        dbResult.forEach(doc => {
        if (!state.blogPosts.some(post => post.blogID === doc.id)) {
                const data = {
                    blogID: doc.data().blogID,
                    blogHTML: doc.data().blogHTML,
                    blogCoverPhoto: doc.data().blogCoverPhoto,
                    blogTitle: doc.data().blogTitle,
                    blogDate: doc.data().date,
                    blogCoverPhotoName: doc.data().blogCoverPhotoName
                }
                state.blogPosts.push(data)
            }
        })
        let res = state.blogPosts
        state.postLoaded = true
        return res
    },
    async deletePost (context, blogId) {
        const getPost = await db.collection('blogPosts').doc(blogId)
        await getPost.delete()
        context.commit(FILTER_BLOG_POST, blogId)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}