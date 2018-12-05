<style lang="scss" scoped>
  .wallet-content {
    padding:30px 40px;
    .wallet-type{
      margin: 34px 0 0 28px;
      color: #666;
      font-size: 28px;
    }
    .wallet-tips {
      margin-top: 88px;
      line-height: 2;
      color: #555;
      text-align: center;
      font-size:28px;
    }
  }
</style>
<template>
<div class="wallet-content">
  <div class="creat-wallet">
    <input class="form-control form-control-active" v-model="name" type="text" show-clear="false" placeholder="钱包名称">
    <input class="form-control form-control-active" v-model="password" type="password" show-clear="false" placeholder="请输入密码">
    <input class="form-control form-control-active" v-model="repassword" type="password" show-clear="false" placeholder="请重复输入密码">
  </div>
  <div class="wallet-type">m/44'/60'/0'/0/0</div>
  <div class="wallet-tips">
		<p>欢迎使用快上线福励币平台</p>
		<p>在这里您可以创建或者导入您的钱包</p>
  </div>
  <div class="form-btn">
    <flexbox>
      <flexbox-item>
        <x-button class="btn" type="primary" @click.native="creatBtn">生成钱包</x-button>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <x-button class="btn" type="default" @click.native="restoreBtn">导入钱包</x-button>
      </flexbox-item>
    </flexbox>
  </div>
  <Dialog-modal :is-show="isShow" :is-skip='isSkip' :modal-title="modalTitle" :warning-text="warningText" :message-text="messageText"  @on-close="closeDialog"/>
</div>
</template>

<script>
  import lightwallet from 'eth-lightwallet'
  import DialogModal from '../components/dialogModal'
  import { mapGetters } from 'vuex'
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  import { validate } from 'utils/validate'
  export default {
    name: 'create',
    components: {
      DialogModal,
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        isShow: false,
        isSkip: true,
        modalTitle: '保存您的助记词',
        warningText: "安全警告：请勿将您的助记词在网络中传播，必要时请您按顺序写在纸上保存",
        messageText: '',
        name:'',
        password:'',
        repassword:''
      }
    },
    created: function () {
      var that = this;
      that.$store.dispatch('UserInit', '')
    },
    computed: {
      ...mapGetters([
        'info',
        'current'
      ])
    },
    methods: {
      creatBtn () {
        var that = this
        let [nameVal, pwdVal, rePwdVal] = [that.name, that.password, that.repassword]
        if(!nameVal){
          that.$vux.toast.text('钱包名称不能为空！', 'top');
					return false
        }
        if(pwdVal){
          if (!validate.isPwd(pwdVal)){
            that.$vux.toast.text('密码需为6-20位字符！', 'top');
            return false
          }
        } else {
          that.$vux.toast.text('密码不能为空！', 'top');
          return false
        }
        if(rePwdVal){
          if (!validate.isPwd(rePwdVal)){
            that.$vux.toast.text('密码需为6-20位字符！', 'top');
            return false
          } else if(pwdVal != rePwdVal) {
            that.$vux.toast.text('密码不一致请重新输入！', 'top');
            return false
          }
        } else {
          that.$vux.toast.text('密码不能为空！', 'top');
          return false
        }
        that.$vux.loading.show({
          text: '地址生成中'
        })
        that.createVault()
      },
      gainSeed () {
        var that = this
        var randomSeed = lightwallet.keystore.generateRandomSeed("");
        that.messageText = randomSeed;
      },
      createVault() {
        var that = this
        that.gainSeed()
        let numAddr = 1
        lightwallet.keystore.createVault({
            password: that.password,
            seedPhrase: that.messageText,
            hdPathString: "m/44'/60'/0'/0"
        }, function (err, ks) {
          ks.keyFromPassword(that.password, function(err, pwDerivedKey) {
            if(ks.generateNewAddress(pwDerivedKey, numAddr) == undefined){
              var addresses = ks.getAddresses()
              that.addresses = addresses[0]
              if (that.addresses) {
                let privateKey = ks.exportPrivateKey(that.addresses,pwDerivedKey)
                let params = { keyBytes: 32, ivBytes: 16 }
                let dk = keythereum.create(params)
                let options = {
                  kdf: "pbkdf2",
                  cipher: "aes-128-ctr",
                  kdfparams: {
                    c: 262144,
                    dklen: 32,
                    prf: "hmac-sha256"
                  }
                }
                keythereum.dump(that.password, privateKey, dk.salt, dk.iv,  options, function (keyObject) {
                  let len = that.info.length ? that.info.length : 0
                  that.$store.dispatch('currentUpdate', {current: len}).then(() => { 
                  })
                  that.$store.dispatch('UserData', {name: that.name,addresses: that.addresses,keystore: keyObject}).then(() => { 
                    that.$vux.loading.hide()
                    that.isShow = true
                  }).catch(err => {
                    that.$vux.toast.text('地址生成失败请刷新后重试！', 'top');
                  });
                })               
              }
            }
          })
        })
      },
      restoreBtn() {
        this.$router.push({ path: '/restore' })
      },
      closeDialog(){
        this.isShow = false
      }
    }
  }
</script>
