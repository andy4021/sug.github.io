import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import classification from '../pages/classification'
import goodscart from '../pages/goodscart'
import my from '../pages/my'
import supera from '../pages/supera'
import selection from '../pages/selection'
import vegetables from '../pages/vegetables'
import shoping from '../pages/shoping'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/classification',
            name: 'classification',
            component: classification
        },
        {
            path: '/goodscart',
            name: 'goodscart',
            component: goodscart
        },
        {
            path: '/my',
            name: 'my',
            component: my
        },
        {
            path: '/supera',
            name: 'supera',
            component: supera
        },
        {
            path: '/vegetables',
            name: 'vegetables',
            component: vegetables
        },
        {
            path: '/selection',
            name: 'selection',
            component: selection
        },
        {
            path: '/shoping/:id',
            name: 'shoping',
            component: shoping
        }
    ]
})
