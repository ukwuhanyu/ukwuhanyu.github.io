<template>
  <div class="Order">
    <div class="header">
      <h1 class="title">我的订单</h1>
    </div>
    <div class="content">
      <ul>
        <a href="">
          <li class="order_item" v-for="(item, index) in orderList" :key="index">
            <div class="top">
              <div class="img">
                <img :src="item.img">
              </div>
              <div class="item_title">
                <p class="name_time">
                  <span class="name">{{item.seller}}<i class="el-icon-arrow-right"></i></span><br>
                  <span class="time">{{item.date}}</span>
                </p>
                <p class="active">{{item.state}}</p>
              </div>
            </div>
            <div class="bottom">
              <p class="detail">{{item.title}}</p>
              <p class="price">￥{{item.money}}</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {
      orderList: []
    }
  },
  created () {
    this.$axios({
      url: 'static/json/order.json'
    }).then(res => {
      console.log(res.data)
      this.orderList = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
.Order{
  background: #f5f5f5;
  height: 26.6667rem;
}
.header{
    padding: 0 0.3623rem;
    height: 1.8519rem;
    background: #0098ff;
    .title{
      margin: 0;
      color: #fff;
      height: 1.8519rem;
      font-size: 0.4026rem;
      line-height: 1.8519rem;
    }
}
.content{
  ul{
    .order_item{
      width: 100%;
      height: 2.8667rem;
      box-sizing: border-box;
      padding: 3.733333vw 0 0 4vw;
      margin-top: 2.666667vw;
      background: #fff;
      .top{
        display: flex;
        .img{
          padding-right: 2.666667vw;
          width: 8.533333vw;
          height: 8.533333vw;
          img{
            width: 8.533333vw;
            height: 8.533333vw;
          }
        }
        .item_title{
          width: 80vw;
          display: flex;
          justify-content: space-between;
          .name_time{
            .name{
              padding-bottom: 0.0667rem;
              font-size: .426667rem;
              color: #333;
            }
            .time{
              font-size: .293333rem;
              color: #999;
            }
          }
          .active{
            font-size: .346667rem;
            color: #333;
          }
        }
      }
      .bottom{
        width: 100%;
        padding-left: 11vw;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding-top: 4vh;
        .detail{
          font-size: .346667rem;
          color: #666;
        }
        .price{
          font-size: .346667rem;
          color: #333;
          font-weight: 700;
          padding-right: 5vw;
        }
      }
    }
  }
}
</style>
