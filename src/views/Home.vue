<template>
  <div class="home">
    <blog-post :post="welcomeScreen"/>
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">Register for FireBlogs <Arrow class="arrow arrow-light"/> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
export default {
  components: {
    BlogPost,
    BlogCard
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is a Filler Title!',
          blogHTML: 'This is Filler blog post title',
          blogCoverColor: 'beautiful-stories'
        },
        {
          title: 'This is a Filler Title!',
          blogHTML: 'This is Filler blog post title',
          blogCoverColor: 'designed-for-everyone'
        }
      ]
    }
  },

  computed: {
    sampleBlogCards () {
      return this.$store.getters['blogCards/getListBlogs']
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr)
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr)
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr)
    }
  }
}
</style>
