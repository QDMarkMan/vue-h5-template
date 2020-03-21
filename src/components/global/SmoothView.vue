<template>
  <transition name="page-move" mode="in-out">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'SmoothView'
}
</script>

<style lang="scss" rel="stylesheet/scss">
.page-move-enter, .page-move-leave-active{
  transform: translate(100%, 0)
}
.page-move-enter-active, .page-move-leave-active{
  transition: transform .3s
}
</style>
