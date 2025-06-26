let container = document.querySelector('.container');
let nextPage = document.querySelector('.nextPage');
let career = document.querySelector('.career');
let home = document.querySelector('.home');
let me = document.querySelector('.me')
let aboutMe = document.querySelector('.aboutMe');
let project = document.querySelector('.project');
let work = document.querySelector('.work');


nextPage.addEventListener('click', function(){
    container.style.display='none';
    home.style.display='block';
});

me.addEventListener('click', function(){
    container.style.display='none';
    home.style.display='none';
    aboutMe.style.display='block';
});

work.addEventListener('click',function(){
    container.style.displau='none';
    home.style.display='none';
    aboutMe.style.display='none';
    project.style.display='block';
});