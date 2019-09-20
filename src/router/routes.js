import Msite from '../pages/Msite/Msite.vue'
import Class from '../pages/Class/Class.vue'
import Goods from '../pages/Goods/Goods.vue'
import Shops from '../pages/Shops/Shops.vue'
import Person from '../pages/Person/Persons.vue'
import Search from '../pages/Msite/Search/Search.vue'
export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShowNav:true
    }
  },
  {
    path:'/class',
    component:Class,
    meta:{
      isShowNav:true
    }
  },
  {
    path:'/goods',
    component:Goods,
    meta:{
      isShowNav:true
    }
  },
  {
    path:'/shops',
    component:Shops,
    meta:{
      isShowNav:true
    }
  },
  {
    path:'/person',
    component:Person,
  },
  {
    path:'/',
    redirect:'/msite',
    
  },
  {
    path :'/search',
    component:Search
  }
]
