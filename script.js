// const toggle = document.getElementById("toggleDark");
// const body = document.querySelector("body");

// toggle.addEventListener('click' , function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-sun')){
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '1s';
//     }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '1s';
//     }
// })


const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const toggle3 = document.getElementById('toggle3');
const toggle4 = document.getElementById('toggle4');
const body = document.querySelector("body");

toggle1.addEventListener('click' , function(){
    this.classList.toggle1;

    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';

})

toggle2.addEventListener('click' , function(){
    this.classList.toggle2;

    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '1s';
    this.style.border = '2px solid white'

})

toggle3.addEventListener('click' , function(){
    this.classList.toggle3;

    body.style.background = 'aqua';
    body.style.color = 'black';
    body.style.transition = '1s';

})

toggle4.addEventListener('click' , function(){
    this.classList.toggle4;

    body.style.background = 'aquamarine';
    body.style.color = 'white';
    body.style.transition = '1s';

})
