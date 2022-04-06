let nums = document.querySelectorAll(".num");
let section = document.querySelector("#Achievements");
let started = false


window.onscroll = function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
       started=true;
    }
}

function startCount(el){
let goal = el.dataset.goal;
let count = setInterval(()=>{
el.textContent++;
if(el.textContent == goal){
 clearInterval(count);
}
},2000 / goal);
}

//for Window of cv

let isOpen =  document.querySelector(".bi-arrow-left");
let isClose = document.querySelector(".bi-x-circle");
let wrapper = document.querySelector(".wrapper");


isOpen.onclick = function(){
    wrapper.classList.add("active");
}
isClose.onclick = function(){
    wrapper.classList.remove("active");
}