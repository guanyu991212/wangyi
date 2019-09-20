<template>
  <div class="util" >
    <div class="search">
      <div class="search-m">
        <img
          src="../../../../static/images/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_search2-553dba3aff.png"
          alt
        />
        <input
          type="search"
          autocomplete="off"
          name="baike-search"
          placeholder="喝点啊！！！！"
          class="input-kw"
        />
      </div>
      <div class="back" @click="closeSearch">取消</div>
    </div>


    <Brand>
     <header class="brand" slot="Brand-top">
            <span>热门搜索</span>

          </header>
    </Brand>


    <nav class="nav-item">
      <a class="item  " href="javascript:;">99%好评懒人拖把</a>
      <a class="item  active" href="javascript:;">懒人拖把</a>
      <a class="item  " href="javascript:;">99%好评</a>
      <a class="item active " href="javascript:;">99%拖把</a>
      <a class="item " href="javascript:;">9人拖把</a>
    </nav>
  </div>
</template>
<script>
import Brand from '../../../components/Home/Brand/Brand'
export default {
  data() {
    return {
      
    }
  },
  components:{
    Brand
  },
  methods: {
    closeSearch(){
      this.$router.back('/msite')
    }
  },
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
body
  background rgb(238, 238, 238)
.util 
  background white
  padding-top 10px
.search
  // width 300px
  // height 28px
  // background rgb(244, 244, 244)
  width 100%
  height 100%
  // display inline-block
  // padding-top 10px
  padding-left 0.26667rem
  box-sizing border-box

  .search-m
    width 300px
    height 28px
    display inline-block
    background rgb(244, 244, 244)
    // position relative
    border-radius: 4px;
    img 
      width 15px
      height 15px
      margin 5px 10px 0 10px
    input
      background rgb(244, 244, 244)
      outline none
      display inline-block
      // text-align center
      
  .back
    font-size 18px
    display inline-block
    margin-left 15px
.brand
  color #999
  font-size 14px
.nav-item
  width 360px
  height 158px
  // margin-right: -.4rem;
  // margin-bottom: -.42667rem;
  zoom: 1;
  padding-right 5px
  padding-top 5px
  .item
    float left
    padding 0 .2rem
    margin-right .42667rem
    margin-bottom .42667rem
    line-height .61333rem
    border 1px solid #999
    border-radius 4px
    color #333
    cursor pointer
    
  .active
    border-color: #b4282d;
    color: #b4282d;
</style>

