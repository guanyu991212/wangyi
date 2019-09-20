<template>
 <div class="clearfix">
   <div class="category clearfix">
   <div class="right">
     <span class="right-word">热销榜</span>
     <span class="right-back"></span>
     <img src="../../../../static/images/35a8a3840106785c88a84b3ad91f7ebd.png" alt="">
   </div>
   <div class="left">
     <span class="left-word">热销榜</span>
     <span class="left-back"></span>
     <img src="../../../../static/images/35a8a3840106785c88a84b3ad91f7ebd.png" alt="">
   </div>
 </div>

 <ul class="category-item clearfix">
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
   <li><span>居家生活榜</span>
   <img src="../../../../static/images/c0b3d87a8066b33c68294ce60f8e1920.png" alt="">
   </li>
 </ul>
 </div>

</template>
<script>
export default {}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.category
  width 100%
  height 100%
  padding 5px
  .right 
    background deeppink 
    width 170px
    height 100px
    float left
    border-radius .05333rem
    margin 0 0px 10px 7px
    position relative
    .right-word 
      font-size 16px
      position: absolute;
      left 20px
      top 30px
    .right-back
      content: '';
      position: absolute;
      left 30px
      bottom 40px
      width: .64rem;
      height: .05333rem;
      background: #333;
    img 
      width 100px
      height 100px
      position absolute
      top 0
      right 0
  .left
    background yellow 
    width 170px
    height 100px
    float right 
    border-radius .05333rem
    margin 0px 20px 10px 0px
    position relative
    .left-word 
      font-size 16px
      position: absolute;
      left 20px
      top 30px
    .left-back
      content: '';
      position: absolute;
      left 30px
      bottom 40px
      width: .64rem;
      height: .05333rem;
      background: #333;
    img 
      width 100px
      height 100px
      position absolute
      top 0
      right 0
.clearfix:after
  content ""
  display block
  clear both
  visibility hidden
  .clearfix
    *zoom: 1
    
.category-item
  width 100%
  height 100%
  margin-left 7px
  li
    width 80px
    height 80px
    float left 
    background rgb(245, 245, 245)
    margin 5px
    position relative
    span 
      display block
      margin 5px 0 0 5px
      font-size 14px
    img 
      width 60px
      height 60px
      position absolute
      top 20px
      left 10px
</style>
