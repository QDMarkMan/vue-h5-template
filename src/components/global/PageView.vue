<template>
  <div class="page-view" :class="type" v-on="$listeners" v-bind="$attrs">
    <div class="page-view-header" :style="headerStyle">
      <header class="header">
        <i v-if="!hideBack" @click="back" class="iconfont icon-back icon-icon_zuo"></i>
        <h1 v-if="!hideTitle" class="header-title">{{title}}</h1>
        <slot name="titleSlot" class="title-slot"></slot>
      </header>
      <slot name="headerSlot"></slot>
    </div>
    <div class="wrapper" :style="{'margin-top': offsetTop + 'px'}">
      <main class="content" :class="autoHeight ? '' : 'full-height-content'">
        <slot />
      </main>
    </div>
    <div class="page-view-bottom">
      <slot name="bottomSlot"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'PageView',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    // height auto expand
    autoHeight: {
      type: Boolean,
      default: false
    },
    hideBack: {
      type: Boolean,
      default: false
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: Number,
      default: -30
    }
  },
  computed: {
    headerStyle () {
      return {
        paddingBottom: this.offsetTop > 0 ? 10 : (-this.offsetTop) - 5 + 'px'
      }
    },
    contentStyle () {
      let offsetTop = Math.abs(this.offsetTop) + 5
      return {
        height: `calc(100% -${offsetTop}px)`
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
$header-height: 56px;
.page-view {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #efeff4;
  .page-view-header {
    min-height: $header-height;
    background-color: $theme-color;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    z-index: 5;
    .header {
      position: relative;
      height: $header-height;
      line-height: $header-height;
      text-align: left;
      padding: 0 15px 10px 15px;
      display: flex;
      flex-direction: row;
      .icon-back {
        margin-right: 5px;
        position: relative;
        left: -5px;
        color: #fff;
        font-size: 25px;
      }
      .header-title{
        position: relative;
        // top: -2px;
        font-size: 16px;
        display: inline-block;
        font-weight: 600;
        text-align: left;
        color: #fff;
        margin-right: 8px;
        .title-clot{
          flex: auto;
        }
      }
    }
  }
  .wrapper {
    position: relative;
    z-index: 6;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: transparent;
    padding-bottom: 10px;
  }
}
.page-view > .wrapper .desc {
  padding: 10px;
  margin: 10px 0;
  line-height: 20px;
  font-size: 14px;
}
.page-view > .wrapper .content {
  margin: 0 12px;
  // height: calc(100% - 30px);
}
.full-height-content{
  height: calc(100% - 20px);
}
.page-view.option-demo .wrapper {
  background-color: #fff;
}
.page-view.option-demo .title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}
.page-view.option-demo .options {
  margin-bottom: 15px;
}
.page-view.option-demo .option-list .group {
  margin-bottom: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.page-view.option-demo .option-list .item {
  height: 52px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.page-view.option-demo .option-list .item.sub {
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.04);
}
.page-view.option-demo .option-list .item.sub.first {
  box-shadow: 0 1px 1px 1px #eee inset;
}
.page-view.option-demo .option-list .item.sub.last {
  border-bottom: none;
}
.page-view.option-demo .demo {
  margin-bottom: 15px;
}
.page-view.option-demo .methods .method-list .group {
  margin-bottom: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.page-view.option-demo .methods .method-list .item,
.page-view.option-demo .methods .method-list button {
  height: 40px;
  font-size: 16px;
}
.page-view.option-demo .methods .method-list .item {
  background-color: grey;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.page-view.option-demo .methods .method-list button {
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fc9153;
  box-shadow: 0 0 0 1px #fc9153;
  border: none;
  outline: none;
  color: #fff;
}
</style>
