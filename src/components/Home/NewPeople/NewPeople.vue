<template>
 <div class="NewPeople">

   <!-- <slot name="NewPerson-header"></slot> -->
   <header slot="NewPerson-header">
     ——新人专项礼——
   </header>

   <!-- <slot name="NewPerson-right"></!--> 
   <div class="right" slot="NewPerson-right">
       <span>新人专享礼包</span> 
       <img  src="../../../../static/images/ba4d635ec94ad95b28bfab6500900659.png" alt="">
   </div>


   <!-- <slot name="NewPerson-left"></slot> -->
   <div class="left" slot="NewPerson-left">
     <div class="left-top">
       <span>福利社</span>
       <i>今日特价</i>
     <img src="../../../../static/images/8722a04114addde08d8a3fab7af590f2.png" alt="">
     
   </div>
   <div class="left-bottom">
     <span>新人拼团</span>
     <i>一元起包邮</i>
     <img src="../../../../static/images/58b7b4a5277dddbfd9b99b07f38b6c20.png" alt="">
   </div>
   </div>
   
 </div>
</template>
<script>
 export default {
 }
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.NewPeople
  margin-top 15px
  width 100%
  height 280px
  text-align center
  position relative
  header 
    // margin-bottom 15px
    height 45px
    line-height 45px
    font-size 18px
    box-sizing border-box
  .right
    width 185px
    height 220px
    background rgb(249, 233, 207) 
    position absolute
    span
      position absolute
      left -10px
      top 20px
      bottom 0
      right 0
      font-size 16px
    img 
      position absolute
      left 45px
      top 60px
      width 100px
      height 100px
  .left
    // width 100%
    // height 100%
    position relative
    .left-top
      float right
      width 185px
      height 106px
      background rgb(251, 226, 211)
      span 
        position absolute
        right 120px
        top 18px
        font-size 16px
      i 
        position absolute
        right 115px
        top 36px
        font-size 14px
      img 
        width 100px
        height 100px
        position absolute
        right 0
        top 0
    .left-bottom  
      position absolute
      top 110px
      left 190px
      width 185px
      height 106px
      background rgb(255, 236, 194) 
      span 
        position absolute
        right 105px
        top 18px
        font-size 16px
      i 
        position absolute
        right 105px
        top 36px
        font-size 14px
      img 
        width 100px
        height 100px
        position absolute
        right 0
        top 0
</style>
