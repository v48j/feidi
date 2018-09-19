<template>
  <div class="newslist">
    <TitleB titleName="热点新闻" />
    <div class="list-box">
      <div class="news-item">
        <span>北京郎恒安生物科技有限公司核心图案都由多名海外学者昨中国……</span>
        <div class="news-text">
          <span class="time">2017-12-23 09:23</span>
          <span class="readmore">查看更多</span>
        </div>
      </div>
      <div class="news-item">
        <span>公司下设研发部、项目部、信息部</span>
        <div class="news-text">
          <span class="time">2017-12-23 09:23</span>
          <span class="readmore">查看更多</span>
        </div>
      </div>
      <div class="news-item">
        <span>恒安将依靠先进的基因组学研究和分子检测、生物信息学技术……</span>
        <div class="news-text">
          <span class="time">2017-12-23 09:23</span>
          <span class="readmore">查看更多</span>
        </div>
      </div>
      <div class="news-item">
        <span>郎恒安团队正与北京大学人民医院、首都医科大学……</span>
        <div class="news-text">
          <span class="time">2017-12-23 09:23</span>
          <span class="readmore">查看更多</span>
        </div>
      </div>
      <div class="news-item">
        <span>郎恒安在美国、瑞典、香港、台湾等国家或地区……</span>
        <div class="news-text">
          <span class="time">2017-12-23 09:23</span>
          <span class="readmore">查看更多</span>
        </div>
      </div>
    </div>
    <p class="loadmore">加载更多</p>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer"
import TitleB from "./TitleB"
export default {
  name: "newslist",
  components: { Footer, TitleB }
}
</script>

<style lang="scss">
.newslist {
  background-color: #ddd;
  height: 100vh;
  .list-box {
    background-color: #fff;
    padding: 10px;
    padding-top: 49px;
    .news-item {
      padding: 10px 0;
    }
    .news-text {
      display: flex;
      justify-content: space-between;
      .time {
        color: #aaa;
        font-size: 14px;
      }
      .readmore {
        color: #f50;
        font-size: 14px;
      }
    }
  }
}
.loadmore {
  text-align: center;
  color: #777;
  font-size: 14px;
}
</style>
