<style lang="scss" scoped>
    .make-container {
      background: #f9f9f9;
      padding: 58px 20px;
      .make-content {
        color: #555;
        line-height: 1.8;
        .make-qr{
            margin-bottom: 10px;
        }
      }
      .make-btn .weui-btn {
          width: 500px;
          color: #fff;
          border-radius: 200px;
          margin-top: 60px;
          line-height: 70px;
          height: 70px;
          font-size: 28px;
          background-color: #00D195;
      }
    }
</style>
<template>
<div class="make-container">
    <div class="data-empty" v-show="!havePage">
        没有相应的钱包数据，请创建新钱包
    </div>
    <div v-show="havePage">
        <div class="make-content alg_c">
            <vue-qr class="make-qr" :text="addresses"></vue-qr>
            <div>{{ name }}</div>
            <p class="newaddress">{{ addresses }}</p>
        </div>
        <div class="make-btn">
            <x-button type="primary" v-clipboard="addresses" @success="handleSuccess">复制地址</x-button>
        </div>
    </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import VueQr from 'vue-qr'
  import { XButton} from 'vux'
  export default {
    name: 'make',
    data () {
      return {
        havePage: false,
        name: '',
        addresses:'',
        data:''
      }
    },
    components: {
      XButton,
      VueQr
    },
    created: function () {
        var that = this
        that.getParams ()
    },
    computed: {
      ...mapGetters([
        'info',
        'current'
      ])
    },
    methods: {
        getParams () {
            var that = this
            that.$store.dispatch('UserInit', '');
            if(that.info[that.current] == '' || that.info[that.current] == undefined) {
                that.havePage = false;
            } else {
                that.havePage = true;
                that.data = that.info[that.current]
                that.name = that.data.name
                that.addresses = that.data.addresses
            }
        },
        handleSuccess (e) {
            var that = this
            if(e.text) {
                this.$vux.toast.show({
                    type: 'success',
                    text: '地址复制成功',
                })   
            }
        }
    }
  }
</script>
