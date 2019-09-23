<template>
 <div>
     <div class="div" v-show="isShowList">
    <ul class="MsiteNav">
      <li  :class="{'on':isShowList}" v-for="(list ,index) in goods.list" :key="index" >{{list}}</li>
    </ul>
    <div class="triangle1" @click="isShow">
      <img
        src="../../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_arrow-down-3-799ded53ea.png"
        alt
      />
    </div>
  </div>


   <div class="Shelter" v-show="!isShowList">
    <div class="whole">全部频道
      <div class="triangle2" @click="isShow">
      <img
        src="../../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_arrow-down-3-799ded53ea.png"
        alt
      />
    </div>
    </div>
      <div class="icon">

    </div>
    <div class="list">
      <div class="list-item" :class="{'on':!isShowList}" v-for="(list ,index) in goods.list" :key="index">{{list}}</div>
      <!-- <div class="list-item">生活家居</div> -->
    </div>
    <div class="Shelter-cover"  @click="closeShelter"></div>
   </div>
   
 </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
 
  data() {
    return {
      isShowList: true
    }
  },
  methods: {
    isShow() {
      // console.log(this.isShowList)
      this.isShowList = !this.isShowList
      // console.log(this.isShowList)
      // console.log(isShowList)
      // console.log(111)
    },
    closeShelter(){
      this.isShowList = !this.isShowList
    }
  },
  mounted() {
    new BScroll('.div', {
      scrollX: true,
      click: true
    })
  },
  computed: {
    ...mapState(['goods'])
  }
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
    width 170%
    margin 5px
    display flex
    flex-direction column
    flex-flow row nowrap
    height 30px
    padding 0 0.4rem
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
      &.on
        border-bottom 2px solid #b4282d
  .triangle1
    position absolute
    top 10px
    left 334px
    width 50px
    height 30px
    text-align center
    background white
    z-index 200
    img
      width 20px
      height 20px
      background #fff
      // transform rotate(180deg)
      transition all .5s
.Shelter
  width 100%
  height 100%
  position: relative;
  z-index: 2;
  background: #fff;
  margin-top: -.01333rem;
  .whole
    width 100%
    display block
    height .8rem
    line-height .8rem
    padding-left .4rem
    font-size .37333rem
    .triangle2
      position absolute
      top 10px
      left 334px
      width 50px
      height 30px
      text-align center
      background white
      z-index 200
      img
        width 20px
        height 20px
        background #fff
        transform rotate(-180deg)
        .triangle2-transition
          transition all 0.2s
          opacity 1
        .triangle2-enter, &.triangle2-leave
          opacity 0
  .list
    padding-top .32rem
    overflow hidden
    .list-item
      width: 2rem;
      height: .74667rem;
      line-height: .74667rem;
      text-align: center;
      float: left;
      margin-bottom: .53333rem;
      margin-left: .4rem;
      background: #FAFAFA;
      border: 1px solid #CCC;
      border-radius: .05333rem;
      &.on
        border: 1px solid #b4282d;
        color: #b4282d;
  .Shelter-cover
    position absolute
    top 194px
    right 0
    bottom -382px
    left 0
    z-index 55
    background-color rgba(0, 0, 0, 0.5)
</style>
