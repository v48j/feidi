<template>
    <div class="sign-up-title">
        <router-link to="/">
            <i class="iconfont icon-fanhui"></i>
        </router-link>
        <span>登录</span>
        <router-link to="/signin" class="sign-in">注册</router-link>
    </div>
</template>

<script>
export default {
    name: "signuptitle",
    methods: {}
};
</script>


<style lang="scss" scoped>
.sign-up-title {
    background-color: #35d4a0;
    width: 100%;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 50px;
    i {
        color: #fff;
        font-size: 22px;
    }
    .sign-in {
        color: #fff;
    }
}
</style>