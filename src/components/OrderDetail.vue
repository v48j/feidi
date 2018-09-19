<template>
  <div class="order-detail">
    <TitleB titleName="订单详情" />
    <div class="receive-peo">
      <div class="peo-name">
        <span>
          <b>收货人：清风</b>
        </span>
        <span>186****8240</span>
      </div>
      <div class="address">
        <span>收货地址：北京市大兴区亦庄经济开发区中和街14号汇龙森一园B座301室</span>
      </div>
    </div>
    <div class="goods">
      <div class="content">
        <img src="../assets/images/dingdan.jpg" alt="">
        <div class="buy-text">
          <span class="buy-title">美国lung flute 正品 ”肺笛“ 正式进入中国</span>
          <span class="buy-type">购买类型：1111</span>
          <div class="buy-num">
            <span class="price">￥2880.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-text">
      <div class="text-item">
        <span>订单编号：90123456</span>
        <span>下单时间：20158</span>
      </div>
      <div class="text-item">
        <span>支付方式：在线支付</span>
      </div>
      <div class="text-item">
        <span>配送方式：包邮</span>
      </div>
      <div class="text-item"> 
        <span>发票类型：个人</span>
        <span>发票抬头：个人</span>
        <span>发票内容：明细</span>
      </div>

    </div>
    <div class="all-price"></div>
  </div>
</template>

<script>
import TitleB from "./TitleB"
export default {
  name: "orderdetail",
  components: { TitleB }
}
</script>

<style lang="scss">
.order-detail {
  background-color: #ddd;
  min-height: 100vh;
}
.receive-peo {
  margin-top: 50px;
  background-color: #fff;
}
.goods {
  background-color: #fff;
  margin-top: 10px;
  .content {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
    img {
      width: 75px;
      height: 75px;
      border: 1px solid #aaa;
      margin-right: 10px;
    }
    .buy-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      .buy-title {
        font-size: 14px;
      }
      .buy-type {
        color: #aaa;
        display: block;
        font-size: 12px;
      }
      .buy-num {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .price {
          color: #777;
          font-size: 16px;
        }
      }
    }
  }
}
.detail-text {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 14px;
  span {
    line-height: 30px;
  }
}
.all-price {
}
</style>
