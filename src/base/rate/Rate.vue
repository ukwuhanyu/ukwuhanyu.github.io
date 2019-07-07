<template>
  <div class="rate">
    <div class="item" v-for="i in max" v-bind:key="i" :style="{width:size+unit,height:size+unit}">
      <i class="behind icon-take icon-xing" :style="{fontSize:size+unit}"></i>
      <i class="front icon-take icon-xing" v-if="i<frontCount" :style="{fontSize:size+unit}"></i>
      <i class="front icon-take icon-xing" v-if="i===frontCount" :style="{fontSize:size+unit,width:lastWidth}"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Rate',
  props: {
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 30
    },
    unit: {
      type: String,
      default: 'px'
    },
    score: {
      type: Number,
      default: 5
    }
  },
  computed: {
    frontCount () {
      return Math.ceil(this.score)
    },
    lastWidth () {
      let num = this.score.toFixed(1)
      let i = parseInt(num.toString().substring(num.indexOf('.') + 1))
      if (i === 0) {
        return this.size + this.unit
      }
      return (i / 10) * this.size + this.unit
    }
  }
}
</script>
<style lang="css" scoped>
.rate {
  display: inline-block;
}
.rate .item {
  position: relative;
  float: left;
  font-size: 0;
}
.rate .item i {
  position: absolute;
}
.front {
  overflow: hidden;
  color: #ffbd00;
}
.behind {
  color: #ccc;
}
</style>
