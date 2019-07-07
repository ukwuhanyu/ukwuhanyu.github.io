<template>
  <div>
    <Top></Top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <SellerList></SellerList>
    <goTop></goTop>
  </div>
</template>
<script>
import Top from './Top'
import Category from './Category'
import Ad from './Ad'
import Recommend from './Recommend'
import SellerList from './SellerList'
import goTop from '@/base/goTop/goTop'
export default {
  components: {
    Top, Category, Ad, Recommend, SellerList, goTop
  }
}
</script>
<style scoped>

</style>
