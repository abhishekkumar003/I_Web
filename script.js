const open = document.getElementById('open');
const close = document.getElementById('close');

const links = document.getElementById('links');


open.addEventListener('click', ()=>{
    links.style.right = "0";
})


close.addEventListener('click', ()=>{
    links.style.right = "-30rem";
})

