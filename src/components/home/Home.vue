<template>
  <div class="home">
    <router-view></router-view>
    <div class="black"></div>
    <div class="navbar">
      <ul>
        <li class="list">
          <router-link to="/take" active-class="sel">
            <i class="icon-take icon-eleme"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/find" active-class="sel">
            <i class="icon-take icon-faxian"></i>
            <p>发现</p>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/order" active-class="sel">
            <i class="icon-take icon-order"></i>
            <p>订单</p>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/mine" active-class="sel">
            <i class="icon-take icon-wode"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home
    .navbar
      width 100%
      height 1.4667rem
      position fixed
      bottom 0
      background-color: rgb(255, 255, 255)
      box-shadow 0 -.266667vw .533333vw rgba(0,0,0,.1)
      ul
        .list
          float left
          width 25%
          text-align center
          font-size 0.2667rem
          height 0.8867rem
          padding 0.29rem 0
          a
            color #8e8e93
            display inline-block
            height 0.8867rem
            p
              margin-top 6px
          i
            font-size 0.5333rem

  .sel
    color #0089dc!important
  .black
    height 1.4667rem
</style>
