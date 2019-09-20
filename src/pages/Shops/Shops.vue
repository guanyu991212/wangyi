<template>

   <div class="shops">
  <Header class="hei">
    <a href="javascript:;" class="logo" slot="Header-left" style="font-size:20px">购物车</a>

    <span class="
coupon" style="color:rgb(180, 40, 45)" slot="Header-right">领券</span>
  </Header>
  <div class="refund">
    <span>30天无忧退款</span>
    <span>48小时快速退款</span>
    <span>满88元免邮费</span>
  </div>
  <div class="shop-photo">
     <i class="iconfont icon-gouwuche"></i>
     <span>去添加点什么吧！</span>
      <button class="btn">登录</button>
   </div>
  
 </div>


   


</template>
<script>
import Header from '../../components/Header/Header'
 export default {
   components:{
     Header
   }
 }
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.shops
  width 100%
  height 100%
  background #eee
  position relative
  .coupon
    font-size 16px
    position absolute
    right 24px
    top 10px
  .refund
    font-size 12px
    color #666
    background #eee
    margin-left 30px
    height 35px
    line-height 30px
    span 
      margin-left 20px
.shop-photo
  width 100%
  height 590px
  position relative
  top 0
  left 0
  bottom 0
  background-color #f4f4f4
  text-align center
  .iconfont
    display inline-block
    margin-top 120px
    font-size 150px
    color #999
  span 
    margin-bottom 20px  
    margin-left 15px
    display flex
    font-size 14px
    justify-content center
    color #999
  .btn 
    width 250px
    height 50px
    background rgb(180, 40, 45)
    color white
    border-radius 5px
</style>  
