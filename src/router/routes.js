import Msite from '../pages/Msite/Msite.vue'
import Class from '../pages/Class/Class.vue'
import Goods from '../pages/Goods/Goods.vue'
import Shops from '../pages/Shops/Shops.vue'
import Person from '../pages/Person/Persons.vue'
import Search from '../pages/Msite/Search/Search.vue'
import Phone from '../pages/Person/Login/phone.vue'
import Email from '../pages/Person/Login/email.vue'
import ClassR from '../pages/Class/class-r/Class-r.vue'
import DaRen from '../pages/Goods/daren/daren.vue'
import HaoHuo from '../pages/Goods/haohuo/haohuo.vue'
import Home from '../pages/Goods/home/home.vue'
import HuiGou from '../pages/Goods/huigou/huigou.vue'
import JiaZhuang from '../pages/Goods/jiazhuang/jiazhuang.vue'
import KaiFa from '../pages/Goods/kaifa/kaifa.vue'
import ShaiDan from '../pages/Goods/shaidan/shaidan.vue'
import TuiJian from '../pages/Goods/tuijian/tuijian.vue'
export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowNav: true
    }
  },
  {
    path: '/class',
    component: Class,
    meta: {
      isShowNav: true
    },
    
    children:[
      {
        path:'/class/classr',
        component:ClassR,
        meta: {
          isShowNav: true
        },
      },
      {
        path:'/class',
        redirect:'/class/classr',
        
      },
    ]
  },
  {
    path: '/goods',
    component: Goods,
    meta: {
      isShowNav: true
    },
    children:[
      {
        path:'/goods/daren',
        component:DaRen,
        
      },
      {
        path:'/goods/haohuo',
        component:HaoHuo,
      },
      {
        path:'/goods/home',
        component:Home,
      },
      {
        path:'/goods/huigou',
        component:HuiGou,
      },
      {
        path:'/goods/jiazhuang',
        component:JiaZhuang,
      },
      {
        path:'/goods/kaifa',
        component:KaiFa,
      },
      {
        path:'/goods/shaidan',
        component:ShaiDan,
      },
      {
        path:'/goods/tuijian',
        component:TuiJian,
      },
      {
        path:'/goods',
        redirect:'/goods/jiazhuang'
      }
    ]
  },
  {
    path: '/shops',
    component: Shops,
    meta: {
      isShowNav: true
    }
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/phone',
    component: Phone
  },
  {
    path: '/email',
    component: Email
  }
]
