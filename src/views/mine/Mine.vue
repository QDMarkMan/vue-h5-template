<template>
  <div class="mine-wrap full-screen">
    <page-view title="Mine">
      <div class="setting-icon" slot="titleSlot">
        <router-link to="/setting">
          <i class="iconfont icon-icon_huabanfuben5"></i>
        </router-link>
      </div>
      <div class="user-info" slot="headerSlot">
        <div class="baseinfo">
          <div class="avator">
            <p class="avator-image">
              <image :src="src" />
            </p>
          </div>
        </div>
      </div>
      <div class="full-radius-white mine-content">
        <cell-item icon="icon-icon_huabanfuben2" title="Home Page" border>
          <p class="base-info" @click="toNext">
            GitHub
            <span class="f-r"><i class="iconfont icon-icon_you"></i></span>
          </p>
        </cell-item>
        <cell-item icon="icon-icon_gerenxinxi" title="User Info" border>
          <p class="base-info">
            Username
            <span class="f-r">etongfu</span>
          </p>
          <p class="base-info">
            Phone
            <span class="f-r">1358325XXXX</span>
          </p>
          <p class="base-info">
            Wechat
            <span class="f-r">1358325XXXX</span>
          </p>
        </cell-item>
        <cell-item icon="icon-icon_huabanfuben4" title="Description" border>
        </cell-item>
      </div>
      <bottom-tab slot="bottomSlot" active="mine"> </bottom-tab>
    </page-view>
  </div>
</template>

<script>
/*
 * @Author: etongfu
 * @Date: 2020-01-10 18:56:44
 * @Description: user info
 */
import BottomTab from 'components/BottomTab'
export default {
  name: 'Mine',
  components: {
    BottomTab
  },
  data () {
    return {
      src: ''
    }
  },
  methods: {
    toNext () {
      window.open('https://github.com/QDMarkMan')
    }
  }
}
</script>

<style lang="scss">
.mine-wrap{
  font-size: 14px;
  .setting-icon{
    flex: auto;
    text-align: right;
    a{
      color: #fff;
    }
    i {
      font-size: 20px;
    }
  }
  .user-info {
    color: #ffffff;
    padding-bottom: 20px;
    .avator {
      padding: 0 0 20px 0;
      .avator-image{
        // display: inline-block;
        margin: 0 auto;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background-color: $light-color;
      }
    }
  }
  .mine-content{
    .cell-item{
      padding-left: 8px;
      .cell-title i{
        color: $theme-color;
        font-size: 16px;
      }
    }
    // padding: 0 10px;
    .base-info{
      padding-left: 20px;
      padding-bottom: 10px;
      font-size: 13px;
      padding-right: 8px;
      span{
        color: $light-content-color;
      }
    }
    .content-font{
      font-size: 13px;
      color: $light-content-color;
    }
  }
}
</style>
