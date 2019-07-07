<template>
  <div>
    <Top></Top>
    <div class="menu">
      <router-link :to="sellerID" active-class="sel"><span>点餐</span></router-link>
      <router-link to="/evaluate" active-class="sel"><span>评价</span></router-link>
      <router-link to="/merchant" active-class="sel"><span>商家</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Top from './top/Top'
export default {
  name: 'Seller',
  data () {
    return {
      sellerID: '/goodslist/'
    }
  },
  components: {
    Top
  },
  created () {
    this.sellerID += this.$store.state.seller.id
    console.log(this.sellerID)
  }
}
</script>
<style lang="stylus" scoped>
  .menu
    width 100%
    height 1.08rem
    // background pink
    display flex
    text-align center
    line-height 1.08rem
    border-bottom 0.0067rem solid #ccc
    a
      color #000
      display block
      width 33.333vw
      font-size .4rem
      color #666
      span
        display block
        height 0.9867rem
        width 0.9067rem
        margin 0 auto
  .sel
    font-weight 700
    color rgb(102, 102, 102)
    span
      border-bottom 0.0667rem solid rgb(35, 149, 255)
      color rgb(102, 102, 102)

</style>
