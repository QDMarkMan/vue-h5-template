<template>
  <div class="header-home">
    <span class="search-icon">
      <i class="iconfont icon-icon_sousuo" @click="toSearch"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome',
  props: {
    value: String
  },
  data () {
    return {
      showAdd: true
    }
  },
  methods: {
    toSearch () {
      this.$emit('to-search')
    },
    toAdd () {
      this.$router.push('/trial/ConfirmItem')
    }
  }
}
</script>

<style lang="scss">
.header-home{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: rgba($color: #fff, $alpha: 0.7);
  .search-icon {
    width: 25px;
    color: #fff;
    text-align: right;
    display: flex;
  }
}
</style>
