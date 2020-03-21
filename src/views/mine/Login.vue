<template>
  <div class="login-wrap">
    <div class="login-bg">
      <h1 class="login-app-title">VUE-H5</h1>
    </div>
    <div class="login-content">
      <div class="login-box">
        <m-input icon="icon-icon-3" placeholder="Input your username"></m-input>
        <div class="p-t-20"></div>
        <m-input icon="icon-icon_wode-1" placeholder="Input your password" type="password"></m-input>
        <p class="p-t-15 t-a-r light-font">
          forget password
        </p>
        <div class="login-btn">
          <nut-button
            block
            shape="circle"
            @click="doLoginByAPI"
            >
            Login
          </nut-button>
        </div>
      </div>
      <div class="copyright">
        copyright&copy;etongfu
      </div>
    </div>
  </div>
</template>

<script>
import { setToken } from 'parts/token'
// import { doLoginByUsername } from 'api/login'
export default {
  name: 'Login',
  data () {
    return {
      loading: null,
      username: '',
      password: ''
    }
  },
  methods: {
    doLoginByAPI () {
      const para = {
        username: this.username,
        password: this.password
      }
      this.loading = this.$toast.loading('登录中')
      console.log(para)
      setTimeout(() => {
        this.loading.hide()
        setToken('testtoken')
        this.$router.push({ path: '/' })
      }, 2000)
      // doLoginByUsername(para).then(result => {
      //   if (result.success) {
      //     setToken(result.result.sessionId)
      //     this.$toast.success('登录成功', { duration: 2000 })
      //     this.$router.push({ path: '/' })
      //   } else {
      //     this.$toast.fail(result.message)
      //   }
      // }).finally(() => {
      //   this.loading = null
      // })
    }
  }
}
</script>

<style lang="scss">
.login-wrap {
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .login-bg{
    flex: 4;
    background-color: $theme-color;
    background-image: url('../../assets/images/bg.png');
    background-size: 100% 100%;
    .login-app-title{
      padding-top: 10%;
      font-size: 24px;
      text-align: center;
      font-family: auto;
      color: white;
    }
  }
  .login-content{
    flex: 7;
    position: relative;
    width: 100%;
    .login-box{
      position: relative;
      z-index: 10;
      top: -40px;
      height: 80%;
      width: 95%;
      margin: 0 auto;
      border-radius: 10px;
      background-color: #ffffff;
      border: 1px solid #f1f1f1;
      box-shadow: 0 0 10px $theme-op-color;
      padding: 50px 30px 20px;
      .login-btn{
        padding-top: 40px;
      }
    }
    .copyright{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10%;
      text-align: center;
      font-size: 15px;
      color: rgba($color: #000, $alpha: 0.3);;
    }
  }
}
</style>
