<template>
  <div v-if="value" class="content-box-title" :class="[icon ? '' : 'content-box-title-border']" v-on="$listeners" v-bind="$attrs">
    <span v-if="icon" class="m-r-5">
      <i class="iconfont" :class="icon"></i>
    </span>
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'ContentBoxTitle',
  props: {
    value: String,
    icon: String,
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
// title for box
.content-box-title{
  color: $theme-color;
  font-size: 17px;
}
.content-box-title-border{
  padding-left: 7px;
  border-left: 4px solid $theme-color;
}
</style>
