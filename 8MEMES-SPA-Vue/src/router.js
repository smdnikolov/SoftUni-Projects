import Vue from 'vue'
import Router from 'vue-router'
import appHot from './components/app-hot.vue'
import appTrending from './components/app-trending.vue'
import appFresh from './components/app-fresh.vue'
import appCatAnimals from './components/categories-components/app-cat-animals.vue'
import appCatAnime from './components/categories-components/app-cat-anime.vue'
import appCatAwesome from './components/categories-components/app-cat-awesome.vue'
import appCatFunny from './components/categories-components/app-cat-funny.vue'
import appCatGaming from './components/categories-components/app-cat-gaming.vue'
import appCatNSFW from './components/categories-components/app-cat-nsfw.vue'
import appCatWTF from './components/categories-components/app-cat-wtf.vue'
import appLogin from './components/app-login.vue'
import appRegister from './components/app-register.vue'
import appHome from './components/app-home.vue'
import appShare from './components/app-share.vue'
import appMeme from './components/app-meme.vue'
import appLogged from './components/app-logged.vue'
import appNotFound from './components/app-not-found.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'appHome',
            component: appHome
        },
        {
            path: '/hot',
            name: 'appHot',
            component: appHot
        },
        {
            path: '/trending',
            name: 'appTrending',
            component: appTrending
        },
        {
            path: '/fresh',
            name: 'appFresh',
            component: appFresh
        },
        {
            path: '/animals',
            name: 'appCatAnimals',
            component: appCatAnimals
        },
        {
            path: '/anime',
            name: 'appCatAnime',
            component: appCatAnime
        },
        {
            path: '/awesome',
            name: 'appCatAwesome',
            component: appCatAwesome
        },
        {
            path: '/funny',
            name: 'appCatFunny',
            component: appCatFunny
        },
        {
            path: '/gaming',
            name: 'appCatGaming',
            component: appCatGaming
        },
        {
            path: '/nsfw',
            name: 'appCatNSFW',
            component: appCatNSFW
        },
        {
            path: '/wtf',
            name: 'appCatWTF',
            component: appCatWTF
        },
        {
            path: '/login',
            name: 'appLogin',
            component: appLogin
        },
        {
            path: '/register',
            name: 'appRegister',
            component: appRegister
        },
        {
            path: '/share',
            name: 'appShare',
            component: appShare,

        },
        {
            path: `/meme/:id`,
            name: 'appMeme',
            component: appMeme
        },
        {
            path: `/logged`,
            name: 'appLogged',
            component: appLogged
        },
        {
            path: "*",
            name: "appNotFound",
            component: appNotFound
        }
    ]
})