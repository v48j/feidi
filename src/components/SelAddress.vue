<template>
  <div class="sel-address">
    <TitleB titleName="选择收货地址" />
    <div class="address-box">
      <div class="address-item">
        <div class="item-top">
          <div class="radio-box">
            <input type="radio">
          </div>
          <div>
            <div class="item-text">
              <span class="p1">收货人：清风</span>
              <span class="p1">18****8240</span>
            </div>
            <span>收货地址：北京市大兴区亦庄经济开发区中和街14号汇龙森一园B座301座</span>
          </div>
        </div>
        <div class="item-bottom">
          <span class="p3">默认地址</span>
          <div>
            <i class="iconfont icon-bianji"></i>
            <i class="iconfont icon-shanchu"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="create-address">新建地址</div>
  </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "seladdress",
    components: { TitleB }
};
</script>

<style lang="scss">
.sel-address {
    background-color: #ddd;
    padding-top: 60px;
    height: 100vh;
    overflow: auto;
    font-size: 12px;
    .address-box {
        .address-item {
            margin-bottom: 10px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            padding: 10px;
            .item-top {
                display: flex;
                margin-bottom: 10px;
                .item-text {
                    .p1 {
                        font-weight: bold;
                        font-size: 13px;
                        margin-right: 20px;
                    }
                }
                .radio-box {
                    margin-right: 3px;
                }
            }
            .item-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .p3 {
                    border: 1px solid rgb(250, 158, 20);
                    color: rgb(250, 158, 20);
                    padding: 4px 8px;
                    border-radius: 2px;
                }
                i {
                    margin-left: 15px;
                    font-size: 20px;
                }
            }
        }
    }
    .create-address {
        background-color: rgb(250, 158, 20);
        color: #fff;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
}
</style>
