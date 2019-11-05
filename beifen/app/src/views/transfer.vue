<style lang="scss" scoped>
  .transfer-content{
    padding: 30px 40px;
    .transfer-type {
      position: relative;
      .transfer-type-btn {
        position: absolute;
        top: 36px;
        right: 0;
        color: #ff6900;
        line-height: 28px;
        font-size: 28px;
      }
    }
    .btn {
      margin-top: 64px;
      line-height: 70px;
      height: 70px;
      width: 500px;
      background-color: #00D195;
      font-size: 30px;
      border-radius: 40px;
    }
    .transfer-usable{
      font-size: 28px;
      color: #555;
      padding: 24px 0;
      .usable-balance {
        float: left;
        .balan{
          color: #ff6900;
          margin: 0 10px;
        }
      }
      .usable-btn {
        float: right;
        color: #1AAD19;
      }
    }
  }
</style>
<template>
<div class="transfer-container">
  <div class="data-empty" v-show="!havePage">
    没有相应的钱包数据，请创建新钱包
  </div>
  <div v-show="havePage">
      <div class="transfer-content">
        <input class="form-control form-control-active" type="text" show-clear="false" v-model = "aimAddr" placeholder="请输入转账地址">
        <div class="transfer-type">
          <input class="form-control form-control-active" type="text" show-clear="false" v-model = "count" placeholder="请输入转账金额"> 
          <!-- <div class="transfer-type-btn" @click="showPopupPicker = true">{{ type.toString() }}</div>
          <group>
            <popup-picker :show.sync="showPopupPicker" @on-change="onChange" :show-cell="false" title="TEST" :data="[['Fuli', 'Eth']]" v-model="type"></popup-picker>
          </group> -->
        </div>
        <div class="transfer-usable clearfix">
          <p class="usable-balance">可转余额:<span class="balan">{{balan}}</span>{{ type.toString() }}</p>
          <p class="usable-btn" @click="allTransferBtn">全部转账</p>
        </div>
        <x-button class="btn" type="primary" @click.native="transfers">提交申请</x-button>
      </div>
  </div>
  <Dialog-trade :is-show-trade="isShowTrade" :trade-title="tradeTitle" @on-close="closetradeDialog" @trades-btn="tradesPk"/>
  <Dialog-tips :is-show-tips="isShowTips" :message-text="messageText" :result-copy="resultCopy" @on-clo="closeTips"/>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { XButton, PopupPicker, Group } from 'vux'
  import { contMethods } from 'utils/contMethods'
  import { filterstring } from 'utils/index'
  import DialogTrade from '../components/dialogTrade'
  import DialogTips from '../components/dialogTips'
  
  export default {
    name: 'transfer',
    data () {
      return {
        isShowTrade: false,
        isShowTips: false,
        havePage: false,
        isSkip: true,
        isTransfer: false,
        resultCopy: true,
        tradeTitle: '请输入交易密码',
        modalTitle: '交易已发送',
        messageText: '',
        balan: 0.0000,
        showPopupPicker: false,
        type: ['Fuli'],
        id: '',
        name: '',
        addresses:'',
        data:'',
        nonce: 0,
        aimAddr: '',
        count: '',
        options: []
      }
    },
    components: {
      XButton,
      PopupPicker,
      Group,
      DialogTrade,
      DialogTips
    },
    created: function () {
        var that = this
        that.getParams ()
    },
    computed: {
      ...mapGetters([
        'info',
        'current',
        'abi',
        'contractAddr'
      ])
    },
    methods: {
      getParams () {
        var that = this
        that.$store.dispatch('UserInit', '');
        if(that.info[that.current] == undefined ) {
            that.havePage = false;
        } else {
          that.havePage = true;
          that.data = that.info[that.current]
          that.name = that.data.name
          that.addresses = that.data.addresses
          contMethods.constantMethod('balanceOf', that.abi, that.contractAddr, [that.addresses], function(value){
            that.balan = value;
          })
        }
      },
      tradesPk(opts) {
        var that = this
        if(opts.password == "" || opts.password == undefined) {
          that.$vux.toast.text('请输入您的交易密码', 'top', '20em')
        }else{
          let global_keystore =  that.data.keystore
          keythereum.recover(opts.password, global_keystore, function (privateKey) {
              var privateKey = privateKey.toString('hex')
              if (privateKey == 'Error: message authentication code mismatch') {
                that.$vux.toast.text('交易密码不正确', 'top')
              } else{
                that.closetradeDialog()
                that.$vux.loading.show({
                  text: '交易处理中'
                })
                that.options = [that.aimAddr, that.count, privateKey]
                console.log(that.options)
                console.log(that.addresses)
                 console.log(that.contractAddr)
                  console.log(that.addresses)
                contMethods.blockMethod(that.addresses, 'transfer', that.abi, that.contractAddr, that.options, function(value, err){
                    that.$vux.loading.hide()
                    if (value != '300') {
                      that.messageText = value
                      that.isShowTips = true
                    } else {
                      that.$vux.toast.text(err, 'middle')
                    }           
                  })
                that.aimAddr = ''
                that.count = ''
              }
          })
        }
      },
      transfers() {
        var that = this
        if(that.aimAddr == "" || that.aimAddr == undefined || that.aimAddr.length != 42){
          that.$vux.toast.text('请输入正确的收款地址', 'top')
        }else if (that.count == "" || that.count == undefined){
          that.$vux.toast.text('请输入正确的转账金额', 'top')
        }else{
          that.isShowTrade = true
        }
      },
      // onChange (val) {
      //   var that = this
      //   let value = val.toString()
      //   if ( value == 'Fuli') {
      //     contMethods.constantMethod('balanceOf', that.abi, that.contractAddr, [that.addresses], function(value){
      //       that.balan = value;
      //     })
      //   } else {
      //     web3.eth.getBalance(that.addresses, function (balances){
      //       console.log(balances)
      //       that.balan = balances / 1.0e18
      //     })
      //   }
      // },
      allTransferBtn() {
        var that = this
        that.count = that.balan
      },
      closetradeDialog(){
        this.isShowTrade = false
      },
      closeTips(){
        this.isShowTips = false
      }
    }
  }
</script>
