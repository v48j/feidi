<template>
  <div class="title-b">
    <router-link to="/home">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <span>{{titleName}}</span>
    <span style="width:16px"></span>
  </div>
</template>

<script>
export default {
  name: "titleb",
  props: ["titleName"]
}
</script>

<style lang="scss" scoped>
.title-b {
  background-color: #000;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  i {
    color: #fff;
    font-size: 22px;
  }
}
</style>
