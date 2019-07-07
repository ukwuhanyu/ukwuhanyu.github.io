<template>
  <div class="top">
    <div class="top_content">
      <div class="logo_banner">
        <a href="" class="back"><i class="el-icon-arrow-left"></i></a>
        <div class="logo">
          <img :src="sellerlist.logo" alt="" srcset="">
        </div>
      </div>
      <div class="name">
        <div class="title">
          <h2>{{sellerlist.name}}<i class="el-icon-caret-right"></i></h2>
          <p>
            <span>评价{{sellerlist.rating}}</span>
            <span>月销{{sellerlist.orderNo}}单</span>
            <span>商家配送约为30分钟</span>
          </p>
        </div>
        <div class="active">
          <div class="active_top">
            <p class="active_content"><span>特价</span>特价商品23元起</p>
            <p class="active_num">2个优惠<i class="el-icon-caret-bottom"></i></p>
          </div>
          <div class="active_bottom">
            <p>公告：本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Top',
  data () {
    return {
      sellerlist: []
    }
  },
  created () {
    // 从vuex中取出商家数据
    this.sellerlist = this.$store.state.seller
  }
}
</script>
<style lang="stylus" scoped>
  .top
    .top_content
      width 100%
      height 6.1333rem
      .logo_banner
        width 100%
        height 2.6667rem
        background-image url('//fuss10.elemecdn.com/4/08/a624d91136c8f9a40bb23ad9921a9png.png?imageMogr/format/webp/thumbnail/750x/')
        background-position: 50%
        position relative
        .back
          font-size 0.6133rem
          box-sizing border-box
          padding-left 0.1333rem
          padding-top 0.1067rem
          color rgb(255, 255, 255)
        .logo
          width 2rem
          height 2rem
          position absolute
          left 50%
          margin-left -1rem
          top 7vh
          img
            width 100%
            height 100%
            border-radius 0.8vw
            box-shadow 0 0 0.4vw 0 rgba(0,0,0,.2)
      .name
        width 100%
        height 3.4667rem
        // background #ccc
        background-color rgb(255, 255, 255)
        box-sizing border-box
        padding-top 0.8rem
        .title
          text-align center
          h2
            font-weight 700
            font-size 0.5467rem
            margin-bottom 0.1067rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          p
            font-size 0.2933rem
        .active
          .active_top
            margin-left 1.0005rem
            margin-right 1.0005rem
            margin-top 0.3202rem
            display flex
            justify-content space-between
            .active_content
              color #333
              span
                background-color rgb(240, 115, 115)
                padding 0.0533rem 0.0533rem
                color #fff
                border-radius 0.0667rem
                margin-right 0.1333rem
                font-size 0.2667rem
            .active_num
              color #999
          .active_bottom
            margin-left 1.0005rem
            margin-right 1.0005rem
            margin-top 0.2rem
            p
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
</style>
