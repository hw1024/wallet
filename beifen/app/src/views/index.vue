<style lang="scss" scoped>
.index-container{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  background-image: url('../assets/login_bg.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100% 100%;
  .index-content {
    text-align: center;
    margin-top: 380px;
    .wallent-logo {
      width: 242px;
      height: 260px;
      border-radius: 20px;
      vertical-align: middle;
    }
     .index-btn {
      width: 42%;
      margin: 0 auto;
      .btn {
        line-height: 60px;
        height: 60px;
        font-size: 28px;
        margin-top: 30px;
        color: #00D195;
      }
    }
  }
  .index-footer {
    position: absolute;
    bottom: 20px;
    left:0;
    right:0;
    color: #fff;
    text-align: center;
  }
} 
</style>
<template>
<div class="index-container">
  <div class="index-content">
      <img src="../assets/login_logo.png" class="wallent-logo" alt="logo">
      <div class="index-btn">
        <flexbox v-show="info ? true : false">
          <flexbox-item>
            <x-button class="btn" type="default" @click.native="mywalletBtn">我的钱包</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
            <x-button class="btn" type="default" @click.native="createwalletBtn">创建钱包</x-button>
          </flexbox-item>
        </flexbox>
      </div>   
  </div>
  <div class="index-footer">快上线为区块链而生</div>
</div>
</template>

<script>
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  import { mapGetters } from 'vuex'
  export default {
    name: 'index',
    components: {
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {  
      }
    },
     computed: {
      ...mapGetters([
        'info'
      ])
    },
    methods: {
      mywalletBtn() {
        this.$router.push({ path: '/user' })
      },
      createwalletBtn() {
        this.$router.push({ path: '/create' })
      },
    }
  }
</script>
