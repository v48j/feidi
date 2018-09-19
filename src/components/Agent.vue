<template>
  <div class="agent">
    <TitleB titleName="独家代理" />
    <PublicNav/>
    <div class="agent-top">
      <span class="agent-title">授权书</span>
      <img src="../assets/images/agent.jpg" alt="" class="agent-img">
    </div>
    <div class="agent-bottom">
      <span class="agent-title">肺笛科技奖项</span>
      <div class="agent-text">

        <span>
          <i class="iconfont icon-dian dot"></i>
          2007 年Forst&Sullivan的“卓越技术奖”</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2009/10 年度科普：“年度最佳创新”</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2010 MD+DI：“关注的前50家企业”高级护理和睡眠呼吸医学杂志</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2010 年技术观察奖</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2011 年Forst&Sullivan的“肺器械年度创业公司奖”</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2012 年世界卫生组织，医疗设备创新的卫生技术汇编-低资源设置。</span>
        <span>
          <i class="iconfont icon-dian dot"></i>2015 年联合援助，“结核病诊断，目前市场和未来新技术”</span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleB from "./TitleB"
import PublicNav from "./PublicNav"
export default {
  name: "newslist",
  components: { TitleB, PublicNav }
}
</script>

<style lang="scss">
.agent {
  background-color: #ddd;

  .agent-title {
    border-left: 2px solid rgb(48, 214, 123);
    margin: 10px 0;
    padding: 0 10px;
    display: inline-block;
  }

  .agent-top {
    padding: 10px;
    .agent-img {
      width: 100%;

      display: block;
    }
  }
  .agent-bottom {
    padding: 0 10px;
    .agent-text {
      display: flex;
      flex-direction: column;
      span {
        font-size: 14px;
        line-height: 25px;
        display: flex;
        .dot {
          color: rgb(48, 214, 123);
        }
      }
    }
  }
}
</style>
