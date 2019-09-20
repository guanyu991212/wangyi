<template>
  <div>
    <header class="header">
      <div class="person">
         <i class=" home iconfont icon-shouye" ></i>
        <a href="javascript:;" class="logo" >网易严选</a>

        <i class=" photo iconfont icon-19" ></i>
        <i class=" shops iconfont icon-gouwuche" ></i>
      </div>
    </header>


    <div class="main">

      <div class="main-top">
        <img src="../../../static/images/yanxuan.png" alt="">
      </div>
      <div class="main-down">

        <div class="phonelogin">手机号快捷登录</div>
        <div class="emaillogin">邮箱账号登录</div>
      </div>

      <div class="foot">
        <div >微信</div>
        <div >QQ</div>
        <div class="right">微博</div>
      </div>
      
    </div>
  </div>
</template>
<script>

export default {

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
  margin: 0 auto;
  overflow: hidden;
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
.main
  width 100%
  height 100%
  .main-top
    width 100%
    height 240px
    background rgb(242, 245, 244)
    position relative
    img 
      width 134px
      height 45px
      position absolute
      top 50%
      left 50%
      margin-left:-67px;
      margin-top:-22px;
  .main-down
    width 375px
    height 110px
    //background rgb(242, 245, 244)
    // background yellow 
    text-align center 
    
    .phonelogin
      width 335px
      height 45px
      background rgb(221, 26, 33)
      border 1px solid deeppink
      display inline-block
      margin 5px 0
      font-size 16px
      line-height 45px
    .emaillogin
      width 335px
      height 45px
      background opacity 
      border 1px solid deeppink
      font-size 16px
      line-height 45px
      display inline-block
  .foot
    position absolute
    // background red
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
    div
      display inline-block
      font-size 16px
      height: .53333rem;
      line-height: .53333rem;
      border-right: 1px solid #979797;
      display: inline-block;
      text-align: center;
      padding: 0 .53333rem;
    .right 
      border-right none 
    
</style>
