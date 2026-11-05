const oldPwdInput = document.getElementById('old-pwd');
const newPwdInput = document.getElementById('new-pwd');
const surePwdInput = document.getElementById('sure-pwd');
const pwdSubmitBtn = document.getElementById('pwd-sub');
const goForgetBtn = document.getElementById('go-forget');
const forgetPop = document.getElementById('forget-pop');
const backPwdBtn = document.getElementById('back-pwd');

pwdSubmitBtn.onclick = function(){
    let oldVal = oldPwdInput.value.trim();
    let newVal = newPwdInput.value.trim();
    let sureVal = surePwdInput.value.trim();

    if(oldVal === newVal){
        alert("旧密码与新密码不能为同一个！");
        return;
    }
    if(newVal !== sureVal){
        alert("两次输入的新密码不一致！");
        return;
    }
    if(oldVal == "" || newVal == "" || sureVal == ""){
        alert("密码不能为空！");
        return;
    }
    alert("密码修改成功！");
    oldPwdInput.value = "";
    newPwdInput.value = "";
    surePwdInput.value = "";
}

goForgetBtn.onclick = function(){
    forgetPop.style.display = "block";
}

backPwdBtn.onclick = function(){
    forgetPop.style.display = "none";
}