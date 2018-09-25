<template>
    <div class="buy-feidi">
        <TitleB titleName="肺笛" />
        <div class="banner">
            <img src="../assets/images/shopping.jpg" alt="">
            <div class="banner-text">
                <div class="title">
                    <span>美国lung flute 正品 ”肺笛“ 正式进入中国</span>
                </div>
                <div class="price-box">
                    <span class="price">￥2888.00</span>
                    <span>快递：免运费</span>
                </div>
                <div class="type-box">
                    <span>类型：
                        <span class="type">单个肺笛</span>
                    </span>
                    <i class="iconfont icon-more"></i>
                </div>
            </div>
        </div>
        <div class="buy-params">
            <span>产品参数：</span>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="buy-introduce">
            <div>
                <span>商品介绍</span>
                <span>售后保障</span>
            </div>
            <div class="text2">
                <div>
                    <p>一、七天无理由退换货</p>
                    <p>是指用户通过支付宝或在线支付功能购买太阳生成的商品，从签收商品物流之时起计时7天内，未进行商品使用、未破坏商品原包装、不影响商品二次销售的情况下向商城申请无条件退换货</p>
                </div>
                <div>
                    <p>二、七天无理由申请退换货条件</p>
                    <p>1、买家在收到货品后因不满意货品希望退换货的时侯。</p>
                    <p>2、因质量问题产生的退换货，所有邮费必须卖家承担，七天内无理由退换货质量问题的界定为货品破损或残缺。</p>
                    <p>3、退换货要求具备商品收到时完整的外包装、配件、吊牌等；购买物品被洗过、人为破坏或标牌拆卸的不予退换；所有预定或订制特殊尺码的不予退换；成人用品等特殊物品一旦拆封或使用不得退换。</p>
                    <p>4、非商品质量问题的退换货，应由买家承担往返运费，如果是包邮产品因买家个人喜好或个人原因导致的退货，如：颜色不喜欢，尺码不合适等，商家则无需承担来回运费，商家仅需承担初次邮寄给顾客的运费即可。</p>
                </div>
            </div>
            <!-- <router-view></router-view> -->
        </div>
        <footer>
            <div class="footer-customer">
                <i class="iconfont icon-kefu"></i>
                <span>联系客服</span>
            </div>
            <div class="footer-car">
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </div>
            <router-link tag="div" to="/shoppingcar" class="join-car">加入购物车</router-link>
        </footer>
    </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "orderdetail",
    components: { TitleB }
};
</script>

<style lang="scss">
.buy-feidi {
    background-color: #ddd;
    font-size: 12px;
    color: #777;
}
.banner {
    background-color: #ddd;
    margin-top: 50px;
    margin-bottom: 10px;
    img {
        width: 100%;
    }
    .banner-text {
        background-color: #fff;
        padding: 10px;
        .title {
            color: #000;
            font-size: 14px;
        }
        .price-box {
            display: flex;
            justify-content: space-between;
            .price {
                color: rgb(250, 158, 20);
                font-size: 16px;
            }
        }
        .type-box {
            display: flex;
            justify-content: space-between;
            .type {
                color: #000;
            }
        }
    }
}
.buy-params {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
.buy-introduce {
    background-color: #fff;
    padding: 10px;
    .text2 {
        div {
            margin: 20px 0;
            p {
                margin: 5px 0;
                line-height: 20px;
            }
        }
    }
}
footer {
    background-color: #fff;
    display: flex;

    .footer-customer,
    .footer-car {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 25%;
        justify-content: center;
    }
    .join-car {
        width: 50%;
        background-color: rgb(250, 158, 20);
        text-align: center;
        color: #fff;
        line-height: 50px;
    }
}
</style>
