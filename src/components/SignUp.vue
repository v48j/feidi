<template>
  <div class="sign-up">
    <SignUpTitle/>
    <div class="logo">
      <img src="../assets/images/login-bg.png" alt="">
    </div>
    <div class="input-box">
      <div>
        <i class="iconfont icon-icon03"></i>
        <input type="text" placeholder="手机号码/用户名">
      </div>
      <div>
        <i class="iconfont icon-icon03"></i>
        <input type="password" placeholder="密码">
      </div>
    </div>

    <router-link to="/home" tag="div" class="signin-btn">登 录</router-link>

    <div class="way">
      <router-link to="/telsignup">手机快捷登录</router-link>
      <span>忘记密码</span>
    </div>
    <div class="other">其他方式登陆:
      <i class="iconfont icon-weixin"></i>
    </div>
  </div>
</template>

<script>
import SignUpTitle from "./SignUpTitle";
export default {
    name: "SignUp",
    components: { SignUpTitle }
};
</script>

<style lang="scss">
.sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
        img {
            width: 100%;
        }
    }
    .input-box {
        display: flex;
        flex-direction: column;
        width: 90%;
        div {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 16px;
            margin-bottom: 15px;
        }
        input {
            border: none;
            outline: none;
            font-size: 12px;
        }
        i {
            padding: 0 10px;
        }
    }
    .signin-btn {
        width: 90%;
        text-align: center;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 16px;
        background-color: #35d4a0;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    .way {
        width: 80%;
        display: flex;
        justify-content: space-between;
        color: #aaa;
        font-size: 12px;
        a {
            color: #aaa;
        }
    }
    .other {
        color: #aaa;
        width: 80%;
        margin-top: 20vw;
        font-size: 12px;
        display: flex;
        align-items: center;
        i {
            font-size: 30px;
            color: #35d4a0;
            margin-left: 5px;
        }
    }
}
</style>
