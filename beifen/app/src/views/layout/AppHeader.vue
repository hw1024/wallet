<style lang="scss">
.header-container {
  .vux-header {
    background: #00D195;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    padding: 0;
    .vux-header-left {
      top: 27px;
      left: 24px;
      font-size: 26px;
      line-height: 26px;
      color: #fff;
      .vux-header-back {
        color: #fff;
        padding-left: 20px;
      }
      .left-arrow {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0px;
        left: 0;
        &:before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #fff;
          border-width: 2px 0 0 2px;
          -webkit-transform: rotate(315deg);
          transform: rotate(315deg);
          top: 2px;
          left: 0;
        }
      }
    }
    .vux-header-title{
      font-size: 30px;
      height: 80px;
      line-height: 80px;
      margin: 0 100px;
    }
    .vux-header-right {
      top: 26px;
      right: 24px;
      font-size: 24px;
      line-height: 24px;
      color: #fff;
      .vux-header-more:after {
          content: "保存";
          font-size: 28px;
          color: #fff;
      }
    }
    
  }
}

</style>
<template>
  <div>
    <x-header :title="title" :right-options="{showMore: showMore}" @on-click-more="showMenus = true"></x-header>
  </div>
  <!-- <div class="vux-header clearfix">
    <div class="vux-header-left fl">
      <img src="../../assets/logo.png" alt="logo">
      <span>快上线福励币</span>
    </div>
    <div class="vux-header-right fr">
      <x-button @click.native="showPopupPicker = true" type="default">{{ value }}</x-button>
      <popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="list" v-model="value"></popup-picker>
    </div>
  </div> -->
</template>
<script>
import { XHeader } from 'vux'
export default {
  name: 'AppHeader',
  components: {
    XHeader
  },
	data () {
  	return {
      showMore: false
  	}
	},
  computed: {
    title () {
      return this.$route.meta.title
    }
  },
  created: function () {
    var that = this
  },
  methods: {
  }
}
</script>