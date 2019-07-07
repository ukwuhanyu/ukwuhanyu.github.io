import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Take from '@/components/home/take/Take'
import Find from '@/components/home/find/Find'
import Order from '@/components/home/order/Order'
import Mine from '@/components/home/mine/Mine'
import Seller from '@/components/seller/Seller'
import GoodsList from '@/components/seller/goodslist/GoodsList'
import Evaluate from '@/components/seller/evaluate/Evaluate'
import Merchant from '@/components/seller/merchant/Merchant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/take'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/take',
          name: '首页',
          component: Take
        },
        {
          path: '/find',
          name: '发现',
          component: Find
        },
        {
          path: '/order',
          name: '订单',
          component: Order
        },
        {
          path: '/mine',
          name: '我的',
          component: Mine
        }
      ]
    },
    {
      path: '/seller/:id',
      redirect: '/goodslist/:id',
      name: '商家菜品点单页',
      component: Seller,
      children: [
        {
          path: '/goodslist/:id',
          name: '点餐详情页',
          component: GoodsList
        },
        {
          path: '/evaluate',
          name: '评价页',
          component: Evaluate
        },
        {
          path: '/merchant',
          name: '商家页',
          component: Merchant
        }
      ]
    }
  ]
})
