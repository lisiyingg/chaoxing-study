import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export function usePwd(){
    const oldPwdInput = ref('')
    const newPwdInput = ref('')
    const surePwdInput = ref('')
    const pwdSubmitBtn = ref(null)
    const goForgetBtn = ref(null)
    const forgetPop = ref(false)
    const backPwdBtn = ref(null)

    function pwdSubmitBtnClick(){
        let oldVal = oldPwdInput.value.trim();
        let newVal = newPwdInput.value.trim();
        let sureVal = surePwdInput.value.trim();
        if(oldVal === newVal){
            ElMessage.warning("旧密码与新密码不能为同一个！");
            return;
        }
        if(newVal !== sureVal){
            ElMessage.warning("两次输入的新密码不一致！");
            return;
        }
        if(oldVal == "" || newVal == "" || sureVal == ""){
            ElMessage.warning("密码不能为空！");
            return;
        }
        ElMessage.success("密码修改成功！");
        oldPwdInput.value = "";
        newPwdInput.value = "";
        surePwdInput.value = "";
    }

    function goForgetBtnClick(){
        forgetPop.value = true;
    }
    function backPwdBtnClick(){
        forgetPop.value = false;
    }

    return {
        oldPwdInput,
        newPwdInput,
        surePwdInput,
        pwdSubmitBtn,
        goForgetBtn,
        forgetPop,
        backPwdBtn,
        pwdSubmitBtnClick,
        goForgetBtnClick,
        backPwdBtnClick
    }
}
