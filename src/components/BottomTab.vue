<template>
  <div class="bottom-tab">
    <div class="bottom-tab-bar" :class="active == 'home' ? 'bottom-tab-bar-active' : ''" @click="changeTab('Home')">
      <p><i class="iconfont icon-icon_huabanfuben1"></i></p>
      <p class="tab-title">Home</p>
    </div>
    <div class="bottom-tab-bar" :class="active == 'mine' ? 'bottom-tab-bar-active' : ''" @click="changeTab('Mine')">
      <p><i class="iconfont icon-icon_wode-"></i></p>
      <p class="tab-title">Mine</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomTab',
  props: {
    active: String
  },
  methods: {
    changeTab (target) {
      if (target.toLowerCase() !== this.active) {
        this.$router.push(`/${target}`)
      }
    }
  }
}
</script>

<style lang="scss">
.bottom-tab{
  height: $bottom-height;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  // border-top: 1px solid $dark-color;
  .bottom-tab-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $text-color;
    p i {
      font-size: 18px;
    }
    .tab-title{
      font-size: 13px;
      padding-top: 5px;
    }
  }
  .bottom-tab-bar-active {
    p {
      color: $theme-color;
    }
  }
}
</style>
