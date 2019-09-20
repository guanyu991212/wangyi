<template>

   <div class="div">
      <ul class="MsiteNav">
      <li class="active">推荐</li>
      <li>阿瑟东啊</li>
      <li>阿瑟东的</li>
      <li>的上的是</li>
       <li>阿瑟东啊</li>
      <li>阿瑟东的</li>
      <li>的上的是</li>
       <li>阿瑟东啊</li>
      <li>阿瑟东的</li>
      <li>的上的是</li>
      <li>的上的是</li>
      <li>的上的是</li>
      <li>的上的是</li>
      <li>的上的是</li>
      <li>的上的是</li>
      
    </ul>
    <div>
        <img src="../../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_arrow-down-3-799ded53ea.png" alt="">
      </div>
   </div>
</template>
<script>
import BScroll from 'better-scroll'
 export default {
    mounted() {
      new BScroll('.div', {
        scrollX:true,
        click: true
      })
    },
 }
</script>

<style lang='stylus' rel='stylesheet/>stylus'>
.div
  width 100%
  overflow hidden
  z-index 101
  position relative
  background white
  .MsiteNav
    width 280%
    margin 5px
    display flex
    flex-direction column
    flex-flow: row nowrap;
    height 30px
    padding 0 .4rem
    background #fff
    position relative
    background white
    li
      font-size 14px
      height 30px
      line-height 30px
      white-space nowrap
      margin 0px 7px
      display block
      text-align center
      color #333
    .active
      border-bottom 2px solid #b4282d
  div
    position absolute
    top 10px
    left 334px
    width 50px
    height 30px
    text-align: center;
    background white
    z-index 200

    img
      width 20px
      height 20px
      background: #fff;

</style>
