let fileIn = document.querySelector('#img-input');
let showImg = document.querySelector('#img-show');
let saveBtn = document.querySelector('#img-save');

fileIn.onchange = function(){
  let f = this.files[0];
  if(!f) return;
  let r = new FileReader();
  r.onload = function(){
    showImg.src = r.result;
  }
  r.readAsDataURL(f);
}
saveBtn.onclick = function(){
  if(!showImg.src){
    alert('先选图片');
    return;
  }
  localStorage.setItem('img', showImg.src);
  alert('保存成功');
  document.querySelector('.header-avatar').src = showImg.src;
  document.querySelector('.user-avatar-img').src = showImg.src;
}
window.onload = function(){
  let old = localStorage.getItem('img');
  if(old){
    showImg.src = old;
    document.querySelector('.header-avatar').src = old;
    document.querySelector('.user-avatar-img').src = old;
  }
}