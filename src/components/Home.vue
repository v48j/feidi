<template>
  <div class="home">
    <TitleB titleName="首页" />
    <div class="nav">
      <router-link to="/agent" tag="div">
        <i class="iconfont icon-17"></i>
        <span>独家代理</span>
      </router-link>
      <router-link to="/introduction" tag="div">
        <i class="iconfont icon-shu"></i>
        <span>肺笛简介</span>
      </router-link>
      <router-link to="/zhaoshang" tag="div">
        <i class="iconfont icon-woshou"></i>
        <span>招商引资</span>
      </router-link>
      <router-link to="/order" tag="div">
        <i class="iconfont icon-dingdan"></i>
        <span>我的订单</span>
      </router-link>
    </div>

    <div class="product">
      <p class="home-title">我的产品</p>
      <div class="my-pro">
        <img src="../assets/images/product.jpg" alt="" class="product">
        <div class="pro-text">
          <div>
            <span class="p1">美国lung flute 正品 “肺笛” 正式进入中国</span>
            <span class="price">￥2880.00</span>
          </div>
          <div class="buy-btn">
            <span>加入购物车</span>
            <span class="buy-now">立即购买</span>
          </div>
        </div>
      </div>
    </div>

    <div class="news">
      <p class="home-title">热点新闻</p>
      <div class="new-box">
        <img src="../assets/images/news.jpg" alt="">
        <div class="news-text">
          <span>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国……</span>
          <router-link to="/newslist">查看更多</router-link>
        </div>
      </div>
      <div class="new-box">
        <img src="../assets/images/news.jpg" alt="">
        <div class="news-text">
          <span>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国……</span>
          <router-link to="/newslist">查看更多</router-link>
        </div>
      </div>
      <div class="new-box">
        <img src="../assets/images/news.jpg" alt="">
        <div class="news-text">
          <span>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国……</span>
          <router-link to="/newslist">查看更多</router-link>
        </div>
      </div>
      <router-link to="/newslist" tag="p" class="readmore">查看更多</router-link>
    </div>

    <Footer/>
  </div>
</template>

<script>
import TitleB from "./TitleB"
import Footer from "./Footer"
export default {
  name: "home",
  components: { TitleB, Footer }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #ddd;
}
.nav {
  margin-top: 49px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 15px;
  > div {
    width: 60px;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    i {
      font-size: 26px;
    }
  }
}
.product {
  padding: 15px;
  background-color: #fff;
  margin-bottom: 15px;
}
.home-title {
  padding: 0 0 10px 0;
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.my-pro {
  display: flex;
  .pro-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product {
    width: 90px;
    height: 110px;
    margin: 0 10px 0 0;
    padding: 0;
  }
  .p1 {
    color: #aaa;
    font-size: 14px;
  }
  .price {
    color: #f50;
    font-size: 20px;
    display: block;
  }
  .buy-btn {
    span {
      border: 1px solid #f50;
      font-size: 14px;
      border-radius: 4px;
      margin-right: 15px;
      padding: 2px 6px;
      color: #f50;
    }
    .buy-now {
      color: #fff;
      background-color: #f50;
    }
  }
}
.news {
  background-color: #fff;
  padding: 15px;
  padding-bottom: 68px;
  margin-bottom: 15px;
  .new-box {
    display: flex;
    margin-top: 20px;
    img {
      height: 70px;
      margin-right: 10px;
    }
    .news-text {
      font-size: 14px;
      color: #aaa;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        color: #f50;
        display: block;
        align-self: flex-end;
        font-size: 14px;
      }
    }
  }
  .readmore {
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
}
</style>
