<template>
  <div>
    <div class="geocontent">
      <div class="content">
        <a href="">
          <i class="el-icon-location-outline"></i><span>{{location ? location : '正在定位...'}}</span><i class="el-icon-caret-bottom"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {
      location: ''
    }
  },
  created () {
    // 获取城市名称
    // new BMap.localCity().get((result) => {})
    // 获取详细地址
    // 获取经纬度
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition((r) => {
      // lng经度，lat纬度
      var p = new BMap.Point(r.point.lng, r.point.lat)
      // 根据经纬度获取地址
      var myGeo = new BMap.Geocoder()
      myGeo.getLocation(p, (result) => {
        if (result) {
          this.location = result.address
        }
      })
    })
  }
}
</script>
<style lang="stylus" scoped>
  .geocontent
    width 100%
    height 1.2rem
    padding 0.2667rem 0.3733rem 0rem 0.3733rem
    box-sizing border-box
    .content
      font-size 0.4533rem
      color rgb(255, 255, 255)
      line-height 1rem
</style>
