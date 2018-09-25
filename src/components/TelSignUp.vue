<template>
  <div class="tel-sign-up">
    <SignUpTitle/>
    <div class="logo">
      <span class="cue">为保证您的账号安全及正常使用，依据《网络安全法》相关要求，将绑定您的手机号，感谢您的理解及支持</span>
      <img src="../assets/images/login-bg.png" alt="">
    </div>
    <div class="input-box">
      <div>
        <i class="iconfont icon-icon03"></i>
        <input type="text" placeholder="手机号码/用户名">
      </div>
      <div>
        <i class="iconfont icon-icon03"></i>
        <input type="password" placeholder="验证码">
        <span class="get">获取验证码</span>
      </div>
    </div>

    <router-link to="/home" tag="div" class="signin-btn">登 录</router-link>

  </div>
</template>

<script>
import SignUpTitle from "./SignUpTitle";
export default {
    name: "TelSignUp",
    components: { SignUpTitle }
};
</script>

<style lang="scss">
.tel-sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
        position: relative;
        img {
            width: 100%;
        }
        .cue {
            position: absolute;
            width: 100%;
            top: 0;
            font-size: 12px;
            padding: 5px;
            background-color: #fff;
            opacity: 0.7;
            color: #777;
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
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
        }
        input {
            border: none;
            outline: none;
            flex-shrink: 1;
            font-size: 12px;
        }
        i {
            padding: 0 10px;
            flex-shrink: 0;
        }
        .get {
            color: #35d4a0;
            font-size: 12px;
            flex-shrink: 0;
            border-left: 1px solid #ddd;
            padding-left: 10px;
            line-height: 20px;
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
        margin-top: 40px;
    }
    .way {
        width: 80%;
        display: flex;
        justify-content: space-between;
        color: #aaa;
        a {
            color: #aaa;
        }
    }
    .other {
        color: #aaa;
        width: 80%;
        margin-top: 25vw;
        display: flex;
        align-items: center;
        i {
            font-size: 40px;
            color: #35d4a0;
            margin-left: 5px;
        }
    }
}
</style>