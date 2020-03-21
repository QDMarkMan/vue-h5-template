<template>
  <div class="home-wrap full-screen">
    <page-view hide-back :hide-title="!showTitle" title="Vue APP">
      <div slot="titleSlot" class="flax-a">
        <!-- home title -->
        <header-home @to-search="toggleTitle(false)" v-if="showTitle"></header-home>
        <!-- search header -->
        <header-search @hide-search="toggleTitle(true)" v-else></header-search>
      </div>
      <div v-show="showTitle" class="header-tab" slot="headerSlot">
        <div v-for="item in headers" :key="item.value" class="tab-item"
          :class="item.value === type ? 'active' : ''"
          @click="setActive(item)"
          >
          <span>
            {{item.name}}
          </span>
        </div>
      </div>
      <div class="home-content">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <bottom-tab slot="bottomSlot" active="home"> </bottom-tab>
    </page-view>
  </div>
</template>

<script>
import Card from 'components/Card'
import HeaderSearch from 'components/HeaderSearch'
import HeaderHome from 'components/HeaderHome'
import BottomTab from 'components/BottomTab'
export default {
  name: 'Home',
  components: {
    Card,
    BottomTab,
    HeaderSearch,
    HeaderHome
  },
  data () {
    return {
      headers: [
        {
          name: 'Tab1',
          value: 0
        },
        {
          name: 'Tab2',
          value: 1
        },
        {
          name: 'Tab3',
          value: 2
        },
        {
          name: 'Ta4',
          value: 3
        }
      ],
      type: 0,
      showTitle: true
    }
  },
  methods: {
    setActive ({ value }) {
      this.type = value
    },
    toggleTitle (value) {
      console.log(`%c===> ${value}`, 'color: orange;')
      this.showTitle = value
    },
    clickHandler () {

    }
  }
}
</script>

<style lang="scss">
.home-wrap{
  .header-tab{
    width: 100%;
    color: #ffffff;
    padding: 0 20px 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    .tab-item {
      position: relative;
    }
    .active span {
      &::after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 25%;
        height: 2px;
        width: 50%;
        text-align: center;
        background-color: #ffffff;
        border-radius: 10px;
        // transition: all ease-in-out 1s;
        animation: show .3s 0;
      }
    }
  }
}
@keyframes show {
  form {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
