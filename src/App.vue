<template>
  <div id="app">
    <!-- <smooth-view>
      <router-view/>
    </smooth-view> -->
    <router-view v-transition />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  color: $text-color;
  font-size: 16px;
  position: relative;
}
</style>
