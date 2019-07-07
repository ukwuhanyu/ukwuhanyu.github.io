<template>
  <div class="GoodList">
    <div class="GoodList_content">
      <div class="left">
        <ul>
          <li class="left_list" v-for="(item, index) in this.sellerList[0].types" :key="index" @click="change(index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <ul v-for="(items, i) in this.sellerList[0].types" :key="i">
          <li class="right_list" v-for="(list, indexs) in items.goods" :key="indexs">
            <div class="item_img">
              <img :src="list.picture" alt="" srcset="">
            </div>
            <div class="item_content">
              <p class="title">{{list.name}}</p>
              <p class="element">主要原料:{{list.desc}}</p>
              <p class="num"><span>月售11份</span> <span>好评率100%</span></p>
              <div class="money_add"><p class="money">￥{{list.price}}</p> <p class="add"><i class="el-icon-remove"></i>   <span>1</span>   <i class="el-icon-circle-plus"></i></p></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      sellerID: '',
      sellerList: [],
      allSeller: []
    }
  },
  created () {
    this.sellerID = this.$store.state.seller.id
    console.log(this.sellerID)
    this.$axios({
      url: 'static/json/goods.json'
    }).then(res => {
      this.allSeller = res.data
      console.log(this.allSeller, 66666)
      this.sellerList = this.allSeller.filter((item) => {
        return item.sellerId === this.sellerID
      })
    })
  },
  methods: {
    change (i) {
      console.log(i)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .GoodList
    .GoodList_content
      display flex
      width 100%
      .left
        width 20vw
        height 75vh
        background-color #f8f8f8
        overflow-y auto
        .left_list
          height 1.3067rem
          line-height 1.3067rem
          padding-left 2vw
          box-sizing border-box
          font-size: .32rem;
          color: #666;
      .right
        width 80vw
        height 75vh
        background #fff
        overflow auto
        .right_list
          display flex
          padding-left 0.2667rem
          padding-bottom 0.2667rem
          padding-top 0.2667rem
          box-sizing border-box
          .item_img
            width 25.333333vw
            height 25.333333vw
            img
              width 25.333333vw
              height 25.333333vw
          .item_content
            width 45vw
            padding-right 4vw
            padding-left 3vw
            .title
              font-weight 700
              font-size .4rem
              margin-bottom 0.1067rem
            .element
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-bottom 0.1067rem
            .num
              margin-bottom 0.6133rem
            .money_add
              display flex
              justify-content space-between
              height 0.6667rem
              line-height 0.6667rem
              .money
                color rgb(255, 83, 57)
                font-size .4rem
              .add
                i
                  font-size 0.6667rem
                  color rgb(35, 149, 255)
                span
                  font-size 0.4rem
                  display inline-block
                  padding 0 0.04rem
                  vertical-align top
</style>
