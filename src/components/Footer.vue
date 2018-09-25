<template>
    <div class="footer">
        <router-link tag="div" class="footer-item" to="/home" active-class="f-active">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link tag="div" class="footer-item" to="/personal" active-class="f-active">
            <i class="iconfont icon-gerenzhongxin"></i>
            <span>个人中心</span>
        </router-link>
        <router-link tag="div" class="footer-item" to="/feidi" active-class="f-active">
            <i class="iconfont icon-chanpin"></i>
            <span>肺笛</span>
        </router-link>
        <router-link tag="div" class="footer-item" to="/aboutus" active-class="f-active">
            <i class="iconfont icon-dingdan"></i>
            <span>关于我们</span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    font-size: 14px;
    height: 55px;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: #fff;
    .f-active {
        i {
            color: #00b3d4;
        }
    }
    .footer-item {
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
            font-size: 26px;
        }
        span {
            font-size: 12px;
        }
    }
}
</style>

<script>
export default {
    name: "footer1"
};
</script>

