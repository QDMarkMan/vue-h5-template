<template>
  <div class="header-search">
    <span class="search-icon" @click="hideSearch">
      <i class="iconfont icon-icon_zuo"></i>
    </span>
    <nut-textinput class="search-input" placeholder="search" />
    <span class="search-icon m-l-8">
      <i class="iconfont icon-icon_sousuo"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  // props: {
  //   value: String
  // },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    hideSearch () {
      this.$emit('hide-search')
    }
  }
}
</script>

<style lang="scss">
.header-search{
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: rgba($color: #fff, $alpha: 0.7);
  .search-input {
    flex: auto;
    input {
      font-size: 14px;
      background: #15caba;
      border-radius: 20px;
      border-color: $theme-color;
      height: 32px;
      color: #fff;
      &::-webkit-input-placeholder {
          color: #fff;
      }
      &:-moz-placeholder {
          color:#fff;
      }
      &::-moz-placeholder {
          color:#fff;
      }
      &:-ms-input-placeholder {
          color:#fff;
      }
    }
  }
  .search-icon {
    width: 25px;
    color: #fff;
    text-align: right;
    display: flex;
  }
}
</style>
