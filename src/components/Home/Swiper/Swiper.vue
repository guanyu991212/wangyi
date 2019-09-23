<template>
 <nav class="swiper_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" >
            <a href="javascript:">
              <div class="food_container">
                <img style="width:375px" src="./images/9c75dabb86e08cffcd0b4c95b4035b57.jpg" />
              </div>
              <span></span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/>stylus'>
.swiper_nav
  margin-bottom 5px
</style>

