<style lang="scss">
  .restore-container {
    .restore-tab{
      height: 100px;
      .vux-tab-container{
        height: 100px;
        .vux-tab{
          height: 100px;
          .item {
            background-color: #fbf9fe;
            height: 100%;
            line-height: 100px;
            font-size: 28px;
          }
        }
      }
    }
    .keystore-descr{
      color: #999;
      padding: 0 50px;
    }
    .form-textarea{
      padding: 20px 40px;
      font-size: 28px;
      color: #666;
      &.content0{
        height: 200px;
        .weui-cell__bd{
          height: 200px;
          .weui-textarea{
            height: 200px;
          }
        }
      }
      &.content1{
        height: 300px;
        .weui-cell__bd{
          height: 300px;
          .weui-textarea{
            height: 300px;
          }
        }
      }
      &.content2{
        height: 200px;
        .weui-cell__bd{
          height: 200px;
          .weui-textarea{
            height: 200px;
          }
        }
      }
    }
    .wallet-type{
      margin: 46px 40px 30px;
      padding-bottom: 30px;
      color: #666;
      font-size: 26px;
      border-bottom: 2px solid #cccccc;
      text-indent: 24px;
    }
    .restore-wrapper{
      margin: 40px; 
    }
  }
</style>
<template>
  <div class="restore-container">
    <tab class="restore-tab">
      <tab-item class="item" @on-item-click="onItemClick" v-for="(item,index) in lists" v-bind:key='index' :selected="curent==index?true:false">{{item}}</tab-item>
    </tab>
    <div v-for="(item,index) in lists" v-bind:key='index' v-show="index==curent">
      <div v-show="index == 1" class="keystore-descr">
        直接复制粘贴以太坊官方钱包keystore中的内容至输入框，输入原始秘密导入红包
      </div>
      <group>
        <x-textarea class="form-textarea" v-model="messageText" :class="currentContent">
        </x-textarea>
      </group>
      <div v-show="index == 0">
        <div class="wallet-type">m/44'/60'/0'/0/0</div>
      </div>
      <div class="restore-wrapper" v-show="index != 1">
        <input class="form-control form-control-active" v-model="password" type="password" show-clear="false" placeholder="请输入密码">
        <input class="form-control form-control-active" v-model="repassword" type="password" show-clear="false" placeholder="请重复输入密码">
      </div>
      <div class="restore-wrapper" v-show="index == 1">
        <input class="form-control form-control-active" v-model="keystorePsd" type="password" show-clear="false" placeholder="请输入keystore密码">
      </div>
    </div>
    <div class="form-btn">
      <flexbox>
        <flexbox-item>
          <x-button class="btn" type="primary" @click.native="restoreWallet">导入钱包</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import lightwallet from 'eth-lightwallet'
  import { validate } from 'utils/validate'
  import {XButton, Flexbox, FlexboxItem, Tab, TabItem, Group, XTextarea} from 'vux'
  import { mapGetters } from 'vuex'

  export default {
    name: 'restore',
    data () {
      return {
        curent: 0,
        lists :['助记词','keystore','私钥'],
        password: '',
        repassword: '',
        keystorePsd: '',
        messageText: '',
        name:''
      }
    },
    components: {
      XButton,Flexbox,FlexboxItem,Tab, TabItem, Group, XTextarea
    },
    computed: {
      ...mapGetters([
        'info',
        'current'
      ]),
      currentContent(){
        return "content" + this.curent;
      }
    },
    created: function () {
      var that = this;
      that.$store.dispatch('UserInit', '')
    },
    methods: {
      onItemClick (index) {
        this.curent = index
      },
      restoreWallet() {
        var that = this
        if (that.curent !== 1) {
          let [pwdVal, rePwdVal] = [that.password, that.repassword]
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
            that.$vux.toast.text('确认密码不能为空！', 'top');
            return false
          }
        }
        if (that.curent == 0) {
          let numAddr = 1;
          that.name = "HD--新钱包"+(new Date().getTime()+'').slice(-4);
          lightwallet.keystore.createVault({
              password: that.password,
              seedPhrase: that.messageText,
              hdPathString: "m/44'/60'/0'/0"
          }, function (err, ks) {
            ks.keyFromPassword(that.password, function(err, pwDerivedKey) {
              if(ks.generateNewAddress(pwDerivedKey, numAddr) == undefined){
                var addresses = ks.getAddresses();
                that.addresses = addresses[0]
                if (that.addresses) {
                  var privateKey = ks.exportPrivateKey(that.addresses,pwDerivedKey);
                  var params = { keyBytes: 32, ivBytes: 16 };
                  var dk = keythereum.create(params);
                  var options = {
                    kdf: "pbkdf2",
                    cipher: "aes-128-ctr",
                    kdfparams: {
                      c: 262144,
                      dklen: 32,
                      prf: "hmac-sha256"
                    }
                  };
                  keythereum.dump(that.password, privateKey, dk.salt, dk.iv,  options, function (keyObject) {
                    let isEmpty = true
                    if (that.info.length !== 0) {
                      that.info.forEach(function(ele, index, array) {
                        if (addresses == ele.addresses) {
                          isEmpty = false  
                        }
                      })
                    }
                    if (isEmpty) {
                      let len = that.info.length ? that.info.length : 0
                      that.$store.dispatch('currentUpdate', {current: len}).then(() => { 
                      })
                      that.$store.dispatch('UserData', {name: that.name,addresses: that.addresses,keystore: keyObject}).then(() => {
                        that.$router.push({ path: '/user'})
                      }).catch(err => {
                        that.$vux.toast.text('导入钱包失败请刷新后重试！', 'middle');
                      });
                    } else {
                      that.$vux.toast.show({
                        type: 'success',
                        text: '钱包导入成功'
                      }) 
                      that.$router.push({ path: '/user' })
                    }
                  })
                }
              }
            })
          })
        } else if (that.curent == 1) {
          that.name = "PK--新钱包"+(new Date().getTime()+'').slice(-4);
          let [global_keystore, password] = [JSON.parse(that.messageText),that.keystorePsd]
          keythereum.recover(password, global_keystore, function (privateKey) {
              var privateKey = privateKey.toString('hex')
              if (privateKey && privateKey == 'Error: message authentication code mismatch') {
                that.$vux.toast.text('交易密码不正确', 'middle')
              } else {
                let addresses = '0x' + global_keystore.address
                let isEmpty = true
                if (that.info.length !== 0) {
                  that.info.forEach(function(ele, index, array) {
                    if (addresses == ele.addresses) {
                      isEmpty = false  
                    }
                  }) 
                }
                if (isEmpty) {
                  let len = that.info.length ? that.info.length : 0
                  that.$store.dispatch('currentUpdate', {current: len}).then(() => { 
                  })
                  that.$store.dispatch('UserData', {name: that.name,addresses: addresses,keystore: global_keystore}).then(() => {
                    that.$vux.toast.text('钱包导入成功！', 'middle')
                    that.$router.push({ path: '/user' })
                  }).catch(err => {
                    that.$vux.toast.text('钱包导入失败请刷新后重试！', 'top')
                  });
                } else {
                  that.$vux.toast.show({
                    type: 'success',
                    text: '钱包导入成功'
                  })
                  that.$router.push({ path: '/user' })
                }
              }
          });         
        } else if (that.curent == 2) {
          that.name = "PK--新钱包"+(new Date().getTime()+'').slice(-4);
          var params = { keyBytes: 32, ivBytes: 16 };
          var dk = keythereum.create(params);
          var options = {
              kdf: "pbkdf2",
              cipher: "aes-128-ctr",
              kdfparams: {
                  c: 262144,
                  dklen: 32,
                  prf: "hmac-sha256"
              }
          };
          let [privateKey, password] = [that.messageText,that.password]
          console.log(privateKey, password)
          keythereum.dump(password, privateKey, dk.salt, dk.iv,  options, function (keyObject) {
            if (keyObject) {
              let addresses = '0x' + keyObject.address
              let isEmpty = true
              if (that.info.length !== 0) {
                that.info.forEach(function(ele, index, array) {
                  if (addresses == ele.addresses) {
                    isEmpty = false  
                  }
                }) 
              }
              if (isEmpty) {
                let len = that.info.length ? that.info.length : 0
                  that.$store.dispatch('currentUpdate', {current: len}).then(() => { 
                })
                that.$store.dispatch('UserData', {name: that.name,addresses: addresses,keystore: keyObject}).then(() => {
                  that.$vux.toast.text('钱包导入成功！', 'middle')
                  that.$router.push({ path: '/user' })
                }).catch(err => {
                  that.$vux.toast.text('钱包导入失败请刷新后重试！', 'top')
                });
              } else {
                that.$vux.toast.show({
                  type: 'success',
                  text: '钱包导入成功'
                })
                that.$router.push({ path: '/user' })
              } 
            }
          })
        }
      }
    }
  }
</script>