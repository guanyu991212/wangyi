<template>
  <div>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowNav"></Footer>
    
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
//import Header from './components/Header/Header'
export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
</style>
