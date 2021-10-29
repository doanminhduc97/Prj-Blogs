<template>
    <div class="post-preview">
        <div class="container quillWrapper">
            <h2>{{ blogTitle }}</h2>
            <img :src="blogCoverPhoto" alt="">
            <div class="post-content ql-editor" v-html="blogHTML"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        blogTitle () {
            return this.$store.getters['createPost/getBlogTitle']
        },
        blogHTML () {
            return this.$store.getters['createPost/getBlogHTML']
        },
        blogCoverPhoto () {
            return this.$store.getters['createPost/getBlogPhotoFileURL']
        }
    }
}
</script>
<style lang="scss" scoped>
.post-preview {
    min-width: 100%;

    .container {
        max-width: 1000px;
        padding: 60px 25px;
    }

    .ql-editor {
        padding: 0;
    }

    h2 {
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
    }

    img {
        width: 100%;
        margin-bottom: 32px;
    }
}
</style>