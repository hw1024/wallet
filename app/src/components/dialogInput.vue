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
        bottom: 0
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
    .trade-header h4 {
        font-weight: normal;
        font-size: 30px;
        color: #555;
    }
    .trade-content {
        padding: 32px;
        .switch-btn {
            .weui-cell__ft::after{
                display: none;
            }
        }
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
    <div class="trade-mask" v-if="isShow" @click.self="closeMyself">
        <div class="trade-box"  v-if="isShow">
            <div class="trade-content">
                <group>
                    <x-input v-for="(item,index) in inputItems" v-if = "item.type != 'bool'" v-bind:key='index' :title="names[item.name]" :type="item.name == 'psd'?'password':'text'" :placeholder="names[item.type]" v-model="values[index]" >
                    </x-input>
                    <x-switch class="switch-btn" v-else :title= 'names[item.name]' prevent-default v-model="values[index]=value1" @on-click="onClick"></x-switch>
                </group>
                <div class="trade-footer">
                    <x-button type="primary" @click.native="tradeBtn">确认</x-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { XButton, XInput, Group, XSwitch } from 'vux'
export default {
    name: 'DialogInput',
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true
        },
        inputItems: {
            type: Array,
            default: [],
            required: false
        }
    },
    components: {
        XButton, XInput, Group, XSwitch
    },
    data () {
        return {
            values: [],
            names: {_from: '发送地址:', _to: '接收地址:', _value: '交易金额:', owner_: '新合约拥有者:', _spender: '被授权地址:', _subtractedValue: '减少金额:', _owner: '操作地址:', mintedAmount: '增发数量:', _addedValue: '增加授权金额:', target: '操作地址:', freeze: '是否冻结:', address: '请输入地址:', uint256: '请输入数值:', psd: '交易密码:', password: '请输入密码:', _useAddress: '合约拥有者:', _contractAddress: '关联合约地址:', _defaultCoin: '设置奖励个数:', _months: '生日(月):', _mdays: '生日(日):', uint8: '请输入数字格式', _currentYearGet: '今年是否已领币:', _workNumber: '员工编号:', string: '请输入员工编号'
            },
            value1: false,
            indexVal: -1
        }
    },
    methods: {
        closeMyself() {
            this.$emit("on-close")
            this.values=[]
        },
        tradeBtn () {
            var that = this
            let values = that.values
            that.$emit("trades-btn",{values:values})
            that.values = []
        },
        onClick (newVal, oldVal) {
            setTimeout(() => {
                this.value1 = newVal
            }, 100)
        }
    }
    // watch:{
    //     inputs: function (newData, oldData) {
    //         this.inputs = []
    //     }
    // }
}
</script>
