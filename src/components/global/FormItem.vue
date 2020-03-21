<template>
  <div class="form-item border-b" :class="inline ? 'inline-form-item': ''">
    <label class="form-label">
      <span :class="required ? 'is-required': ''">
        {{label}}&nbsp;:
      </span>
    </label>
    <div class="form-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: String,
    required: Boolean,
    inline: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.form-item{
  width: 100%;
  font-size: 15px;
  padding-top: 10px;
  // padding: 10px 0;
  font-size: 14px;
  color: $text-color;
  .form-label {
    min-width: 65px;
    white-space: nowrap;
    display: inline-block;
    padding-right: 6px;
    span{
      position: relative;
    }
    .is-required{
      &::after {
        content: ' *';
        color: red;
        position: absolute;
        top: -5px;
        right: -6px;
      }
    }
  }
  .form-content{
    flex: auto;
  }
}
.inline-form-item{
  display: flex;
  flex-direction: row;
  .form-label{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
