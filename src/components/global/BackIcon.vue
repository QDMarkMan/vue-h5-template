<template>
  <span class="back-icon" v-on="$listeners" v-bind="$attrs"><i class="iconfont icon-icon_you theme-font"></i></span>
</template>

<script>
export default {
  name: 'BackIcon'
}
</script>
<style lang="scss">
.back-icon{
  display: inline-block;
  align-items: center;
  i{
    font-size: 25px;
  }
}
</style>
