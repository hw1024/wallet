/**
 * 表单验证方法
 * Create by hw on 2017/7/1
*/

export const validate = {
    /* 手机号码格式验证 */
    isMobile(str) {
        const patrn = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        return patrn.test(str);
        // if (1){
        // 	$vux.toast.text('请输入正确的手机号码！', 'top');
        // 	return false
        // }
    },
    /* 验证码格式验证 */
    isSMSCode(str) {
        const patrn = /^\d{6}$/;
        return patrn.test(str);
    },
    /* 密码格式验证 */
    isPwd(str) {
        const patrn = /^(?!.*\s).{6,20}$/;
        return patrn.test(str);
    },
}

