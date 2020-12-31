const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});


const butn=document.querySelector('button');
butn.addEventListener('mouseover',function(){

    

//butn.innerText="HAHAHAHHAHA";
//document.body.style.backgroundColor='green';

});

butn.addEventListener('click',function(){
    butn.innerText='WELCOME TO THE BEST TENNIS STORE ON THE PLANET !';
    document.body.style.backgroundColor='lightblue';
    
});