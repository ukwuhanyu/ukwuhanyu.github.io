<template>
  <div>
    <div class="scontent">
      <a href="#" class="searched">
        <i class="el-icon-search"></i><span>搜索饿了么商家、商品名称</span>
      </a>
      <div class="listscontent">
        <a href="" class="lists" v-for="(item, index) in lists" :key="index">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.$axios({
      url: 'static/json/tag.json'
    }).then(res => {
      this.lists = res.data
    })
  }
}
</script>
<style lang="stylus" scoped>
  .scontent
    width 100%
    height 2rem
    padding 0.2rem 0.3733rem 0.2rem 0.3733rem
    box-sizing border-box
    .searched
      display inline-block
      background-color rgb(255, 255, 255)
      width 100%
      height 0.96rem
      border-radius 0.0267rem
      line-height 0.96rem
      text-align center
      i
      span
        font-size 0.3733rem
        color rgb(153, 153, 153)
    .lists
      margin 0 0.0667rem
    .listscontent
      padding-top 0.2933rem
      text-align center

</style>
