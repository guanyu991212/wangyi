<template>
  <div>
    <PersonHeader></PersonHeader>

    <div class="phone-logo">
      <img src="../../../../static/images/yanxuan.png" alt />
    </div>

    <div class="emailLogin">
      <div class="emailInput">
        <input
          type="search"
          maxlength="11"
          placeholder="请输入手机号"
          name="name"
          v-model="name"
          v-validate="'required|phone'"
        />
        <span
          style="color:red"
          v-show="errors.has('name')"
          class="help is-danger"
        >{{ errors.first('name') }}</span>
      </div>
      <div class="shortInput">
        <div class="phoneInput">
          <input
            type="password"
            maxlength="6"
            placeholder=" 请输入密码"
            name="pwd"
            v-model="pwd"
            v-validate="'required|code'"
          />
          <span
            style="color:red"
            v-show="errors.has('pwd')"
            class="help is-danger"
          >{{ errors.first('pwd') }}</span>
        </div>
      </div>
      <div class="btnlogin">
        <a class="problem" href="javascript:;">忘记密码？</a>
        <div class="switch">
          <a href="javascript:;" @click="change2">短信快捷登录</a>
        </div>
        <div class="btn">登录</div>

        <div class="btnAgree">
          <a href="javascript:;" @click="back">使用其他方式登录></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonHeader from '../../../components/Person-Header/Person-Header'
export default {
  data() {
    return {
      phone: '', // 手机属性
      computeTime: 0, // 倒计时
      isShowPwd: false, // 用来显示铭文密码还是非明文密码
      code: '', // 短信验证码
      name: '', // 用户名
      pwd: '' // 密码
    }
  },
  components: {
    PersonHeader
  },
  methods: {
    back() {
      this.$router.back('/person')
    },
    change2() {
      this.$router.replace('/phone')
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.email
  background white
  position relative
  margin 0 auto
.email-logo
  width 100%
  height 100%
  text-align center
  margin-top 0.74667rem
  img
    width 96px
    height 32px
.emailLogin
  width 100%
  height 100%
  // background #666
  position relative
  padding-left 20px
  margin-top 20px
  .emailInput
    width 336px
    height 46px
    margin-bottom 20px
    border-bottom 1px solid #999
    input
      width 8.27rem
      height 0.6rem
      font-size 0.4rem
      line-height 0.6rem
      margin 0.39rem 0
      padding-left 0
      outline none
      position absolute
  .shortInput
    width 336px
    position relative
    height 46px
    margin-bottom 30px
    input
      width 190px
      height 0.6rem
      font-size 0.4rem
      line-height 0.6rem
      margin 0.39rem 0
      // display block
      float left
      outline none
      position absolute
    .btn
      width 2.3rem
      display inline-block
      height 0.75rem
      text-align center
      color #333
      font-size 14px
      background #fff
      line-height 0.75rem
      border 1px solid #666
      border-radius 4px
      position absolute
      top -20px
      right 0
  .btnlogin
    width 336px
    position relative
    height 193px
    margin 20px 0
    .problem
      font-size 14px
      color #7f7f7f !important
    .switch
      position absolute
      top 0
      right 0
      font-size 14px
      a
        color black
  .btn
    margin-top 30px
    font-size 18px
    width 336px
    height 46px
    line-height 46px
    text-align center
    background rgb(221, 26, 33)
    color white
    border-radius 4px
  .agree
    margin-top 10px
  .btnAgree
    margin-top 0.61333rem
    text-align center
    a
      font-size 16px
      color black
</style>
