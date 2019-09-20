<template>
  <header class="header">
  <slot name="Header-left" /> 
     <!-- <a href="javascript:;" class="logo" >网易严选</a> -->
     
  <slot name="Header-content" />
     <!-- <div class="search">
      <i>
        <img
          src="../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_search2-553dba3aff.png"
          alt
        />
      </i>
      <span>搜索商品，共22673款好物</span>
    </div> -->
   <slot name="Header-right" />
      <!-- <button class="btn">登录</button> -->
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.header
  height 40px
  width 100%
  font-size 18px
  position relative
  padding 0.21333rem 0.4rem
  box-sizing border-box
  background white
  z-index 100
  .logo
    font-family '楷体'
    font-weight 500
    color #272727
    display inline-block
    margin-right 10px
  .search
    background-color #ededed
    border-radius 3px
    height 28px
    width 221px
    display inline-block
    vertical-align middle
    box-sizing border-box
    text-align center
    line-height 28px
    i
      img
        width 15px
        height 15px
        display: inline-block;
        vertical-align middle
    span
      color #666
      font-size 13px
      height 100%
      margin-left 6px
  .btn
    width 30px
    white-space nowrap
    display inline-block
    margin-left 10px
    color deeppink
    text-align center
    background white
    color #b4282d
    border 1px solid #b4282d
    border-radius 0.10667rem
    font-size 0.32rem
</style>
