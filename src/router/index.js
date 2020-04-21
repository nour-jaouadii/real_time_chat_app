import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import chat from "@/components/chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    name: "Home",
    component: Home
  },
  {
    path: "/chat",
    name: "chat",
    component: chat,
    props:true, // you accept props as a parameter when we redirect them to this route(chat.vue)
     // so we want to check that params(name) actually exist before we loaded the check component
    beforeEnter: (to, from, next ) => {
         //console.log(to.params.name)
         if(to.params.name){
           next()
         }else {
          next(Home)  
         }
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
