<template>
  <div class="tel-sign-up">
    <SignUpTitle/>
    <div>
      <input type="text" placeholder="请输入手机号">
      <input type="text" placeholder="验证码">
    </div>
    <div>
      <router-link to="/home">登录</router-link>
    </div>
  </div>
</template>

<script>
import SignUpTitle from "./SignUpTitle"
export default {
  name: "TelSignUp",
  components: { SignUpTitle }
}
</script>