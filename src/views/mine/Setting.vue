<template>
  <div class="Setting-wrap full-screen">
    <page-view title="Setting">
      <content-box title="Change Password">
        <cell-item title="Old Password">
          <m-input placeholder="Input Old Password" type="password"></m-input>
        </cell-item>
        <cell-item title="New Password">
          <m-input placeholder="Input New Password" type="password"></m-input>
        </cell-item>
        <cell-item title="Confirm Password">
          <m-input placeholder="Input Confirm Password" type="password"></m-input>
        </cell-item>
        <div class="bottom-btn">
          <nut-button
            block
            shape="circle"
          >
          Submit
          </nut-button>
        </div>
      </content-box>
    </page-view>
  </div>
</template>

<script>
/*
 * @Author: Etongfu
 * @Date: 2020-01-11 10:51:51
 * @Description: Setting
 */
export default {
  name: 'Setting',
  data () {
    return {
      demo: ''
    }
  },
  methods: {
    load () {

    }
  }
}
</script>

<style lang="scss">
.Setting-wrap{

}
</style>
