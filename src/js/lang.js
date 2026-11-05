const btnCn = document.getElementById('btn-cn');
const btnEn = document.getElementById('btn-en');
const tabItems = document.querySelectorAll('.tab-item');
const contentBox = document.querySelectorAll('.account-content');

const textList = [
    { el: document.querySelector('.account-title span'), cn:"账号管理", en:"Account Manage" },
    { el: tabItems[0], cn:"基本资料", en:"Profile" },
    { el: tabItems[1], cn:"修改头像", en:"Change Avatar" },
    { el: tabItems[2], cn:"密码管理", en:"Password" },
    { el: tabItems[3], cn:"注销账号", en:"Cancel Account" },
    { el: tabItems[4], cn:"语言", en:"Language" }
];


function switchToInfoTab(){
    tabItems.forEach(t=>t.classList.remove('active'));
    tabItems[0].classList.add('active');
    contentBox.forEach(c=>c.style.display='none');
    document.getElementById('info').style.display = 'block';
}

btnCn.onclick = function(){
    textList.forEach(item=>{
        item.el.innerText = item.cn;
    })
    switchToInfoTab();
}
btnEn.onclick = function(){
    textList.forEach(item=>{
        item.el.innerText = item.en;
    })
    switchToInfoTab();
}