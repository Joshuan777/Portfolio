let container = document.querySelector('.container');
let nextPage = document.querySelector('.nextPage');
let career = document.querySelector('.career');
let home = document.querySelector('.home');
let me = document.querySelector('.me')
let aboutMe = document.querySelector('.aboutMe')


nextPage.addEventListener('click', function(){
    container.style.display='none';
    home.style.display='block';
});

me.addEventListener('click', function(){
    container.style.display='none';
    home.style.display='none';
    aboutMe.style.display='block';
});