<template>
  <div class="zhaoshang">
    <TitleB titleName="招商引资" />
    <PublicNav/>
    <div class="zhaoshang-top">
      <p class="zhaoshang-title">请填写您的信息：</p>
      <div class="top-item-box">
        <div class="top-item">
          <i class="iconfont icon-chengshijianshe icon"></i>
          <label>意向代理城市：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-biaoqian icon"></i>
          <label>公司或机构名称：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-jinjilianxiren icon"></i>
          <label>联系人姓名：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-iconfontdianhua3 icon"></i>
          <label>联系人电话：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-mail icon"></i>
          <label>联系人邮箱：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-dingwei icon"></i>
          <label>公司/个人地址：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="top-item">
          <i class="iconfont icon-trophy icon"></i>
          <label>公司/个人优势：<input type="text" placeholder="请输入信息"></label>
        </div>
        <div class="sub-btn">
          <span>提交信息</span>
        </div>

      </div>
    </div>
    <div class="zhaoshang-bottom">
      <p class="zhaoshang-title">联系我们：</p>
      <div class="bottom-item">
        <i class="iconfont icon-icon-p_lianxirenguanli icon"></i>
        <span>联系人：王先生</span>
      </div>
      <div class="bottom-item">
        <i class="iconfont icon-iconfontdianhua3 icon"></i>
        <span>电　话：18701521668</span>
      </div>
      <div class="bottom-item">
        <i class="iconfont icon-dingwei icon"></i>
        <span>地　址：北京市亦庄中和街14号</span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleB from "./TitleB"
import PublicNav from "./PublicNav"
export default {
  name: "zhaoshang",
  components: { TitleB, PublicNav }
}
</script>


<style lang="scss">
.zhaoshang {
  background-color: #ddd;
  height: 100vh;
  .zhaoshang-title {
    text-indent: 10px;
  }
}
.zhaoshang-top {
  .sub-btn {
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    span {
      background-color: rgb(255, 166, 0);
      color: #fff;
      padding: 2px 24px;
      border-radius: 2px;
    }
  }
  .top-item {
    input {
      border: none;
      outline: none;
    }
    .icon {
      color: rgb(48, 214, 123);
      margin-right: 5px;
    }
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    line-height: 50px;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
  }
}
.zhaoshang-bottom {
  .bottom-item {
    background-color: #fff;
    line-height: 50px;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
    .icon {
      color: rgb(48, 214, 123);
      margin-right: 5px;
    }
  }
}
</style>

