<template>
  <div>
    <div class="class-right">
        <div class="class-top">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../../static/images/b0098527aac5942dfefc0efd9a27e4f6.jpg" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="class-scroll2">
          <div class="class-bottom">
            <ul class="list">
              <li class="cateList"  v-for="(listitem,index) in categorys" :key="index">
                <div class="cateImgWrapper" >
                  <img :src="listitem.img" alt />
                </div>
                <div>{{listitem.title}}</div>
              </li>

           
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      cateIndex:[],
    }
  },
  computed: {
    ...mapState(['categorys'])
  },
  methods:{
    // listitem(index){
    //   this.cateIndex[index]=index
    // }
  },
  mounted() {
    // console.log(categorys[cateIndex].list)
    new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  });
   new BScroll('.class-scroll2', {
      scrollX: true,
      click: true
    });
  },
  methods: {
    ListItem(){
  
    }
  },
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.class-right
  margin-left 80px
  padding 0.4rem 0.4rem 0.28rem
  height 100%
  overflow hidden
  .class-top
    img
      width 264px
      height 96px
  .class-scroll2
    // height 600px
    float left
    position absolute
    .class-bottom
      .list
        .cateList
          display inline-block
          margin-right 16px
          text-align center
          width 1.92rem
          vertical-align top
          .cateImgWrapper
            img
              width 72px
              height 72px
            div
              color #333
              text-align center
              display block
              overflow hidden
</style>
