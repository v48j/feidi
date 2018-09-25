<template>
    <div class="shopping-car">
        <TitleB titleName="购物车" />
        <div class="goods-list">

            <div class="good" v-for="ele in $store.state.carGoods.carGoods" :key="ele.id">
                <div class="buy-time">{{ele.time}}</div>
                <div class="buy-content">
                    <div class="check-box">
                        <input type="checkbox" id="select" :checked="ele.sel" @change="selGood(ele.id)">
                        <label class="check" for="select"></label>
                    </div>
                    <img src="../assets/images/dingdan.jpg" alt="">
                    <div class="good-text">
                        <span class="title">{{ele.goodsName}}</span>
                        <span class="type">购买类型：{{ele.type}}</span>
                        <div class="price-box">
                            <NumBtn/>
                            <span class="price">￥{{ele.price}}.00</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <footer>
            <div class="all-box">
                <input type="checkbox" id="sel-all" @change="selAll()" v-model="$store.state.carGoods.selectAll">
                <label for="sel-all" class="test"></label>
                <label for="sel-all" class="lab-all">全选</label>
            </div>
            <div class="heji-price">合计:
                <span>￥{{$store.getters.getAllPrice}}</span>
            </div>
            <router-link to="/confirmorder" tag="div" class="buy">去结算</router-link>
        </footer>
    </div>
</template>

<script>
import TitleB from "./TitleB.vue";
import NumBtn from "./NumBtn";
export default {
    name: "shoppingcar",
    components: { TitleB, NumBtn },
    methods: {
        selAll: function() {
            this.$store.commit("selAll");
        },
        selGood: function(id) {
            this.$store.commit("selGood", id);
        }
    }
};
</script>

<style lang="scss">
.shopping-car {
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.goods-list {
    margin-top: 60px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .good {
        background-color: #fff;
        .buy-time {
            padding: 10px;
        }
        .buy-content {
            padding: 0 10px 10px 10px;
            display: flex;
            align-items: center;
            .check-box {
                position: relative;
                padding-left: 30px;
                height: 20px;
                input {
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                }
                .check::before {
                    left: 0;
                    content: "";
                    display: block;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    top: 0;
                }
                .check::after {
                    top: 0;
                    left: 0;
                    content: "";
                    display: block;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                }
                input:checked + .check::before {
                    background-color: rgb(250, 158, 20);
                }
                input:checked + .check::after {
                    background-image: url("../assets/images/select.png");
                }
            }
            img {
                height: 65px;
                border: 1px solid #ccc;
                margin-right: 10px;
            }
            .good-text {
                display: flex;
                flex-direction: column;
                .title {
                    font-size: 14px;
                }
                .type {
                    font-size: 12px;
                    color: #777;
                    margin: 4px 0;
                }
                .price-box {
                    display: flex;
                    justify-content: space-between;
                    .price {
                        color: rgb(250, 158, 20);
                    }
                }
            }
        }
    }
}
footer {
    height: 50px;
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    .all-box {
        width: 25%;
        padding-left: 10px;
        position: relative;
        input {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }
        .test::before {
            left: 10px;
            content: "";
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #ccc;
            top: 0;
        }
        .test::after {
            top: 0;
            left: 10px;
            content: "";
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
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
        .lab-all {
            margin-left: 25px;
        }
    }
    .heji-price {
        width: 40%;
        span {
            color: rgb(250, 158, 20);
        }
    }
    .buy {
        width: 35%;
        text-align: center;
        line-height: 50px;
        background-color: rgb(250, 158, 20);
        color: #fff;
    }
}
</style>
