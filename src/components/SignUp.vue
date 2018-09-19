<template>
  <div class="sign-up">
    <SignUpTitle/>
    <div>
      <input type="text" placeholder="手机号码/用户名">
      <input type="password" placeholder="密码">
    </div>
    <div>
      <router-link to="/home">登录</router-link>
    </div>
    <div>
      <router-link to="/telsignup">手机快捷登录</router-link>
      <span>忘记密码</span>
    </div>
    <div>其他方式登陆</div>
  </div>
</template>

<script>
import SignUpTitle from "./SignUpTitle"
export default {
  name: "SignUp",
  components: { SignUpTitle }
}
</script>
