/**
 * 全局合约方法
 * Create by wzx on 2018/5/28
*/
import Tx from 'ethereumjs-tx';
export const contMethods = {
    _common(curAddr,cb){
        web3.eth.getGasPrice(function(error, result){
            if(!error){
                let gasPrice = "0x" + result.toString(16);
                web3.eth.getTransactionCount(curAddr,function(error, result){
                    if(!error){
                        let nonce = "0x" + result.toString(16);
                        cb([nonce,gasPrice])
                    } else{
                        console.log(error)
                    }
                })
            } else{
                console.log(error)
            }                
        })
    },
    _sha3(name){
        let shas = {
            transferSha3: web3.sha3("transfer(address,uint256)").substr(2,8),
            burnSha3: web3.sha3("burn(uint256)").substr(2,8),
            mintTokenSha3: web3.sha3("mintToken(uint256)").substr(2,8),
            startSha3: web3.sha3("start()").substr(2,8),
            stopSha3: web3.sha3("stop()").substr(2,8),
            setOwnerSha3: web3.sha3("setOwner(address)").substr(2,8),
            approveSha3: web3.sha3("approve(address,uint256)").substr(2,8),
            transferFromSha3: web3.sha3("transferFrom(address,address,uint256)").substr(2,8),
            increaseApprovalSha3: web3.sha3("increaseApproval(address,uint256)").substr(2,8),
            decreaseApprovalSha3: web3.sha3("decreaseApproval(address,uint256)").substr(2,8),
            freezeAccountSha3: web3.sha3("freezeAccount(address,bool)").substr(2,8),
            frozenAccountSha3: web3.sha3("frozenAccount(address)").substr(2,8),
            setDefaultContractInfoInitSha3: web3.sha3("setDefaultContractInfoInit(address,address)").substr(2,8),
            setEmployCoinSha3: web3.sha3("setEmployCoin(uint256)").substr(2,8),
            setEmployBirthdayInfoSha3: web3.sha3("setEmployBirthdayInfo(uint8,uint8,bool,address)").substr(2,8),
            receiveEmploySha3: web3.sha3("receiveEmploy()").substr(2,8),
            setExpiredDrawSha3: web3.sha3("setExpiredDraw(uint256)").substr(2,8)
        }
        return shas[name]
    },
    constantMethod(name, abi, contractAddr, inputs, cb) {
        var args = inputs;
        var contract = web3.eth.contract(abi).at(contractAddr);  
        var callback = function(err, txhash) {
            if(name == 'totalSupply' || name == 'balanceOf' || name == 'searchCurrentContractTransfer'){
                cb((txhash/1e+18).toFixed(4)) 
            }else if(name == 'stopped'){
                cb(Boolean(Number(txhash)))
            }else if(name == 'isCanReceiveCoin'){
                console.log(Number(txhash))
                switch(Number(txhash)){
                    case 1:
                        cb('可以领取') 
                        break;
                    case 2:
                        cb('管理员未录入或非领取日期')
                        break;
                    case 3:
                        cb('您已领取')
                        break;
                    default:
                        cb('系统错误，请稍后再试')
                }    
            }else if(name == 'employ'){
                switch(Number(txhash[2])){
                    case 0:
                        cb('未领取') 
                        break;
                    default:
                        cb('您已领取')
                }    
            }else{
                cb(txhash)
            }
        };
        args.push(callback);
        contract[name].apply(null, args);
    },
    blockMethod(curAddr, name, abi, contractAddr, args, cb){ 
        var that = this;
        let newCurAddr
        that.constantMethod('owner', abi, contractAddr, [], function(value){
            if(name == 'transfer' || name == 'transferFrom' || name == 'receiveEmploy') {
                newCurAddr = curAddr
            }else{
                newCurAddr = value
            }
            that._common(newCurAddr,function(arr){
                var sha3 = that._sha3(name+'Sha3');
                var array = arr;
                var data = '0x'+ sha3; 
                for(var i=0; i<args.length-1; i++){
                    if(args[i].length == 42){
                        data+='000000000000000000000000'+ args[i].slice(-40);
                    }else{
                        var val = args[i]
                        var length = 64;
                        var value = '';
                        for(var n = 0;n < length; n++){
                          value += '0';
                        }
                        if(name == "setEmployCoin"){
                            value = (value + val.toString(16)).slice(-64);
                        }else{
                            value = (value + (Number(val)*1.0e18).toString(16)).slice(-64);
                        }
                        data += value  
                    }
                }
                web3.eth.estimateGas({
                    from: name == 'receiveEmploy'?value:newCurAddr,
                    to: name == 'receiveEmploy'?newCurAddr:contractAddr, 
                    data: data
                },function(error, result){
                    var gasLimit = "0x" + result.toString(16);
                    var rawTx = {
                        'nonce': array[0],
                        'gasPrice': array[1],
                        'gasLimit': gasLimit,
                        'to': contractAddr,
                        'value': '0x00',
                        'data': data,
                        'chainId':3
                    }
                    var tx = new Tx(rawTx);
                    const privateKey = new Buffer(args[args.length-1], 'hex'); 
                    tx.sign(privateKey);

                    var serializedTx = tx.serialize();
                    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
                        if (!err) {
                            cb(hash);
                        } else {
                            console.log(err)
                        }
                    });
                })
            })               
        })
    }
}