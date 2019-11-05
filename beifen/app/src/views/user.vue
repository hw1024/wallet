<style lang="scss" scoped>
  .user-container {
    position:absolute;
    width: 100%;
    .user-content {
      background: #00D195;
      position: relative;
      padding: 40px;
    }
    .user-top{
      text-align: center;
      font-size: 26px;
      color: #fff;
      position: relative;
      .balan{
        margin: 0 16px;
      }
      .user-name{
        display: inline-block;
        margin-right: 16px;
      }
    }
    .user-grids {
      margin-top: 28px;
      position: relative;
      overflow: hidden;
      .user-grid {
        position: relative;
        float: left;
        width: 33.33333333%;
        color: #fff;
        text-align: center;
        font-size: 18px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        img {
          width: 38px;
          height: 38px;
          vertical-align: middle;
        }
      }
    }
    .user-icon {
        width: 80px;
        height: 80px;
        vertical-align: middle;
        margin-bottom: 16px;
    }
    .user-key {
        margin-top: 8px;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
    }
    .user-list{
      position: absolute;
      z-index: 10;
      width:300px;
      max-height: 400px;
      top:130px;right:10px;
      border-radius: 5px;
      padding: 10px;
      background-color: #fff;
      overflow-y: scroll;
      border:2px solid #ccc;
      .user-btn{
        text-align: center;
        .btn{
          display: inline-block;
          padding:10px;
          width: 80%;
          background-color: #00D195; 
          margin:24px 0;
          border-radius:10px;
          color: #fff;
        }
      }
      .manage-list{
        border-top: 2px solid #ccc;
        .manage-item{
          position: relative;
          border-bottom: 2px solid #ccc;
          .manage-message{
            height: 80px;
            line-height: 80px;
            float:left;
          } 
        }
        .manage-item-active {
          color: #00D195; 
          .manage-arrow{
            border-color: #00D195!important;
          }
        }
      }
    }
    .mask{
      position:fixed;
      top: 120px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 2;
    }
    .contral-list{
      display:flex;
      border-bottom: 2px solid #ccc;
      .contral-item{
        flex: 1;
        text-align:center;
        line-height: 80px;
      }
    }
    .transfer{
      padding: 20px; 
      .psd-list {
        display: block;
        line-height: 100px;
        width:100%;
        border: none;
        border-bottom: 2px solid #ccc;
        font-size: 28px;
        background-color: #fbf9fe;
        &:focus{
          outline: none;
          border-bottom: 2px solid #ccc;
        }
      }
      .btn{
        margin-top: 60px;
      }
    }
    .manage-tab{
      display:inline-block;
      width: 100%;
    }
    .manage-arrow{
      content: "";
      display: inline-block;
      height: 16px;
      width: 16px;
      border-width: 2px 2px 0 0;
      border-color: #C8C8CD;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
      position: absolute;
      top: 50%;
      margin-top: -10px;
      right: 4px;
    }
    .main-title{
      position: relative;
      background-color: #4ec8ee;
      height: 80px;
      line-height: 80px;
      margin-top: 10px;
      padding-left: 20px;
      color: #fff;
      .manage-arrow{
        border-color: #fff;
        right: 30px;
      }
    }
  }
  .qr{
    position:absolute;
    width:400px;
    height:400px;
    margin-left:-200px;
    left:50%;
    top: 500px;
  }
  .newaddress{
    position:absolute;
    top:960px;
    width:100%;
    text-align: center;
  }
  .user-func {
      position: absolute;
      top: 20px;
      right: 20px;
      color: #ff6000;
      font-size: 14px;
  }
  .vux-header {
    background: #ffffff;
    height: 120px;
    line-height: 120px;
    font-size: 32px;
    padding: 0 40px;
  }
  .vux-header-left{
    float: left;
    color: #88f;
    img{
      width: 60px;
      height: 60px;
      vertical-align: middle;
      margin-right: 12px;
    }
    span{
      display: inline-block;
      line-height: 48px;
    }
  }
  .vux-header-right{
    float: right;
    color: #88f;
    font-size: 28px;
  }
  .contract-wrapper{
    padding: 20px 10px;   
    .contract-item{
      width: 32%;
      float: left;
      margin-left: 1%;
      text-align: center;
      height: 120px;
      line-height: 120px;
      margin-top: 14px;
      font-size: 28px;
      background-color: #16c195; 
      color: #fff;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0 10px;
    }
  }
</style>
<template>
  <div class="user-container">
    <div class="vux-header clearfix">
      <div class="vux-header-left fl">
        <img src="../assets/logo.png" alt="logo">
        <span>快上线福励币</span>
      </div>
      <div class="vux-header-right fr" @click="getUsers">设置</div>
    </div>  
    <div class="user-content">
      <div class="user-top">
        <img src="../assets/user-icon.png" class="user-icon" alt="icon">
        <p class="balance">账户余额:<span class="balan">{{balan}}</span>Fuli</p>
        <div class="user-infos">
          <span class="user-name">{{data.name || 'EM-空钱包'}}:</span><span>{{addressInit(data.addresses) || '地址不存在请添加钱包'}}</span>
        </div>
      </div>
      <div class="user-grids clearfix">
        <router-link class="user-grid" :to="'make'">
          <img src="../assets/user_gath.png" alt="收款">
          <p>收款</p>
        </router-link>
        <router-link class="user-grid" :to="'transfer'">
          <img src="../assets/user_transfer.png" alt="转账">
          <p>转账</p>
        </router-link>
        <router-link class="user-grid" :to="'detail'">
          <img src="../assets/user_set.png" alt="管理">
          <p>管理</p>
        </router-link>
      </div>
    </div>
    <div class="user-list" v-show="usersShow" >
      <div class="user-btn"><span class="btn" @click="manageWallet">管理钱包</span></div>
      <!-- <div class="user-btn"><span class="btn" @click="manageWelfare">管理福利</span></div> -->
      <ul class="manage-list">
        <li class="manage-item" :class=" id == index ? 'manage-item-active' : '' " v-for="(item, index) in info" v-bind:key='index'>
            <div class="manage-list-top clearfix" :data-id="index" @click="manageLink(index)">
                <div class="manage-message ">
                    <p>{{ item.name }}</p>
                </div>
                <i class="manage-arrow"></i>
            </div>
        </li>
      </ul>
    </div>
    <div v-show="usersShow" @click = "getUsers" class="mask"></div>
    <div class="main-title" @click="WelfareM">福励币<i class="manage-arrow"></i></div>
    <ul class="contract-wrapper clearfix" v-show = "welfShow">
      <li v-for="(item,index) in abi" v-bind:key='index' class="contract-item" @click="methodsList(item.name,item.constant,item.inputs,'contract1')" v-if="data.addresses == own?meths[item.name]: ownerMethods[item.name]">
        {{meths[item.name]}}
      </li>
    </ul>
    <div class="main-title" @click="birthdayM">生日福利<i class="manage-arrow"></i></div>
    <ul class="contract-wrapper clearfix" v-show = "birthShow">
      <li v-for="(item,index) in abiB" v-bind:key='index' class="contract-item" @click="methodsList(item.name,item.constant,item.inputs, 'contract2')" v-if="data.addresses == own?birthMethods[item.name]: ownerBirth[item.name]">
        {{birthMethods[item.name] || ownerBirth[item.name] }}
      </li>
    </ul>
    <Dialog-input :is-show="isShow" @on-close="closeDialog" :inputItems="inputItem" @trades-btn="trades"/>
    <Dialog-tips :is-show-tips="isShowTips" :message-text="messageText" :result-copy="resultCopy" @on-clo="closeTips"/>
  </div>
</template>

<script>
  import lightwallet from 'eth-lightwallet'
  import { substring } from 'utils/index'
  import { mapGetters } from 'vuex'
  import { XButton, Flexbox, FlexboxItem, Tab, TabItem} from 'vux'
  import VueQr from 'vue-qr'
  import { contMethods } from 'utils/contMethods'
  import DialogInput from '../components/dialogInput'
  import DialogTips from '../components/dialogTips'
  //import async from 'async'
  export default {
    name: 'user',
    data () {
      return {
        data: '',
        usersShow:false,
        isShow: false,
        isShowTips: false,
        resultCopy: false,
        messageText: '',
        own: '0x600a380c48c436ad77d800961348a385f80974e9',
        balanceOfSha3: web3.sha3("balanceOf(address)").substr(2,8),
        meths: {owner: '管理者地址', totalSupply: '总发行量', balanceOf: '余额查询', transfer: '发送交易', mintToken: '增发代币', burn: '销毁代币', start: '启动合约', stop: '暂停合约', stopped: '合约是否暂停', setOwner: '更改管理者', approve: '授权转账功能', allowance: '查询授权余额', transferFrom: '被授权交易', increaseApproval: '增加授权金额', decreaseApproval: '减少授权金额', freezeAccount: '冻结解冻账户', frozenAccount: '冻结状态查询'},
        ownerMethods: {owner: '管理者地址', totalSupply: '总发行量', balanceOf: '余额查询', transfer: '发送交易', stopped: '合约是否暂停', approve: '授权转账功能', allowance: '查询授权余额', transferFrom: '被授权交易', increaseApproval: '增加授权余额', decreaseApproval: '减少授权金额', frozenAccount: '冻结状态查询'},
        birthMethods: {setDefaultContractInfoInit: '初始化合约', setEmployCoin: '设置福励数目', setEmployBirthdayInfo: '设置员工生日', employ: '查看是否领币', searchCurrentContractTransfer: '查询授权余额', setExpiredDraw: '设置有效天数'},
        ownerBirth: {receiveEmploy: '领取福励', isCanReceiveCoin:'查看是否可领'},
        inputItem: [],
        name: '',
        id: '',
        constant: false,
        balan:0.0000,
        birthShow: false,
        welfShow: false,
        contractType: '',
        abiType: []
      }
    },
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
      VueQr,
      DialogInput,
      DialogTips
    },
    created: function () {
      var that = this;
      that.gitInit();
    },
    computed: {
      ...mapGetters([
        'info',
        'current',
        'abi',
        'abiB',
        'contractAddr',
        'contractBirth'
      ])
    },
    methods: {
      onItemClick (index) {
        this.curent = index
      },
      gitInit(opts) {
        var that = this;
        that.$store.dispatch('UserInit', '')
        if (that.info[that.current] !== undefined) {
          that.id = that.current
          that.data = that.info[that.id];      
          contMethods.constantMethod('balanceOf', that.abi, that.contractAddr, [that.data.addresses], function(value){
              that.balan = value;
          });
        } 
      },
      getUsers (){
        this.usersShow = !this.usersShow;
      },
      manageWallet(){
        this.$router.push({ path: '/manage' })
      },
      manageLink (value) {
        var that = this
        that.$store.dispatch('currentUpdate', {current: value}).then(() => {
          that.usersShow = !that.usersShow;
          that.id = value
          that.data = that.info[value];       
          contMethods.constantMethod('balanceOf', that.abi, that.contractAddr, [that.data.addresses], function(value){
              that.balan = value;
          });
        })
      },
      coppyArray(arr){
        return arr.map((e)=>{
         if(typeof e==='object'){
            return Object.assign({},e);
          }else{
            return e;
          }
        }) 
      },
      methodsList(name, constant, inputs, type){
        var that = this
        that.name = name
        that.constant = constant
        that.inputItem = that.coppyArray(inputs)
        if( type == 'contract1'){
          that.contractType = that.contractAddr
          that.abiType = that.abi
        }else{
          that.contractType = that.contractBirth
          that.abiType = that.abiB
        }
        if(that.constant){
          if(name != 'isCanReceiveCoin' && inputs != "") { 
            that.isShow = true
          }else{
            if(name == 'isCanReceiveCoin'){
               that.inputItem = [that.data.addresses]
            }
            contMethods.constantMethod(name, that.abiType, that.contractType, that.inputItem, function(value){
              that.messageText = value 
              that.inputItem = []
              that.isShowTips = true
              that.resultCopy = false
            });
          }
        }else{
          that.inputItem.push({"name": "psd", "type": "password"})
            that.isShow = true
        }
      },
      trades(opts){
        var that = this
        if(that.constant){
          contMethods.constantMethod(that.name, that.abiType, that.contractType, opts.values, function(value){
            that.messageText = value 
            that.inputItem = []
            that.isShowTips = true
            that.resultCopy = false
          });
        }else{
          let global_keystore =  that.data.keystore
          keythereum.recover(opts.values[opts.values.length-1], global_keystore, function (privateKey) {
              var privateKey = privateKey.toString('hex')
              if (privateKey == 'Error: message authentication code mismatch') {
                that.$vux.toast.text('交易密码不正确', 'middle')
              } else{
                opts.values[opts.values.length-1] = privateKey;
                contMethods.blockMethod(that.data.addresses, that.name, that.abiType, that.contractType, opts.values, function(value){
                  that.messageText = value 
                  that.inputItem = []
                  that.isShowTips = true
                  that.resultCopy = true
                  var timer = setInterval(function(){
                     web3.eth.getTransactionReceipt(that.messageText,function(error,value){
                      console.log(value);
                      if(value != null){
                        that.$vux.toast.text('交易完成', 'middle')
                        window.clearInterval(timer);   
                      }
                     })
                  },1000)
                });
              }
            })
        }
        that.closeDialog()
      },
      addressInit (address) {
          var that = this
          return substring(address)
      },
      closeDialog(){
        this.isShow = false
        this.inputItem = []
      },
      closeTips(){
        this.isShowTips = false
      },
      WelfareM(){
        this.welfShow = !this.welfShow
        this.birthShow = false
      },
      birthdayM(){
        this.birthShow = !this.birthShow
        this.welfShow = false
      }
    }
  }
</script>
