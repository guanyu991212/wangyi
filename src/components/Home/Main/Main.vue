<template>
  <div class="Main">
    <div class="main-img">
      <span>
        <img src="../../../../static/images/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        网易自营品牌
      </span>
      <span>
        <img src="../../../../static/images/2d0402ffcd52b3ec3b07422681c42a89.png" alt />
        30无忧退货
      </span>
      <span>
        <img src="../../../../static/images//eb61ee48e8942dbd1784c9ee75ebe955.png" alt />
        48小时快速退款
      </span>
    </div>

    <div class="Main-item">
      <ul>
        <li v-for="(item,index) in goods.item" :key="index">
          <img :src="item.img" alt />
          {{item.title}}
        </li>
        <!-- <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li>
        <li>
          <img src="../../../../static/images/c6fd8835a6400b7da7a016ad85506b69.png" alt />
          新品发布
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['goods'])
  },
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.Main
  width 100%
  overflow hidden
  height 100%
  .main-img
    width 100%
    height 100%
    vertical-align middle
    margin-left 10px
    span
      font-size 14px
      margin-left 10px
      img
        vertical-align middle
        margin-top -3px
        width 15px
        height 15px
  .Main-item
    margin-top 10px 
    width 100%
    height 100%
    display flex
    li
      display inline-block
      font-size 14px
      margin-left 16px
      img
        margin-left -5px
        display block
        width 60px
        height 60px
</style>
