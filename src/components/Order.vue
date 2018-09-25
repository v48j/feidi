<template>
  <div class="order">
    <TitleB titleName="订单中心" />
    <div class="tab">
      <span :class="{active:nowtab==='all'}" @click="changeTab('all')">全部</span>
      <span :class="{active:nowtab==='nopay'}" @click="changeTab('nopay')">待付款</span>
      <span :class="{active:nowtab==='pay'}" @click="changeTab('pay')">待发货</span>
      <span :class="{active:nowtab==='way'}" @click="changeTab('way')">待收货</span>
      <span :class="{active:nowtab==='achieve'}" @click="changeTab('achieve')">已完成</span>
    </div>
    <div class="order-list">
      <router-link tag="div" :to="`/orderdetail/${ele.id}`" class="order-item" v-for="ele in getGoods" :key="ele.id">
        <div class="title">
          <span>{{ele.time}}</span>
          <span class="goods-state" v-if="ele.goodsState==='nopay'">待付款</span>
          <span class="goods-state" v-if="ele.goodsState==='pay'">待发货</span>
          <span class="goods-state" v-if="ele.goodsState==='way'">待收货</span>
          <span class="goods-state" v-if="ele.goodsState==='achieve'">已完成</span>
        </div>
        <div class="content">
          <img src="../assets/images/dingdan.jpg" alt="">
          <div class="buy-text">
            <span class="buy-title">{{ele.goodsName}}</span>
            <span class="buy-type">购买类型：{{ele.type}}</span>
            <div class="buy-num">
              <NumBtn/>
              <span class="price">￥{{ele.price}}</span>
            </div>
          </div>
        </div>
        <div class="shouhuo-btn" v-if="ele.goodsState==='way'">
          <span>申请退款</span>
          <span>提醒发货</span>
          <span>查看物流</span>
          <span class="last-btn">确认收货</span>
        </div>
        <div class="shouhuo-btn" v-if="ele.goodsState==='pay'">
          <span>申请退款</span>
          <span>提醒发货</span>
          <span class="last-btn">再次购买</span>
        </div>
        <div class="shouhuo-btn" v-if="ele.goodsState==='nopay'">
          <span>取消订单</span>
          <span class="last-btn">立即支付</span>
        </div>
        <div class="shouhuo-btn" v-if="ele.goodsState==='achieve'">
          <span>申请退款</span>
          <span class="last-btn">再次购买</span>
        </div>
      </router-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer";
import TitleB from "./TitleB";
import NumBtn from "./NumBtn";
export default {
    name: "order",
    components: { Footer, TitleB, NumBtn },
    computed: {
        getGoods() {
            const nowtab = this.nowtab;
            const showGoods = this.$store.getters.getShowGoods(nowtab);
            return showGoods;
        }
    },
    data: () => ({
        nowtab: "all"
    }),
    methods: {
        changeTab(type) {
            this.nowtab = type;
        }
    }
};
</script>

<style lang="scss">
.order {
    background-color: #ddd;
    padding-bottom: 10vh;
    min-height: 90vh;
}
.tab {
    margin-top: 49px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 50px;
    padding: 0 10px;
    margin-bottom: 10px;
    .active {
        color: rgb(35, 221, 144);
        border-bottom: 2px solid rgb(35, 221, 144);
    }
}
.order-list {
    .order-item {
        background-color: #fff;
        padding: 10px;
        margin-bottom: 10px;
        .title {
            .goods-state {
                color: #f50;
                font-size: 14px;
            }
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .content {
            display: flex;

            img {
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
                        color: #f50;
                        font-size: 18px;
                    }
                }
            }
        }
        .shouhuo-btn {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
            span {
                border: 1px solid #ccc;
                padding: 4px;
                font-size: 14px;
                margin-left: 5px;
            }
            .last-btn {
                color: #f50;
                border: 1px solid #f50;
            }
        }
    }
}
</style>
