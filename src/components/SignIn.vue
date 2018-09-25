<template>
  <div class="sign-in">
    <div class="title">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>注册</span>
      <span class="none">
      </span>

    </div>
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
        <input type="password" placeholder="验证码">
        <span class="get">获取验证码</span>
      </div>
      <div>
        <i class="iconfont icon-icon03"></i>
        <input type="password" class="password" placeholder="请输入密码（6-16位，区分大小写）">
      </div>
    </div>

    <router-link to="/home" tag="div" class="signin-btn">注 册</router-link>
    <router-link to="/home" tag="div" class="signin">用已有账号登陆</router-link>

    <div class="check">
      <label><input type="checkbox">同意并遵守《郎恒安服务协议》</label>
    </div>
  </div>
</template>

<style lang="scss">
.sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
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
        .none {
            width: 22px;
        }
    }
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
        .password {
            width: 80%;
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
        margin-bottom: 3px;
        margin-top: 10px;
    }
    .signin {
        align-self: flex-end;
        font-size: 12px;
        color: #aaa;
        padding-right: 18px;
    }
    .check {
        align-self: flex-start;
        padding-left: 18px;
        margin-top: 15vw;
        font-size: 12px;
        color: #aaa;
    }
}
</style>
