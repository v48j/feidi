<template>
  <div class="title-b">
    <span @click="$router.back()" v-if="this.$router.history.current.path!=='/home'">
      <i class="iconfont icon-fanhui"></i>
    </span>
    <span v-else style="width:16px"></span>
    <span>{{titleName}}</span>
    <span style="width:16px"></span>
  </div>
</template>

<script>
export default {
    name: "titleb",
    props: ["titleName"]
};
</script>

<style lang="scss" scoped>
.title-b {
    background-color: #000;
    font-size: 16px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    i {
        color: #fff;
        font-size: 22px;
    }
}
</style>
