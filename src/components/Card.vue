<template>
  <div class="card" v-on="$listeners" v-bind="$attrs">
    <header class="card-header p-b-10">
      <span class="card-name">Card</span>
      <a class="card-btn" href="javascript:void(0)">view ></a>
    </header>
    <ul class="card-content">
      <li><span class="content-title">Info 1 : &nbsp;</span>XXXXXXXXX<span></span></li>
      <li><span class="content-title">Info 2 : &nbsp;</span>xxx</li>
      <li><span class="content-title">Info 3 : &nbsp;</span> xxxxx</li>
    </ul>
    <div class="card-operate">
      <nut-button type="default" shape="circle" @click="toNext('/report/Progress')" small>Button</nut-button>
      &nbsp;
      <nut-button type="red" shape="circle"  small>Circle Button</nut-button>
    </div>
    <div class="card-footer">
      <nut-row>
        <nut-col type="flex" :span="12"  class="t-a-l">
          Time: 2019/12/12 12:12:12
        </nut-col>
    </nut-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    toNext (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss">
.card{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 8px;
  font-size: 14px;
  margin-bottom: 8px;
  .card-header{
    padding: 5px 0;
    .card-name{
      color: #000;
      font-size: 16px;
    }
    .card-btn{
      float: right;
      color: $theme-color;
    }
  }
  .card-content{
    padding-top: 8px;
    li{
      .content-title{
        color: rgba($color: #000000, $alpha: 0.7);
      }
      padding-bottom: 8px;
      color: $card-content-color;
    }
  }
  .card-operate {
    padding: 8px 0;
    text-align: right;
  }
  .card-footer {
    padding-top: 8px;
    border-top: 1px dashed $dark-color;
    font-size: 12px;
    color: $dark-text-color;
  }
}
</style>
