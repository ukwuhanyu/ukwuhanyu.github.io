<template>
  <div>
    <Geo></Geo>
    <Search></Search>
  </div>
</template>
<script>
import Geo from '@/base/geo/Geo'
import Search from './Search'
export default {
  components: {
    Geo, Search
  }
}
</script>
<style lang="stylus" scoped>
  div
    background-image linear-gradient(90deg,#0af, #0085ff)
</style>
