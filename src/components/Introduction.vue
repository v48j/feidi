<template>
  <div class="introduction">
    <TitleB titleName="肺笛简介" />
    <PublicNav/>
    <div class="pro-name">
      <p class="introduction-title">产品介绍</p>
      <div class="name-item">
        <i class="iconfont icon-chanpin icon"></i>
        <span>产品名称：排痰器</span>
      </div>
      <div class="name-item">
        <i class="iconfont icon-dingwei icon"></i>
        <span>商品名：郎弗罗@肺笛</span>
      </div>
      <div class="name-item">
        <i class="iconfont icon-dingwei icon"></i>
        <span>可选型号：家庭治疗护理型</span>
      </div>
    </div>
    <div class="pro-people">
      <p class="introduction-title">适用人群</p>
      <div class="peo-box">
        <div class="peo-item">
          <i class="iconfont icon-chouyan"></i>
          <span>烟民</span>
        </div>
        <div class="peo-item">
          <i class="iconfont icon-2"></i>
          <span>尘肺病</span>
        </div>
        <div class="peo-item">
          <i class="iconfont icon-danao"></i>
          <span>肺部疾病患者</span>
        </div>
        <div class="peo-item">
          <i class="iconfont icon-yujiaxue"></i>
          <span>雾霾吸入者</span>
        </div>
      </div>
    </div>
    <div class="pro-feature">
      <p class="introduction-title">产品特点</p>
      <div class="feature-box">
        <div class="feature-item">
          <img src="../assets/images/feature1.jpg" alt="">
          <span>美国原装进口</span>
        </div>
        <div class="feature-item">
          <img src="../assets/images/feature2.jpg" alt="">
          <span>纯物理治疗</span>
        </div>
        <div class="feature-item">
          <img src="../assets/images/feature3.jpg" alt="">
          <span>吹出有害物质</span>
        </div>
      </div>
    </div>
    <div class="pro-use">
      <p class="introduction-title">使用方法</p>
      <div class="use-text">
        <span>
          <i class="iconfont icon-dian dot"></i>
          保持一个放松的位置；背部挺直不要靠在椅背上，身体略前请，并保持喉咙和气道畅通，拿住肺笛向下指</span>
        <span>
          <i class="iconfont icon-dian dot"></i>比平常更深一些吸气</span>
        <span>
          <i class="iconfont icon-dian dot"></i>把嘴唇完全地包住吹嘴</span>
        <span>
          <i class="iconfont icon-dian dot"></i>平稳而缓慢的向肺笛吹气，好像要把蜡烛吹灭。当吹气时，哨片将震动并传递声波。在吹气时专注于保持哨片</span>
        <span>
          <i class="iconfont icon-dian dot"></i>把吹嘴从口中一开，快速地吸一口气，并重复以上步骤</span>
      </div>
    </div>
    <div class="pro-principle">
      <p class="introduction-title">工作原理</p>
      <p class="principle-text">肺笛(Lung Flute)不需要外部能源供给，由患者手持即可操作。其设计原理模仿健康人体肺部的自然黏液清除系统。在健康人的肺中，支气管壁上的纤毛协调以及有节奏地摆动，可以产生16~40Hz的振动，使气管内粘稠的分泌物变得稀释，并运向喉咽部，最终通过咳嗽或者吞咽排出肺部。当患者向这个像笛子一样的管子里吹气时，它会稳定地发出16-40赫兹的低频振动并将其传递到患者的肺部，将里面淤积的粘液振散，这样就能使患者在放松的状态下，更容易的将粘液咳出来。</p>
    </div>

  </div>
</template>

<script>
import TitleB from "./TitleB"
import PublicNav from "./PublicNav"
export default {
  name: "introduction",
  components: { TitleB, PublicNav }
}
</script>

<style lang="scss">
.introduction {
  background-color: #ddd;
  .introduction-title {
    border-left: 2px solid rgb(48, 214, 123);
    margin: 10px 0;
    padding: 0 10px;
    display: inline-block;
    margin-left: 10px;
    line-height: 20px;
  }
}
.pro-name {
  .name-item {
    background-color: #fff;
    line-height: 50px;
    padding: 0 10px;
    font-size: 14px;
    color: #777;
    .icon {
      color: rgb(48, 214, 123);
      margin-right: 5px;
    }
  }
}
.pro-people {
  .peo-box {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px 20px;
    color: #777;
    .peo-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: 30px;
        color: rgb(48, 214, 123);
      }
    }
  }
}
.pro-feature {
  .feature-box {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .feature-item {
      color: #777;
      display: flex;
      flex-direction: column;
      img {
        width: 29vw;
        height: 18vw;
      }
    }
  }
}
.pro-use {
  .use-text {
    display: flex;
    flex-direction: column;
    color: #777;
    padding: 0 10px;
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
.pro-principle {
  .principle-text {
    color: #777;
    font-size: 14px;
    margin: 0;
    padding: 0 10px 20px;
  }
}
</style>
