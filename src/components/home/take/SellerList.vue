<template>
  <div class="SellerList">
    <div class="SellerList_content">
      <div class="sl_title">
        <span>— 推荐商家 —</span>
      </div>
      <!-- 加载loading -->
      <!-- <skeleton v-for="(item, index) in 10" :key="index" v-show="lists.length==0"></skeleton> -->
      <!--  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" -->
      <ul>
        <li class="sl_lists" v-for="(item, index) in lists" :key="index" @click='goseller(item)'>
        <div class="sl_contnet">
          <div class="lists_top">
            <div class="logo">
              <img :src="item.logo" alt="" srcset="">
            </div>
            <div class="main">
              <p class="sl_name">{{item.name}}</p>
              <p class="star"><span><Rate :max=5 :size='0.2415' :unit="'rem'" :score="item.rating"></Rate> {{item.rating}}</span>&nbsp;<span>月销{{item.orderNo}}单</span></p>
              <p class="sl_time">
                <span>￥{{item.sendFee}}起送 | 配送费￥4</span>
              </p>
            </div>
          </div>
          <div class="lists_bottom">
            <p class="bottom_content">
              <span class="active_num">{{item.discount.length}}个活动<i class="el-icon-caret-bottom"></i></span>
              <span class="active_name" v-for="(items, i) in item.discount" :key="i"><span class="icon_active">减</span>{{items.content}}<br></span>
            </p>
          </div>
          </div>
        </li>
      </ul>
      <Loading :v-show="loading"></Loading>
    </div>
  </div>
</template>
<script>
import skeleton from '@/base/skeleton/skeleton'
import Loading from '@/base/loading/loading'
import Rate from '@/base/rate/Rate'
export default {
  name: 'SellerList',
  data () {
    return {
      lists: [],
      loading: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.$axios({
        url: 'static/json/seller.json'
      }).then(res => {
        this.lists = res.data
      })
    }, 1000)
  },
  components: {
    skeleton, Loading, Rate
  },
  methods: {
    goseller (sellers) {
      // 将商家信息存入vuex seller中
      this.$store.commit('saveSeller', sellers)
      // 跳转页面
      this.$router.push('/seller/' + sellers.id)
    },
    loadMore () {
      this.loading = true
      // setTimeout(() => {
      this.$axios({
        url: 'static/json/seller.json'
      }).then(res => {
        this.loading = false
      })
      // }, 1500)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .SellerList_content
    width 100%
    // height 3000px
    margin-top 0.2667rem
    padding 0 2.666667vw
    box-sizing border-box
    .sl_title
      width 100%
      height 0.96rem
      text-align center
      margin-bottom 0.2667rem
      line-height 0.96rem
      span
        font-size 0.4rem
        color #000
    .sl_lists
      width 100%
      height 4rem
      // background #ccc
      display block
      color #666
      .sl_contnet
        width 100%
      .lists_top
        width 100%
        height 1.7333rem
        display flex
        .logo
          // width 1.7333rem
          // width 20vw
          img
            height 1.7333rem
        .main
          height 1.7333rem
          width 80vw
          padding-left 0.2667rem
          box-sizing border-box
          p
            margin-bottom 0.1333rem
          .sl_name
            color rgb(51, 51, 51)
            width 70vw
            font-size 0.4rem
            font-weight 700
            height 0.4667rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
      .lists_bottom
        width 100%
        height 1.8933rem
        padding-left 2.0933rem
        box-sizing border-box
        .bottom_content
          width 100%
          border-top 0.0133rem solid #ccc
          padding-top 0.1333rem
          .active_name
            margin-bottom 0.1067rem
            display block
            .icon_active
              background-color rgb(240, 115, 115)
              padding 0.0267rem 0.0267rem
              color #fff
              border-radius 0.0667rem
              margin-right 0.1333rem
          .active_num
            float right
</style>
