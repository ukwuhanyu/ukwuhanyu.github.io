<template>
  <div class="Ad">
    <div class="Ad_content">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide>
          <a href="" class="adlists">
            <img src="https://fuss10.elemecdn.com/2/6b/b352d9b1c584836cde8798360f652png.png?imageMogr/format/webp/thumbnail/568x/" alt="">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="" class="adlists">
            <img src="https://fuss10.elemecdn.com/4/ce/328c825a9a0a83599cb3495cfe366jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt="">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="" class="adlists">
            <img src="https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt="">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="" class="adlists">
            <img src="https://fuss10.elemecdn.com/9/2c/0fbbbbb1be55e598689036b195006png.png?imageMogr/format/webp/thumbnail/568x/" alt="">
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ad',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          progressbarOpposite: true,
          // 设定分页器指示器（小点）的HTML标签
          bulletElement: 'li',
          // 动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏
          // dynamicBullets: true,
          // 动态分页器的主指示点的数量
          dynamicMainBullets: 2,
          // 默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器
          hideOnClick: false,
          // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
          clickable: true
        },
        autoplay: {
          delay: 4000
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .Ad_content
    width 100%
    height 2.36rem
    padding 0 2.666667vw
    margin-top 0.1333rem
    box-sizing border-box
  .swiper
    width 100%
    height 2.36rem
    .adlists
      img
        width 100%
</style>
