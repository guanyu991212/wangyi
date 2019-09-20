<template>
  <div class="class">
    <Header>
      <div class="search" slot="Header-content">
        <i>
          <img
            src="../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_search2-553dba3aff.png"
            alt
          />
        </i>
        <span>搜索商品，共22673款好物</span>
      </div>
    </Header>
    <div class="class-item">
      <div class="class-scroll1">
        <div class="class-left">
          <ul>
            <span class="hong">|</span>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
            <li class="item">
              <a href="javascript::">推荐专区</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="class-right">
        <div class="class-top">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../static/images/b0098527aac5942dfefc0efd9a27e4f6.jpg" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="class-scroll2">
          <div class="class-bottom">
            <ul class="list">
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品</div>
              </li>

              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品</div>
              </li>
              <li class="cateList">
                <div class="cateImgWrapper">
                  <img src="../../../static/images/71a5f1a0299e278f8193c193d8b7d1e4.png" alt />
                </div>
                <div>明星商品明星商品</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    Header
  },
  mounted() {
    new BScroll('.class-scroll1', {
      scrollX: true,
      click: true
    })
    new BScroll('.class-scroll2', {
      scrollX: true,
      click: true
    });
    new Swiper ('.swiper-container', {
    
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  });

  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.class
  width 100%
  height 100%
  .search
    width 345px
  .class-item
    height 574px
    .class-scroll1
      height 100%
      // displa block
      position absolute
      .class-left
        float left
        height 100%
        font-size 14px
        // line-height 45px
        display block
        text-align center
        background-color #fff
        padding 15px 0
        .hong
          float left
          font-weight 700
          font-size 22px
          color deeppink
        .active
          // border-left 2px solid #b4282d
        a
          width 70px
          display block
          color #333
          white-space nowrap
          line-height 0.66667rem
          margin-top 0.53333rem
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
