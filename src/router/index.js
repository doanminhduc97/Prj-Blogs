import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import PostPreview from "../views/PostPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import EditBlog from "../views/EditBlog.vue";
// import store from '../store'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/blogs",
    name: "Blog",
    component: Blogs,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: 'Admin'
    }
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'Create Post'
    }
  },
  {
    path: "/post-preview",
    name: "postPreview",
    component: PostPreview,
    meta: {
      title: 'Post Preview'
    }
  },
  {
    path: "/view-blog/:blogId",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: 'View Blog'
    }
  },
  {
    path: "/edit-blog/:blogId",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      title: 'Edit Blog Post'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`
  // if (to.path === '/login') {
  //   if (store.getters['user/getUser']) {
  //     next('/')
  //   }
  //   return
  // }
  next()
})

export default router;
