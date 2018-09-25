<template>
    <div class="fapiao">
        <TitleB titleName="发票信息" />
        <div class="fapiaotype">
            <span class="span1">发票类型</span>
            <div>
                <span class="span2">纸质发票</span>
            </div>
        </div>
        <div class="taitou">
            <span class="title">发票抬头</span>
            <div class="checkbtn">
                <div><input type="radio" name="fapiaotype" value="personal" v-model="$store.state.newOrder.newOrder.fapiaoType">
                    <span>个人</span>
                </div>
                <div><input type="radio" name="fapiaotype" value="company" v-model="$store.state.newOrder.newOrder.fapiaoType">
                    <span>单位</span>
                </div>
            </div>
            <div class="text" v-if="$store.state.newOrder.newOrder.fapiaoType==='company'">
                <input type="text" placeholder="请在此填写单位名称">
                <input type="text" placeholder="请在此填写纳税人识别号">
            </div>
        </div>
        <div class="fapiao-content">
            <span class="fapiao-title">发票内容</span>
            <span>明细</span>
        </div>
        <router-link tag="div" to="/confirmorder" class="sure-btn">确定</router-link>
    </div>
</template>

<script>
import TitleB from "./TitleB";
export default {
    name: "fapiao",
    components: { TitleB }
};
</script>

<style lang="scss">
.fapiao {
    background-color: #ddd;
    padding-top: 60px;
    font-size: 12px;
    height: 100vh;
    .fapiaotype {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin-bottom: 10px;

        .span1 {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 5px;
        }
        .span2 {
            color: rgb(250, 158, 20);
            border: 1px solid rgb(250, 158, 20);
            padding: 3px 7px;
            display: inline-block;
        }
    }
    .taitou {
        background-color: #fff;
        margin-bottom: 10px;
        padding: 10px;
        .title {
            font-weight: bold;
            font-size: 14px;
        }
        .checkbtn {
            display: flex;
            div {
                margin-right: 25px;
            }
        }
        .text {
            input {
                border: none;
                background-color: #eee;
                width: 100%;
                line-height: 30px;
                text-indent: 10px;
                font-size: 12px;
                outline: none;
                margin-top: 10px;
            }
        }
    }
    .fapiao-content {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin-bottom: 10px;
        padding: 10px;
        .fapiao-title {
            font-weight: bold;
            font-size: 14px;
        }
    }
    .sure-btn {
        position: absolute;
        bottom: 0;
        background-color: rgb(250, 158, 20);
        width: 100%;
        text-align: center;
        color: #fff;
        line-height: 50px;
        font-size: 16px;
    }
}
</style>
