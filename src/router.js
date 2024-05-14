import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store/store";
import SessionActions from "@/store/store-session-actions";
import Footer from './layouts/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        footer: Footer,
        default: () => import('@/views/Home.vue')
      },
      meta: {
        title: 'Home',
        description: '',
        viewTitle: '',
        viewDescription: '',
        icon: '',
        visible: true,
        authGroups: [],
      },
      children: [],
    },
    {
      path: '/frens',
      name: 'frens',
      components: {
        footer: Footer,
        default: () => import('@/views/Frens.vue')
      },
      meta: {
        title: 'Frens',
        description: '',
        viewTitle: '',
        viewDescription: '',
        icon: '',
        visible: true,
        authGroups: [],
      },
      children: [],
    },
    {
      path: '/tasks',
      name: 'tasks',
      components: {
        footer: Footer,
        default: () => import('@/views/Tasks.vue')
      },
      meta: {
        title: 'Tasks',
        description: '',
        viewTitle: '',
        viewDescription: '',
        icon: '',
        visible: true,
        authGroups: [],
      },
      children: [],
    }
  ]
})
