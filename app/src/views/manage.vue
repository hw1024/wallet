<style lang="scss" scoped>
    .manage-content {
      padding: 30px 18px 100px;
      background: #f9f9f9;
    }
    .manage-footer {
       position: fixed;
       left: 0;
       right: 0;
       bottom: 0;
       z-index: 100;
       height: 100px;
       line-height: 100px;
       display: flex;
       display: -webkit-flex;
    }
    .manage-btn {
       width: 50%;
       text-align: center;
       color: #fff;
       background-color: #1AAD19;
       font-size: 34px;
       letter-spacing: 4px;
    }
    .manage-btn-active {
       background: #10aeff;
    }
    .manage-list li {
        background: #fff;
        
        margin-bottom: 20px;
    }
    .manage-list-top {
        padding: 30px 0;
        margin: 0 20px;
        position: relative;
        display: flex;
        display: -webkit-flex; 
        
    }
    .manage-list-lower {
        text-align: right;
        border-top:1px solid #ccc; 
        font-size: 28px;
        padding: 30px 0;
        margin: 0 20px;
        .balan{
            margin: 0 16px;
        }
    }
    .manage-img {
        width: 80px;
        height: 80px;
        margin-right: 20px;
    }
    .manage-message {
        flex: 1;
    }
    .manage-icon {
        content: "";
        display: inline-block;
        height: 22px;
        width: 22px;
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
        right: 24px;
    }
</style>
<template>
<div class="manage-content">
    <div class="data-empty" v-show="!havePage">
        暂无钱包，点击下方按钮创建钱包
    </div>
    <ul class="manage-list" v-show="havePage">
        <li v-for="(item, index) in info" v-bind:key='index'>
            <div class="manage-list-top" :data-id="index" @click="manageLink(index)">
                <img src="../assets/user-icon.png" class="manage-img" alt="icon">
                <div class="manage-message">
                    <p>{{ item.name }}</p>
                    <p>{{ addressInit(item.addresses) }}</p>
                </div>
                <i class="manage-icon"></i>
            </div>
            <div class="manage-list-lower">
                <p><span class="balan">{{balan[index] || '0.0000'}}</span>Fuli</p>
            </div>
        </li>
    </ul>
    <div class="manage-footer">
        <router-link :to="'create'" class="manage-btn">创建钱包</router-link>
        <router-link :to="'restore'" class="manage-btn manage-btn-active">导入钱包</router-link>
    </div>
</div>
</template>

<script>
  import { substring } from 'utils/index'
  import { contMethods } from 'utils/contMethods'
  import { mapGetters } from 'vuex'
  export default {
    name: 'manage',
    data () {
      return {
        havePage: false,
        balan:[]
      }
    },
    components: {
     
    },
    created: function () {
        var that = this
        that.dataInit()
    },
    computed: {
      ...mapGetters([
        'info',
        'abi',
        'contractAddr'
      ])
    },
    methods: {
        dataInit () {
            var that = this 
            that.$store.dispatch('UserInit', '');
            if (that.info.length === 0) {
                that.havePage = false;
            } else {
                that.havePage = true; 
                Promise.all(that.info.map(function(elem){             
                    return new Promise(function(resolve, reject){
                        contMethods.constantMethod('balanceOf', that.abi, that.contractAddr, [elem.addresses], function(value){       
                             resolve(value);
                        })
                    })
                })).then(function(data){
                    that.balan = data
                })
            }           
        },
        manageLink (value) {
            var that = this
            let len = value
            that.$store.dispatch('currentUpdate', {current: len}).then(() => { 
                this.$router.push({
                    path: 'detail', 
                    name: 'detail'
                })
            }).catch(err => {
                that.$vux.toast.text('钱包切换失败请刷新后重试！', 'top')
            });
        },
        addressInit (address) {
            var that = this
            return substring(address)
        }
    }
  } 
</script>
