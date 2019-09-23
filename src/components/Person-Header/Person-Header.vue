<template>
  <div>
    <header class="header">
      <div class="person">
        <i class="home iconfont icon-shouye" @click="goMain"></i>
        <a href="javascript:;" class="logo">网易严选</a>

        <i class="photo iconfont icon-19" @click="goSearch"></i>
        <i class="shops iconfont icon-gouwuche" @click="goShops"></i>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    goMain() {
      this.$router.push('/')
    },
    goSearch(){
      this.$router.push('/search')

    },
    goShops(){
      this.$router.push('/shops')

    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.header
  height 100%
  width 100%
  position relative
  padding 0.21333rem 0.4rem
  box-sizing border-box
  background rgb(250, 250, 250)
  z-index 100
  margin 0 auto
  overflow hidden
  text-align center
  .person
    width 100%
    height 100%
    display inline-block
    .home
      font-size 24px
      float left
    .shops
      font-size 30px
      width 30px
      height 30px
      float right
    .photo
      font-size 30px
      position absolute
      top 7px
      right 56px
    .logo
      font-size 24px
</style>

