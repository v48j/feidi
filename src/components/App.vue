<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import SignUp from "./SignUp"
import TelSignUp from "./TelSignUp"
export default {
  name: "app",
  components: { SignUp }
}
</script>

<style>
</style>
