<template>
    <div class="confirm-order">
        <TitleB titleName="确认订单" />
        <router-link tag="div" to="/seladdress" class="address-box">
            <div class="address-l">
                <div class="receive-name">
                    <span>收货人：清风</span>
                    <span>18****8240</span>
                </div>
                <div class="receive-text">
                    <i class="iconfont icon-dingwei"></i>
                    <span>收货地址：北京市大兴区亦庄经济开发区中和街14号汇龙森一园B座301座</span>
                </div>
            </div>
            <i class="iconfont icon-you"></i>
        </router-link>
        <div class="good-detail">
            <img src="../assets/images/dingdan.jpg" alt="">
            <div class="detail-text">
                <span>美国lung flute 正品"肺笛"正式进入中国</span>
                <span class="type">购买类型：肺笛单品</span>
                <div class="price-text">
                    <span class="price-detail">￥2888.00</span>
                    <span>&times;1</span>
                </div>
            </div>
        </div>
        <router-link tag="div" to="/fapiao" class="fapiao1">
            <span>发票</span>
            <div>
                <span class="dianzi">电子</span>
                <span>（明细-{{$store.state.newOrder.newOrder.fapiaoType==='personal'?'个人':'单位'}}）</span>
                <i class="iconfont icon-you"></i>
            </div>
        </router-link>
        <div class="discount">
            <div class="discount-item">
                <span>优惠卷</span>
                <div>
                    <span class="color">-￥10.00</span>
                    <i class="iconfont icon-you"></i>
                </div>
            </div>
            <div class="discount-item">
                <span>优惠码</span>
                <div>
                    <span class="color">-￥10.00</span>
                    <i class="iconfont icon-you"></i>
                </div>
            </div>
            <div class="discount-item">
                <span>积分</span>
                <div>
                    <span>共3009积分</span>
                    <i class="iconfont icon-you"></i>
                </div>
            </div>
        </div>
        <div class="price-box">
            <div class="price-item">
                <span>商品金额</span>
                <span class="color">￥2888.00</span>
            </div>
            <div class="price-item">
                <span>运费</span>
                <div>
                    <span class="color">+￥0.00</span>
                    <span>(免运费)</span>
                </div>
            </div>
        </div>
        <footer>
            <div>实付款：
                <span class="color">￥4000.00</span>
            </div>
            <router-link to="/payway" tag="div" class="sub-btn">提交订单</router-link>
        </footer>
    </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "confirm-order",
    components: { TitleB }
};
</script>


<style lang="scss">
.confirm-order {
    background-color: #ddd;
    padding-top: 60px;
    height: 100vh;
    > div {
        padding: 10px;
        background-color: #fff;
        font-size: 12px;
        margin-bottom: 10px;
        i {
            font-size: 14px;
            color: #ddd;
        }
    }
    .address-box {
        display: flex;
        align-items: center;
        overflow: hidden;
        .address-l {
            display: flex;
            flex-direction: column;

            .receive-name {
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .receive-text {
                display: flex;
                i {
                    font-size: 14px;
                    color: #35d4a0;
                    margin-right: 3px;
                }
            }
        }
    }
    .good-detail {
        display: flex;

        img {
            height: 65px;
            border: 1px solid #ccc;
            margin-right: 5px;
        }
        .detail-text {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            padding: 0;
            width: 100%;
            justify-content: space-between;
            span {
                line-height: 20px;
            }
        }
        .type {
            color: #ccc;
            font-size: 10px;
            line-height: 10px;
        }
        .price-text {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            padding: 0;
            font-size: 14px;
            span {
                line-height: 14px;
                display: inline-block;
            }
            .price-detail {
                color: rgb(250, 158, 20);
            }
        }
    }
    .fapiao1 {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .dianzi {
            color: rgb(250, 158, 20);
        }
    }
    .discount {
        display: block;
        flex-direction: column;
        .discount-item {
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 5px 0;
            i {
                margin-left: 5px;
            }
            .color {
                color: rgb(250, 158, 20);
            }
        }
    }
    .price-box {
        .price-item {
            padding: 5px 0;
            display: flex;
            justify-content: space-between;
            .color {
                color: rgb(250, 158, 20);
            }
        }
    }
    footer {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        .color {
            color: rgb(250, 158, 20);
        }
        div {
            margin-left: 10px;
        }
        .sub-btn {
            color: #fff;
            text-align: center;
            line-height: 50px;
            width: 40%;
            background-color: rgb(250, 158, 20);
        }
    }
}
</style>

