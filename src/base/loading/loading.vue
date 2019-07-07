<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .loading{
    width: 100%;
    text-align: center;
    .desc{
      line-height: 0.2667rem;
      font-size: 0.2933rem;
      color: #333;
    }
  }
</style>
