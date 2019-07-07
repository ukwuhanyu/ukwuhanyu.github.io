<template>
  <div class="Category">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in cyglists" :key="index">
        <a href="" class="cgylist" v-for="(cygs, i) in item" :key="i">
          <img :src="cygs.icon" alt=""><br>
          <span>{{cygs.name}}</span>
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // type: 'fraction',
          // type : 'progressbar',
          // type : 'custom',
          // 使进度条分页器与Swiper的direction参数相反
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
        }
      },
      cyglists: []
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    this.$axios({
      url: 'static/json/categories.json'
    }).then(res => {
      this.cyglists = res.data
    })
  }
}
</script>
<style lang="stylus" scoped>
  .swiper
    width 100%
    height 4.72rem
    .cgylist
      display block
      height 1.7333rem
      width 20%
      float left
      // background red
      margin-top 0.2933rem
      text-align center
      color #666
      img
        width 1.2rem
        height 1.2rem
      span
        font-size .32rem
</style>
