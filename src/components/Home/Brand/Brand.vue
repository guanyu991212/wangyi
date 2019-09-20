<template>
  <div class="x">
    <slot name="Brand-top"></slot>
    <!-- <header class="brand">
      <span>品牌制造商直供</span>
      <i>更多></i>
    </header> -->
    <slot name="Brand-bottom"></slot>
    <!-- <div class="brand-item">
      <ul>
        <li>
          <span>海外制造商</span>
          <i>9.9元起</i>
        <img style="width:100%" src="./images/123.png" alt="">
        </li>
        <li>
          <span>海外制造商</span>
          <i>9.9元起</i>
           <img style="width:100%" src="./images/66a23d776f41cba70d00803a5231124b.png" alt="">
        </li>
        <li>
          <span>海外制造商</span>
          <i>9.9元起</i>
           <img style="width:100%" src="./images/74e2ea8f81004d0a60f90fc8e4649058.png" alt="">
        </li>
        <li>
          <span>海外制造商</span>
          <i>9.9元起</i>
           <img style="width:100%" src="./images/c097be14110f769d58245cdad73e15c3.png" alt="">
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
export default {}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.x
  margin-top 10px
  width 100%
  height 100%
  overflow hidden
  .brand
    width 100%
    height 35px
    line-height 35px
    padding 0px 15px
    box-sizing border-box
    span
      font-size 16px
    i
      float right
      font-size 14px
  .brand-item
    width 100%
    height 100%
    ul
      width 100%
      height 100%
      margin-left 5px
      li
        float left
        width 170px
        height 130px
        // background pink
        margin 5px
        position relative
        //background-image url('./images/123.png')
        background-size 100%
        span
          text-align center
          font-size 14px
          display block
          position relative
        i
          position relative
          text-align center
          font-size 12px
          margin-left 60px
        img 
          margin-top -26px
</style>
