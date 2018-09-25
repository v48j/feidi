<template>
  <div class="pay-success">
    <TitleB titleName="支付成功" />
    <div class="success">
      <i class="iconfont icon-duihaocheckmark17"></i>
      <span>支付成功</span>
    </div>
    <div class="success-text">
      <p class="p1">送货信息</p>
      <p>我们将尽快给您安排发货，请您保持手机通畅，以便快递公司第一时间联系到您</p>
    </div>
    <div class="back-btn">
      <router-link to="/home" tag="span" class="color1">返回首页</router-link>
      <router-link to="/order" tag="span">查看订单</router-link>
    </div>
  </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "paysuccess",
    components: { TitleB }
};
</script>

<style lang="scss">
.pay-success {
    background-color: #fff;
    padding-top: 50px;
    .success {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #35d4a0;
        padding: 40px 10px 30px;
        i {
            font-size: 75px;
        }
        span {
            font-size: 18px;
            margin-top: 4px;
        }
    }
    .success-text {
        padding: 12px;
        p {
            font-size: 12px;
        }
        .p1 {
            font-size: 13px;
            font-weight: bold;
            border-top: 1px solid #ccc;
            padding-top: 14px;
        }
    }
    .back-btn {
        display: flex;
        width: 100%;
        justify-content: space-around;
        span {
            font-size: 13px;
            border: 1px solid #ccc;
            padding: 5px 0px;
            width: 40%;
            text-align: center;
            border-radius: 3px;
            color: #aaa;
        }
        .color1 {
            color: rgb(250, 158, 20);
            border: 1px solid rgb(250, 158, 20);
        }
    }
}
</style>
