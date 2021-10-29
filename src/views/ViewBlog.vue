<template>
    <div class="post-view">
        <div class="container quillWrapper">
            <h2>{{ currentBlog[0].blogTitle }}</h2>
            <h4>Posted on: {{new Date(currentBlog[0].blogDate).toLocaleString('en-us', { dateStyle: 'long'})}}</h4>
            <img :src="currentBlog[0].blogCoverPhoto" alt="">
            <div class="post-content ql-editor" v-html="currentBlog[0].blogHTML"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentBlog: null
        }
    },
    async created() {
        let res = await this.$store.dispatch('blogCards/getPost')
        this.currentBlog = [... res.filter(post => {
            return post.blogID === this.$route.params.blogId
        }) ]
    },
}
</script>
<style lang="scss" scoped>
.post-view {
    h4 {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
}
</style>