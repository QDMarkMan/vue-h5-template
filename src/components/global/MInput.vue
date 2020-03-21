<template>
  <div class="m-input" :class="[focus ? 'm-input-active' : '']">
    <span v-if="icon" class="m-input-icon">
      <i class="iconfont" :class="icon"></i>
    </span>
    <nut-textinput
      v-on="$listeners"
      v-bind="$attrs"
      class="m-input-main"
      @focus="onFocus"
      @blur="onBlur"
      :hasBorder="false"
    />
  </div>
</template>

<script>
export default {
  name: 'MInput',
  props: {
    icon: String
  },
  data () {
    return {
      focus: false
    }
  },
  methods: {
    onFocus () {
      this.focus = true
    },
    onBlur () {
      this.focus = false
    }
  }
}
</script>

<style lang="scss">
.m-input{
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row;
  transition: all ease-in-out .3s;
  .m-input-icon{
    width: 25px;
    display: flex;
    align-items: center;
    text-align: left;
  }
  .m-input-main{
    flex: auto;
    input {
      padding-left: 0;
    }
  }
}
.m-input-active{
  border-color: $theme-color;
}
</style>
