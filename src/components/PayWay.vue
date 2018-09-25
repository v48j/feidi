<template>
    <div class="pay-way">
        <TitleB titleName="结算页" />
        <div class="need-pay">
            <span>需支付：</span>
            <span class="color">￥4000.00</span>
        </div>
        <div class="sel-pay">
            <p>支付方式</p>
            <div class="pay-item">
                <div class="pay-l">
                    <i class="iconfont icon-weixinzhifu2"></i>
                    <div class="pay-text">
                        <span>微信支付</span>
                        <span class="small">微信安全支付</span>
                    </div>
                </div>
                <div class="pay-sel">
                    <input type="radio" id="test" name="way" @change="selectWay('微信')">
                    <label for="test" class="test"></label>
                </div>
            </div>
            <div class="pay-item">
                <div class="pay-l">
                    <i class="iconfont icon-zhifubao icon"></i>
                    <div class="pay-text">
                        <span>支付宝支付</span>
                        <span class="small">支付宝安全支付</span>
                    </div>
                </div>
                <div class="pay-sel">
                    <input type="radio" id="test2" name="way" @change="selectWay('支付宝')">
                    <label for="test2" class="test"></label>
                </div>
            </div>
        </div>
        <div @click="showShadow" :class="{payGo:true,unpayGo:!$store.state.payway.way}">
            {{$store.state.payway.way}}支付￥2078.00元
        </div>
        <div class="pay-pop-box" v-if="shadow">
            <div class="pay-pop">
                <div class="color1">请确认{{$store.state.payway.way}}支付是否已完成</div>
                <router-link class="color2" tag="div" to="./paysuccess">已完成支付</router-link>
                <div class="color3" @click="shadow=false">支付遇到问题，重新支付</div>
            </div>
            <div class="shadow"></div>
        </div>
    </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "payway",
    components: { TitleB },
    data: () => ({
        shadow: false
    }),
    methods: {
        selectWay: function(type) {
            this.$store.commit("changeWay", type);
        },
        showShadow: function() {
            if (this.$store.state.payway.way) {
                this.shadow = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.pay-way .pay-pop-box {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin-bottom: 0;

    .shadow {
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: 0.3;
        position: absolute;
        top: 0;
        z-index: 2;
    }
    .pay-pop {
        opacity: 1;
        background-color: #fff;
        position: absolute;
        z-index: 3;
        width: 80%;
        left: 10%;
        top: 30%;
        font-size: 13px;
        border-radius: 10px;
        div {
            text-align: center;
            padding: 15px;
        }
        div + div {
            border-top: 1px solid #ccc;
        }
        .color1 {
            font-weight: bold;
        }
        .color2 {
            color: rgb(250, 158, 20);
        }
        .color3 {
            color: #aaa;
        }
    }
}
.pay-way {
    background-color: #ddd;
    padding-top: 60px;
    height: 100vh;
    > div {
        padding: 10px;
        margin-bottom: 10px;
    }
    .need-pay {
        display: flex;
        background-color: #fff;
        font-size: 14px;
        width: 100%;
        justify-content: space-between;
        .color {
            color: rgb(250, 158, 20);
        }
    }
    .sel-pay {
        background-color: #fff;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        padding: 0;
        p {
            margin: 0;
            font-size: 12px;
            color: #aaa;
            padding: 8px;
        }
        > div {
            border-top: 1px solid #ccc;
            padding: 8px;
        }
        .pay-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            i {
                font-size: 20px;
                color: #35d4a0;
                margin-right: 10px;
            }
            .icon {
                font-size: 24px;
                color: #00b3d4;
            }

            .pay-l {
                display: flex;
                align-items: center;
                .pay-text {
                    display: flex;
                    flex-direction: column;
                    font-size: 12px;
                    line-height: 18px;
                    .small {
                        font-size: 10px;
                        color: #aaa;
                    }
                }
            }
            .pay-sel {
                position: relative;
                padding-left: 15px;
                height: 15px;
                input[type="radio"] {
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                    top: 0;
                    left: 0;
                }
                .test::before {
                    left: 0;
                    content: "";
                    display: block;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: #ccc;
                    top: 0;
                }
                .test::after {
                    top: 0;
                    left: 0;
                    content: "";
                    display: block;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                }
                input:checked + .test::before {
                    background-color: rgb(250, 158, 20);
                }

                input:checked + .test::after {
                    background-image: url("../assets/images/select.png");
                }
            }
        }
    }
    .payGo {
        text-align: center;
        color: #fff;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        margin-bottom: 0;
        width: 100%;
        background-color: rgb(250, 158, 20);
    }
    .unpayGo {
        background-color: #bbb;
        color: #ddd;
    }
}
</style>
