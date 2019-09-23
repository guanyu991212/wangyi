<template>
  <div>
    <header class="Goodsheader">
      <div class="Goodsperson">
        <i class="Goodshome iconfont icon-shouye" @click="goMain"></i>
        <a href="javascript:;" :class="{'on':loginWay}" @click="loginWay=true">发现</a>
        <a href="javascript:;" :class="{'on':!loginWay}" @click="loginWay=false">甄选家</a>
        <i class="Goodsphoto iconfont icon-19" @click="goSearch"></i>
        <i class="Goodsshops iconfont icon-gouwuche" @click="goShops"></i>
      </div>
      <!-- <router-view></router-view> -->
    </header>

    <div class="nav" v-show="loginWay">
      <div class="list">
        <div class="tab">
          <router-link to="/goods/jiazhuang" class="text" >家装节</router-link>
          <!-- <span</span> -->
          <!-- <span class="text1"></span> -->
        </div>
        <!-- <div class="tab">
          <span class="text" :class="{'on':loginWay}">推荐</span>
        </div>-->
        <!-- <div class="tab">
          <span class="text" :class="{'on':loginWay}">好货内部价</span>
        </div>
        <div class="tab">
          <span class="text" :class="{'on':loginWay}">回购榜</span>
        </div>
        <div class="tab">
          <span class="text" :class="{'on':loginWay}">晒单</span>
        </div>
        <div class="tab">
          <span class="text" :class="{'on':loginWay}">开发者日记</span>
        </div>
        <div class="tab">
          <span class="text" :class="{'on':loginWay}">达人</span>
        </div>
        <div class="tab">
          <span class="text" :class="{'on':loginWay}">HOME</span>
        </div>-->
        <div class="tab">
          <router-link to="/goods/tuijian" class="text">推荐</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/haohuo" class="text" >好货与内部</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/kaifa" class="text" >开发</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/huigou" class="text" >回购榜</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/shaidan" class="text">晒单</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/daren" class="text" >达人</router-link>
        </div>
        <div class="tab">
          <router-link to="/goods/home" class="text" >HOME</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <!-- <ZhenHao v-show="loginWay"></ZhenHao> -->
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import ZhenHao from '../../pages/Goods/zhenhao'
import Swiper from 'swiper'
export default {
  data() {
    return {
      loginWay: true
    }
  },
  components: {
    ZhenHao
  },
  mounted() {
    new BScroll('.nav', {
      scrollX: true,
      click: true
    })
  },

  methods: {
    goMain() {
      this.$router.push('/')
    },
    goSearch() {
      this.$router.push('/search')
    },
    goShops() {
      this.$router.push('/shops')
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.Goodsheader
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
  .Goodsperson
    width 100%
    height 100%
    display inline-block
    .Goodshome
      font-size 24px
      float left
    .Goodsshops
      font-size 30px
      width 30px
      height 30px
      float right
    .Goodsphoto
      font-size 30px
      position absolute
      top 7px
      right 56px
    .on
      font-size 22px
      color red
.nav
  position relative
  width 100%
  z-index 2
  background #fff
  margin-top -0.01333rem
  padding-right 1.33333rem
  .list
    width 180%
    display flex
    flex-flow row nowrap
    padding 0 0.4rem
    background #ffffff
    .tab
      position relative
      display flex
      // flex-flow row nowrap
      align-items center
      // justify-content center
      z-index 1
      text-align center
      .text
        display inline-block
        padding 0 0.31334rem
        line-height 0.8rem
        font-size 16px
        color #333333
        text-align center
        &.router-link-active
          color #B4282D
          &::after
            content ''
            position absolute
            // padding-top 3px
            // margin-top 3px
            left 50%
            bottom -2px
            width 100%
            height 4px
            transform translateX(-50%)
            background #B4282D
      .active
        position relative
        color #b4282d
    .text1
      position absolute
      left 0
      bottom 0
      height 0.05333rem
      width 100%
      background #b4282d
</style>
