webpackJsonp([9],{"3dwZ":function(t,e,o){e=t.exports=o("UTlt")(!0),e.push([t.i,"\n.passport-content[data-v-a542d316] {\n  padding: 0.4rem 0.533333rem;\n}\n.passport-content .passport-tips[data-v-a542d316] {\n  margin-top: 0.266667rem;\n  line-height: 2;\n  color: #333;\n  text-align: left;\n  font-size: 0.373333rem;\n}\n.passport-content .passport-footer[data-v-a542d316] {\n  position: fixed;\n  bottom: 0.533333rem;\n  left: 0.533333rem;\n  right: 0.533333rem;\n}\n.passport-content .passport-footer .btn[data-v-a542d316] {\n  line-height: 1.066667rem;\n  height: 1.066667rem;\n  font-size: 0.373333rem;\n}","",{version:3,sources:["C:/wap_wallet/wallet/app/src/views/up_pwd.vue"],names:[],mappings:";AACA;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;EACxB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,oBAAoB;EACpB,uBAAuB;CACxB",file:"up_pwd.vue",sourcesContent:["\n.passport-content[data-v-a542d316] {\n  padding: 0.4rem 0.533333rem;\n}\n.passport-content .passport-tips[data-v-a542d316] {\n  margin-top: 0.266667rem;\n  line-height: 2;\n  color: #333;\n  text-align: left;\n  font-size: 0.373333rem;\n}\n.passport-content .passport-footer[data-v-a542d316] {\n  position: fixed;\n  bottom: 0.533333rem;\n  left: 0.533333rem;\n  right: 0.533333rem;\n}\n.passport-content .passport-footer .btn[data-v-a542d316] {\n  line-height: 1.066667rem;\n  height: 1.066667rem;\n  font-size: 0.373333rem;\n}"],sourceRoot:""}])},Um5G:function(t,e,o){"use strict";function s(t){o("VsWc")}Object.defineProperty(e,"__esModule",{value:!0});var a=o("4YfN"),r=o.n(a),n=o("HVJf"),i=o("E4LH"),d=o("eT+W"),p=o("mAm1"),c=o("NyFS"),l=(d.a,p.a,c.a,r()({},Object(n.b)(["info","current"])),{name:"up_pwd",components:{XButton:d.a,Flexbox:p.a,FlexboxItem:c.a},data:function(){return{data:"",id:"",oldPassword:"",newPassword:"",reNewPassword:""}},created:function(){var t=this;t.id=t.current,t.$store.dispatch("UserInit",""),void 0!==t.info[t.id]&&(t.data=t.info[t.id])},computed:r()({},Object(n.b)(["info","current"])),methods:{reviseBtn:function(){var t=this,e=[t.oldPassword,t.newPassword,t.reNewPassword],o=e[0],s=e[1],a=e[2];if(!o)return t.$vux.toast.text("当前密码不能为空！","top"),!1;if(!i.a.isPwd(o))return t.$vux.toast.text("当前密码需为6-20位字符！","top"),!1;if(!s)return t.$vux.toast.text("新密码不能为空！","top"),!1;if(!i.a.isPwd(s))return t.$vux.toast.text("新密码需为6-20位字符！","top"),!1;if(!a)return t.$vux.toast.text("确认新密码不能为空！","top"),!1;if(!i.a.isPwd(a))return t.$vux.toast.text("新密码需为6-20位字符！","top"),!1;if(s!=a)return t.$vux.toast.text("密码不一致请重新输入！","top"),!1;var r={keyBytes:32,ivBytes:16},n=keythereum.create(r),d={kdf:"pbkdf2",cipher:"aes-128-ctr",kdfparams:{c:262144,dklen:32,prf:"hmac-sha256"}},p=t.data.keystore;keythereum.recover(t.oldPassword,p,function(e){var e=e.toString("hex");e&&"Error: message authentication code mismatch"==e?t.$vux.toast.text("交易密码不正确","top"):keythereum.dump(t.newPassword,e,n.salt,n.iv,d,function(e){t.$store.dispatch("updateKeyData",{id:t.id,keystore:e}).then(function(){t.$router.push({name:"detail",params:{id:t.id}}),t.$vux.toast.show({type:"success",text:"密码修改成功"})}).catch(function(e){t.$vux.toast.text("钱包密码修改失败请刷新后重试！","top")})})})}}}),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"passport-content"},[o("div",{staticClass:"creat-wallet"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"form-control form-control-active",attrs:{type:"password","show-clear":"false",placeholder:"当前密码"},domProps:{value:t.oldPassword},on:{input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"form-control form-control-active",attrs:{type:"password","show-clear":"false",placeholder:"新密码"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.reNewPassword,expression:"reNewPassword"}],staticClass:"form-control form-control-active",attrs:{type:"password","show-clear":"false",placeholder:"重复新密码"},domProps:{value:t.reNewPassword},on:{input:function(e){e.target.composing||(t.reNewPassword=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"form-btn"},[o("flexbox",[o("flexbox-item",[o("x-button",{staticClass:"btn",attrs:{type:"default"},nativeOn:{click:function(e){return t.reviseBtn(e)}}},[t._v("确定修改")])],1)],1)],1)])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"passport-tips"},[o("p",[t._v("忘记密码？导入助记词或者私钥可重置密码")])])}],f={render:u,staticRenderFns:m},v=f,w=o("Z0/y"),A=s,x=w(l,v,!1,A,"data-v-a542d316",null);e.default=x.exports},VsWc:function(t,e,o){var s=o("3dwZ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o("FIqI")("76c3e19e",s,!0,{})}});
//# sourceMappingURL=9.acb178f2c244fc6edfcb.js.map