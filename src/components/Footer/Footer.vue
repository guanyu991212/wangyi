<template>
  <footer class="footer">
    <a
      href="javascript:;"
      class="footer_item"
      :class="{'on':$route.path==='/msite'}"
      @click="goto('/msite')"
    >
      <span class="Item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>

    <a href="javascript:;" 
    class="footer_item" 
    :class="{'on':$route.path==='/class/classr'}"
    @click="goto('/class/classr')"
    >
      <span class="Item_icon">
        <i class="iconfont icon-chuangtougui"></i>
      </span>
      <span>分类</span>
    </a>

    <a href="javascript:;"
     class="footer_item" 
     :class="{'on':$route.path==='/goods'}"
     @click="goto('/goods')"
     >
      <span class="Item_icon">
        <i class="iconfont  icon-xiangce"></i>
      </span>
      <span>识物</span>
    </a>

    <a href="javascript:;" 
    class="footer_item"
     :class="{'on':$route.path==='/shops'}"
      @click="goto('/shops')"
     >
      <span class="Item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>

    <a href="javascript:;"
     class="footer_item" 
     :class="{'on':$route.path==='/person'}"
      @click="goto('/person')"
     >
      <span class="Item_icon">
        <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.footer
  position fixed
  z-index 100
  left 0
  rigth 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .footer_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    &.on
      color deeppink
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>

