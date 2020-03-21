<template>
  <div class="images-preview">
    <img
    :src="img"
    v-for="(img, index) in imgs"
    :key="img"
    @click="handleImgsClick(index)" />
  </div>
</template>

<script>
export default {
  name: 'ImagePreview',
  props: {
    iamges: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      initialIndex: 0
    }
  },
  methods: {
    handleImgsClick (index) {
      this.initialIndex = index
      const params = {
        $props: {
          imgs: this.imgs,
          initialIndex: 'initialIndex', // 响应式数据的key名
          loop: false
        },
        $events: {
          change: (i) => {
            // 必须更新 initialIndex
            this.initialIndex = i
          }
        }
      }
      this.$createImagePreview({ ...params }).show()
    }
  }
}
</script>

<style lang="scss">
.images-preview {
  image {

  }
}
</style>
