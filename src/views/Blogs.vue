<template>
    <div class="blog-card-wrap">
        <div class="blog-cards container">
            <div class="toggle-edit">
                <span>Toggle Editing Post</span>
                <input type="checkbox" v-model="editPost" />
            </div>
            <blog-card 
              :edit-post="editPost" :post="post" v-for="(post, index) in sampleBlogCards" 
              :key="index" 
              @show-modal="showModal"
            />
        </div>
        <modal-confirm 
          v-if="showHideModal"
          :modalMessage="message"
          @close-modal="closeModal"
          @delete-post = "deletePost"
          />
          <loading v-show="loading"/>
    </div>
</template>
<script>
import BlogCard from '../components/BlogCard'
import ModalConfirm from '../components/ModalConfirm'
import Loading from '../components/Loading'

export default {
    components: {
        BlogCard,
        ModalConfirm,
        Loading
    },
    data() {
        return {
            editPost: null,
            showHideModal: false,
            blogId: null,
            message: 'Are you sure you want to delete the post?',
            loading: false
        }
    },
    computed: {
        sampleBlogCards () {
            return this.$store.getters['blogCards/getBlogPost']
        }
    },
    methods: {
      closeModal () {
          this.showHideModal = false
        },
        showModal (blogId) {
          this.showHideModal = true
          this.blogId = blogId
          console.log('blogId', this.blogId)
        },
        async deletePost () {
          this.showHideModal = false
          this.loading = true
          await this.$store.dispatch('blogCards/deletePost', this.blogId)
          this.loading = false
        }
    },
}
</script>
<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}    
</style>