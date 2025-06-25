let container = document.querySelector('.container');
let nextPage = document.querySelector('.nextPage');
let career = document.querySelector('.career');
let home = document.querySelector('.home');


nextPage.addEventListener('click', function(){
    container.style.display='none';
    home.style.display='block';
});