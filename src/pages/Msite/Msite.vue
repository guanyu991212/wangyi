<template>
  <div>
    <Header>
      <a href="javascript:;" class="logo" slot="Header-left">网易严选</a>
      <div class="search" slot="Header-content" @click="goSearch">
        <i>
          <img
            src="../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_search2-553dba3aff.png"
          />
        </i>
        <span>搜索商品，共22673款好物</span>
      </div>
      <button class="btn" slot="Header-right" @click="goLogin">登录</button>
    </Header>
    <!-- <MsiteNav :isShowList="isShowList" v-if="isShowList"></MsiteNav> -->
    <Shelter ></Shelter>
    <div class="main">
      <div class="main-content">
        <Swiper></Swiper>
        <Main></Main>
        <!-- 新人的 -->
        <NewPeople></NewPeople>
        <!-- 品牌 -->
        <Brand>
          <header class="brand" slot="Brand-top">
            <span>品牌制造商直供</span>
            <i>更多></i>
          </header>

          <div class="brand-item" slot="Brand-bottom">
            <ul>
              <li>
                <span>海外制造商</span>
                <i>9.9元起</i>
                <img style="width:100%" src="../../components/Home/Brand/images/123.png" alt />
              </li>
              <li>
                <span>海外制造商</span>
                <i>9.9元起</i>
                <img
                  style="width:100%"
                  src="../../components/Home/Brand/images/66a23d776f41cba70d00803a5231124b.png"
                  alt
                />
              </li>
              <li>
                <span>海外制造商</span>
                <i>9.9元起</i>
                <img
                  style="width:100%"
                  src="../../components/Home/Brand/images/74e2ea8f81004d0a60f90fc8e4649058.png"
                  alt
                />
              </li>
              <li>
                <span>海外制造商</span>
                <i>9.9元起</i>
                <img
                  style="width:100%"
                  src="../../components/Home/Brand/images/c097be14110f769d58245cdad73e15c3.png"
                  alt
                />
              </li>
            </ul>
          </div>
        </Brand>
        <!-- 类目热萧榜 -->
        <Brand>
          <header class="brand" slot="Brand-top">
            <span>类目热销榜</span>
          </header>
        </Brand>
        <Category></Category>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
import Swiper from '../../components/Home/Swiper/Swiper'
import Main from '../../components/Home/Main/Main'
import NewPeople from '../../components/Home/NewPeople/NewPeople'
import Brand from '../../components/Home/Brand/Brand'
import Category from '../../components/Home/Category/Category'
import Shelter from '../Msite/Shelter/Shelter'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  components: {
    Header,
    Swiper,
    Main,
    NewPeople,
    Brand,
    Category,
    Shelter
  },
  data() {
    return {
      // isShowSearch :false // 默认不显示
      // isShowList: true
    }
  },
  methods: {
    goSearch() {
      this.$router.push('/Search')
    },
    goLogin() {
      this.$router.push('/person')
    }
  },
  mounted() {
    // this.$store.dispatch('getGoods')
    // console.log($store)
    this.$store.dispatch('getGoods')
    // console.log(result2)
    const height = document.documentElement.clientHeight
    const main = document.querySelector('.main')
    // console.log(main)
    main.style.height = height + 'px'
    // console.log(height);
    new BScroll('.main', {
      scrollY: true,
      click: true
    })
    // console.log(this.isShowList)
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
// .main

// height 600px
.main-content
  padding-bottom 100px
</style>
