<template>
  <div class="full-radius-white content-box" v-on="$listeners" v-bind="$attrs">
    <p v-if="title" class="content-default-title">
      {{title}}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: {
    title: String,
    noMargin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
