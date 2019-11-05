<style lang="scss" scoped>
  .passport-content {
    padding:30px 40px;
    .passport-tips {
      margin-top: 20px;
      line-height: 2;
      color: #333;
      text-align: left;
      font-size: 28px;
    }
    .passport-footer{
      position:fixed;
      bottom: 40px;
      left: 40px;
      right: 40px;
      .btn{
        line-height: 80px;
        height: 80px;
        font-size: 28px;
      }
    }
  }
</style>
<template>
<div class="passport-content">
    <div class="creat-wallet">
        <input class="form-control form-control-active" v-model="oldPassword" type="password" show-clear="false" placeholder="当前密码">
        <input class="form-control form-control-active" v-model="newPassword" type="password" show-clear="false" placeholder="新密码">
        <input class="form-control form-control-active" v-model="reNewPassword" type="password" show-clear="false" placeholder="重复新密码">
    </div>
    <div class="passport-tips">
        <p>忘记密码？导入助记词或者私钥可重置密码</p>
    </div>
    <div class="form-btn">
      <flexbox>
      <flexbox-item>
          <x-button class="btn" type="default" @click.native="reviseBtn">确定修改</x-button>
      </flexbox-item>
      </flexbox>
    </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { validate } from 'utils/validate'
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'up_pwd',
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
    },
    data () {
      return {
        data:'',
        id:'',
        oldPassword: '',
        newPassword:'',
        reNewPassword:''
      }
    },
    created: function () {
        var that = this
        that.id = that.current
        that.$store.dispatch('UserInit', '');
        if(that.info[that.id] !== undefined ) {
          that.data = that.info[that.id]
        }
    },
    computed: {
      ...mapGetters([
        'info',
        'current'
      ])
    },
    methods: {
      reviseBtn() {
        var that = this
        let [oldPwdVal, pwdVal, rePwdVal] = [that.oldPassword, that.newPassword, that.reNewPassword]
        if(oldPwdVal){
          if (!validate.isPwd(oldPwdVal)){
            that.$vux.toast.text('当前密码需为6-20位字符！', 'top');
            return false
          }
        } else {
          that.$vux.toast.text('当前密码不能为空！', 'top');
          return false
        }
        if(pwdVal){
          if (!validate.isPwd(pwdVal)){
            that.$vux.toast.text('新密码需为6-20位字符！', 'top');
            return false
          }
        } else {
          that.$vux.toast.text('新密码不能为空！', 'top');
          return false
        }
        if(rePwdVal){
          if (!validate.isPwd(rePwdVal)){
            that.$vux.toast.text('新密码需为6-20位字符！', 'top');
            return false
          } else if(pwdVal != rePwdVal) {
            that.$vux.toast.text('密码不一致请重新输入！', 'top');
            return false
          }
        } else {
          that.$vux.toast.text('确认新密码不能为空！', 'top');
          return false
        }
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
        let global_keystore =  that.data.keystore
        keythereum.recover(that.oldPassword, global_keystore, function (privateKey) {
            var privateKey = privateKey.toString('hex')
            if (privateKey && privateKey == 'Error: message authentication code mismatch') {
              that.$vux.toast.text('交易密码不正确', 'top')
            } else {
              keythereum.dump(that.newPassword, privateKey, dk.salt, dk.iv,  options, function (keyObject) {
                that.$store.dispatch('updateKeyData', {id: that.id,keystore: keyObject}).then(() => {
                    that.$router.push({name: 'detail', params: {id: that.id}})
                    that.$vux.toast.show({
                      type: 'success',
                      text: '密码修改成功',
                    }) 
                }).catch(err => {
                    that.$vux.toast.text('钱包密码修改失败请刷新后重试！', 'top')
                }); 
              })
          } 
        });         
      }
    }
  }
</script>
