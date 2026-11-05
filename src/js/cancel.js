let openBtn = document.querySelector('#open-cancel');
let pop = document.querySelector('#pop-cancel');
let okBtn = document.querySelector('#ok-cancel');
let closeBtn = document.querySelector('#close-cancel');

openBtn.onclick = function(){
  pop.style.display = 'flex';
}
closeBtn.onclick = function(){
  pop.style.display = 'none';
}
okBtn.onclick = function(){
  alert('确认注销');
  pop.style.display = 'none';
}
pop.onclick = function(e){
  if(e.target == pop) pop.style.display='none';
}