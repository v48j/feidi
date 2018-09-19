<template>
  <div class="personal">
    <TitleB titleName="个人资料" />
    <div></div>
    <div class="exit">
      <router-link to="/">退出登录</router-link>
    </div>
  </div>
</template>

<script>
import TitleB from "./TitleB"
export default {
  name: "personal",
  components: { TitleB }
}
</script>


<style lang="scss">
.personal {
  background-color: #ddd;
  height: 100vh;
}
.exit {
  position: fixed;
  bottom: 0;
  background-color: rgb(255, 166, 0);
  width: 100%;
  text-align: center;
  line-height: 50px;
  a {
    color: #fff;
    font-size: 18px;
  }
}
</style>

