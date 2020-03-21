<template>
  <div class="cell-item" :class="{'border-b': border}" v-on="$listeners" v-bind="$attrs">
    <p :class="top ? 'cell-title' : ''"  v-if="title || $slots.titleSlot">
      <span :class="{'is-required': required}">
        <span class="w-20" v-if="icon">
          <i class="iconfont" :class="[icon]"></i>
        </span>{{title}}
      </span>
      <slot name="titleSlot"></slot>
    </p>
    <p class="cell-content">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CellItem',
  props: {
    title: String,
    icon: String,
    border: Boolean,
    top: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.cell-item{
  font-size: 15px;
  .cell-title{
    padding-top: 20px;
    .is-required{
      position: relative;
      &::after {
        content: ' *';
        color: red;
        position: absolute;
        top: -5px;
        right: -6px;
      }
    }
  }
  .cell-content{
    padding-top: 13px;
    padding-bottom: 13px;
    font-size: 14px;
    color: $text-color;
  }
}
</style>
