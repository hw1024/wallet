<style lang="scss">
    .trade-container {
        color: #2e2c2d;
        font-size: 16px;
    }
    .trade-mask {
        background: rgba(0,0,0, 0.5);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .trade-box{
        width: 640px;
        position: absolute;
        top: 36%;
        left: 50%;
        margin-left: -320px;
        background-color: #fff;
        z-index: 300;
        border-radius: 10px;
    }
    .trade-header{
        height: 80px;
        line-height: 80px;
        font-size: 34px;
        color: #555;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .trade-header h4 {
        font-weight: normal;
        font-size: 30px;
        color: #555;
    }
    .trade-content {
        padding: 32px;
    }
    .trade-seed-psd {
        width: 100%;
        height: 68px;
        line-height: 68px;
        border-radius: 10px;
        text-indent: 24px;
        z-index: 10;
        font-size: 20px;
        border: 1px solid #1AAD19;
        color: #333;
        &:focus{
          outline: none;
          border-bottom: 1px solid #ccc;
        }
    }
    .trade-footer {
        margin-top: 30px;
        text-align: center;
    }
    .trade-footer .weui-btn {
        width: 60%;
        height: 74px;
        line-height: 74px;
        font-size: 28px;
    }
</style>
<template>
<div class="trade-container">
    <div class="trade-mask" v-if="isShowTrade" @click="closeMyself"></div>
    <div class="trade-box"  v-if="isShowTrade">
        <div class="trade-header">
            <h4>{{ tradeTitle }}</h4>
        </div>
        <div class="trade-content">
            <input class="trade-seed-psd" type="password" placeholder="请输入交易密码" v-model="password">
             <div class="trade-footer">
                <x-button type="primary" @click.native="tradeBtn">确认</x-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { XButton } from 'vux'
export default {
    name: 'DialogTrade',
    props: {
        isShowTrade: {
            type: Boolean,
            default: false,
            required: true
        },
        tradeTitle: {
            type: String,
            default: '',
            required: true
        }
    },
    components: {
        XButton
    },
    data () {
        return {
            password: ''
        }
    },
    methods: {
        closeMyself() {
            this.$emit("on-close")
        },
        tradeBtn () {
            var that = this
            let [password] = [that.password]
            this.$emit("trades-btn",{password:password})
        }
    },
    watch:{
        isShowTrade: function (newData, oldData) {
            this.password = ''
        }
    }
}
</script>
