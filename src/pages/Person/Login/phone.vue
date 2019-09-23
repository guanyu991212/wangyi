<template>
  <div class="phone">
    <PersonHeader></PersonHeader>

    <div class="phone-logo">
      <img src="../../../../static/images/yanxuan.png" alt />
    </div>

    <!-- <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field> -->

    <div class="phoneLogin">
      <div class="phoneInput">
        <input
          type="search"
          maxlength="11"
          placeholder="请输入手机号"
          v-model="phone"
          name="phone"
          v-validate="'required|phone'"
        />
        <span
          style="color:red"
          v-show="errors.has('phone')"
          class="help is-danger"
        >{{ errors.first('phone') }}</span>
      </div>
      <div class="shortInput">
        <div class="phoneInput">
          <input
            type="search"
            maxlength="6"
            name="code"
            v-model="code"
            v-validate="'required|code'"
            placeholder="请输入短信验证码"
          />
          <div class="btn">获取验证码</div>
          <span
            style="color:red"
            v-show="errors.has('code')"
            class="help is-danger"
          >{{ errors.first('code') }}</span>
        </div>
      </div>
      <div class="btnlogin">
        <a class="problem" href="javascript:;">遇到问题？</a>
        <div class="switch">
          <a href="javascript:;" @click="change1">使用密码验证登录</a>
        </div>
        <div class="btn">登录</div>

        <div class="agree">
          <input type="checkbox" name id />
          <span>我同意条款和网易隐私政策</span>
        </div>

        <div class="btnAgree">
          <a href="javascript:;" @click="back">使用其他方式登录></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Field} from 'mint-ui'
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
    change1() {
      this.$router.replace('/email')
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.phone
  background white
  position relative
  margin 0 auto
.phone-logo
  width 100%
  height 100%
  text-align center
  margin-top 0.74667rem
  img
    width 96px
    height 32px
.phoneLogin
  width 100%
  height 100%
  // background #666
  position relative
  padding-left 20px
  margin-top 20px
  .phoneInput
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
