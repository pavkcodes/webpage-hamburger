/*JavaScript by Pavan*/
burger = document.querySelector(".burger")
header = document.querySelector("header")
rgtnav = document.querySelector(".rgtnav")
lftnav = document.querySelector(".lftnav")
burger.addEventListener('click',()=>{
    lftnav.classList.toggle('v-class');
    rgtnav.classList.toggle('v-class');
    header.classList.toggle('h-nav');
})