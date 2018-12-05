<style lang="scss">
    .tips-container {
        color: #2e2c2d;
        font-size: 16px;
    }
    .tips-mask {
        background: rgba(0,0,0,0.5);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .tips-box{
        width: 640px;
        position: absolute;
        top: 36%;
        left: 50%;
        margin-left: -320px;
        background-color: #fff;
        z-index: 300;
        border-radius: 10px;
    }
    .tips-header{
        height: 80px;
        line-height: 80px;
        font-size: 34px;
        color: #555;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .tips-header h4 {
        font-weight: normal;
        font-size: 30px;
        color: #555;
    }
    .tips-content {
        padding: 32px;
    }
    .tips-seed{
        width: 100%;
        height: 68px;
        border-radius: 10px;
        z-index: 10;
        line-height: normal;
        text-indent: 0;  
        font-size: 20px;
        border: 1px solid #1AAD19;
        color: #333;
        text-align: center;
        word-break: break-all;
        &:focus{
          outline: none;
          border-bottom: 1px solid #ccc;
        }
    }
    .tips-footer {
        margin-top: 30px;
        text-align: center;
    }
    .tips-footer .weui-btn {
        width: 60%;
        height: 74px;
        line-height: 74px;
        font-size: 28px;
    }
    .skip{
        display:inline-block;
        margin-bottom: 16px;
        width: 100%;
    }
</style>
<template>
<div class="tips-container">
    <div class="tips-mask" v-if="isShowTips" @click.self="closeMyself">
        <div class="tips-box"  v-if="isShowTips">
            <div class="tips-header">
                <h4 v-show="!resultCopy">查询结果</h4>
                <h4 v-show="resultCopy">交易发送成功</h4>
            </div>
            <div class="tips-content">
                <div class="tips-seed">{{messageText}}</div>
                <div class="tips-footer">
                    <x-button v-show="!resultCopy" type="primary" @click.native="closeMyself">确认</x-button>
                    <a class="skip" v-show="resultCopy" :href="'https://ropsten.etherscan.io/tx/'+ messageText">
                        <x-button type="primary">点击查看</x-button>
                    </a>
                    <x-button v-show="resultCopy" type="primary" @click.native="closeMyself">返回</x-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { XButton } from 'vux'
export default {
    name: 'DialogTips',
    props: {
        isShowTips: {
            type: Boolean,
            default: false,
            required: true
        },
        messageText: {
            required: true
        },
        resultCopy:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    components: {
        XButton
    },
    methods: {
        closeMyself() {
            this.$emit("on-clo")
        }
    }
}
</script>
