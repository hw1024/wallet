<style lang="scss" scoped>
    .detail-content {
      background: #f9f9f9;
    }
    .detail-top {
        margin: 42px 20px  68px;
        text-align: center;
    }
    .detail-addresses {
        margin-top: 10px;
    }
    .wallent-icon {
        width: 80px;
        height: 80px;
        vertical-align: middle;
    }
    .detail-balance{
        margin-top: 10px;
        .balan{
            margin: 0 16px;
        }
    }
    .detail-message {
        background: #fff;
        padding: 0 40px;
        margin-bottom: 40px;
    }
    .detail-message label {
        display: block;
        color: #000;
        padding-top: 28px;
        font-size: 30px;
    }
    .detail-list {
        padding: 0 40px;
        background: #fff;
    }
</style>
<template>
<div class="detail-content">
    <div class="data-empty" v-show="!havePage">
        没有相应的钱包数据，请创建新钱包
    </div>
    <div v-show="havePage">
        <div class="detail-top">
            <img src="../assets/user-icon.png" class="wallent-icon" alt="icon">
            <p class="detail-balance">账户余额:<span class="balan">{{ balan }}</span>Fuli</p>
            <p class="detail-addresses">{{ addressInit(addresses) }}</p>
        </div>
        <div class="detail-message">
            <label for="">钱包名</label>
            <input class="form-control" v-model="name" type="text"  placeholder="请输入钱包名称">
            <div class="weui-cell" @click="reviseWord">
                <div class="weui-cell__bd">修改密码</div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
        <div class="detail-list">
            <!-- <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">备份助记词</div>
                <div class="weui-cell__ft"></div>
            </div> -->
            <div class="weui-cell weui-cell_access" @click="exportKey">
                <div class="weui-cell__bd">导出私钥</div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell" @click="exportKeystore">
                <div class="weui-cell__bd">导出Keystore</div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
        <div class="form-btn">
            <flexbox>
            <flexbox-item>
                <x-button class="btn" type="primary" @click.native="updateBtn">更新钱包</x-button>
            </flexbox-item>
            </flexbox>
            <flexbox>
            <flexbox-item>
                <x-button class="btn" type="default" @click.native="delBtn">删除钱包</x-button>
            </flexbox-item>
            </flexbox>
        </div>
    </div>
    <Dialog-modal :is-show="isShow" :is-skip='isSkip' :modal-title="modalTitle" :warning-text="warningText" :message-text="messageText"  @on-close="closeDialog"/>
    <Dialog-trade :is-show-trade="isShowTrade" :trade-title="tradeTitle" @on-close="closetradeDialog" @trades-btn="tradesBtn"/>
</div>
</template>

<script>
    
  import { substring } from 'utils/index'
  import { contMethods } from 'utils/contMethods'
  import DialogTrade from '../components/dialogTrade'
  import DialogModal from '../components/dialogModal'
  import { mapGetters } from 'vuex'
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  
  export default {
    name: 'detail',
    data () {
      return {
        isShowTrade: false,
        havePage: false,
        tradeTitle: '请输入交易密码',
        typeModel:'',
        isShow: false,
        isSkip: false,
        modalTitle: '导出结果',
        warningText: "安全警告：私钥未经加密，导出存在风险，建议使用助记词和Keystore进行备份",
        messageText: '',
        name: '',
        addresses:'',
        data:'',
        balan: 0.0000
      }
    },
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
      DialogTrade,
      DialogModal
    },
    created: function () {
        var that = this
        that.getParams ()
    },
    computed: {
      ...mapGetters([
        'info',
        'abi',
        'current',
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
                });
            }
        },
        reviseWord() {
            var that = this
            that.$router.push({
                path: 'up_pwd', 
                name: 'up_pwd'
            })
        },
        exportKey() {
            var that = this
            that.isShowTrade = true
            that.typeModel = 'exportKey'
        },
        exportKeystore() {
            var that = this
            that.isShowTrade = true
            that.typeModel = 'exportKeystore'
        },
        delBtn () {
            var that = this
            that.typeModel = 'delWallet'
            that.$vux.confirm.show({
                title: '提示',
                content: '确认删除钱包吗？请谨慎操作，删除后无法恢复！',
                onShow () {
                },
                onHide () {
                },
                onCancel () {
                },
                onConfirm () {
                    that.isShowTrade = true
                }
            })
        },
        updateBtn () {
            var that = this
            that.$store.dispatch('updateData', {id: that.current,name: that.name}).then(() => {
                that.$vux.toast.text('钱包信息更新成功！', 'middle')
            }).catch(err => {
                that.$vux.toast.text('钱包信息更新失败请刷新后重试！', 'top')
            });
        },
        tradesBtn (opts) {
            var that = this
            let global_keystore =  that.data.keystore
            keythereum.recover(opts.password, global_keystore, function (privateKey) {
                var privateKey = privateKey.toString('hex')
                if (privateKey == 'Error: message authentication code mismatch') {
                    that.$vux.toast.text('交易密码不正确请重新输入', 'top')
                } else if(that.typeModel == 'delWallet') {
                    that.$store.dispatch('delData', {id: that.current}).then(() => {
                        that.closetradeDialog()
                        that.$vux.toast.text('钱包信息删除成功！', 'middle')
                        that.$router.push({ path: '/manage' })
                    }).catch(err => {
                        that.$vux.toast.text('钱包信息删除失败请刷新后重试！', 'top')
                    });
                } else if (that.typeModel == 'exportKey') {
                    that.closetradeDialog()
                    that.messageText = privateKey;
                    that.isShow = true
                } else if (that.typeModel == 'exportKeystore') {
                    that.closetradeDialog()
                    that.messageText = JSON.stringify(global_keystore);
                    that.isShow = true          
                }
            });         
        },
        addressInit (address) {
            var that = this
            return substring(address)
        },
        closetradeDialog(){
            this.isShowTrade = false
        },
        closeDialog(){
            this.isShow = false
        }
    }
  }
</script>
