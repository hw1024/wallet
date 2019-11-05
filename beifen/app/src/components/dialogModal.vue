<style lang="scss">
    .modal-container {
        color: #2e2c2d;
        font-size: 16px;
    }
    .modal-mask {
        background: rgba(0,0,0,.6);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .modal-box{
        width: 640px;
        position: absolute;
        top: 26%;
        left: 50%;
        margin-left: -320px;
        background-color: #fff;
        z-index: 300;
        border-radius: 10px;
    }
    .modal-header{
        height: 80px;
        line-height: 80px;
        font-size: 34px;
        color: #555;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .modal-header h4 {
        font-weight: normal;
        font-size: 30px;
        color: #555;
    }
    .modal-content {
        padding: 32px;
    }
    .modal-warning {
        border: 1px solid rgba(255, 96, 0, 0.4);
        background: rgba(255, 96, 0, 0.4);
        color: #ff6000;
        font-size: 24px;
        padding: 8px 14px;
        margin-bottom: 18px;
        border-radius: 6px;
    }
    .modal-warning p{
        height: 80px;
        line-height: 40px;
        overflow: scroll;
    }
    .modal-message{
        border: 1px solid #e8e8e8;
        background: #e8e8e8;
        color: #555;
        padding: 8px 14px;
        font-size: 24px;
        border-radius: 6px;
    }
    .modal-message p{
        word-break:break-all;
        font-size: 24px;
        height: 80px;
        line-height: 40px;
        overflow: scroll;
    }
    .modal-footer {
        margin-top: 30px;
        text-align: center;
    }
    .modal-footer .weui-btn {
        width: 100%;
        height: 74px;
        line-height: 74px;
        font-size: 28px;
    }
    .save-btn {
        display: inline-block;
        margin-top: 32px;
        font-size: 28px;
        color: rgba(27,170,240,1);
    }
</style>
<template>
<div class="modal-container">
    <div class="modal-mask" v-if="isShow"></div>
    <div class="modal-box"  v-if="isShow">
        <div class="modal-header">
            <h4>{{ modalTitle }}</h4>
        </div>
        <div class="modal-content">
            <div class="modal-warning">
                <p>{{ warningText }}</p>
            </div>
            <div class="modal-message">
                <p>{{ messageText }}</p>
            </div>
            <div class="modal-footer">
                <x-button type="primary" v-clipboard="messageText" @success="handleSuccess">复制</x-button>
                <a class="save-btn" v-show="isTransfer" :href="application" :download="seed">生成文件保存</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { XButton } from 'vux'
export default {
    name: 'DialogModal',
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true
        },
        isSkip: {
            type: Boolean,
            default: false,
            required: true
        },
        isTransfer: {
            type: Boolean,
            default: true,
            required: false
        },
        modalTitle: {
            type: String,
            default: '',
            required: true
        },
        warningText: {
            type: String,
            default: '',
            required: true
        },
        messageText: {
            required: true
        }
    },
    components: {
        XButton
    },
    data () {
        return {
            seed:new Date().getTime()
        }
    },
    computed: {
        application() {
            return "data:application/json," + encodeURIComponent(this.messageText)
        }
    },
    methods: {
        closeMyself() {
            this.$emit("on-close")
        },
        handleSuccess (e) {
            var that = this
            if(e.text) {
                this.$vux.toast.show({
                    type: 'success',
                    text: '复制成功',
                })
                //that.$vux.toast.text('复制成功！', 'middle')
                that.closeMyself()
                if (that.isSkip) {
                    setTimeout(() => {
                        that.$router.push({ path: '/user' })
                    }, 2000)
                }      
            }
        }
    }
}
</script>
