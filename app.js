const padrecontenedor = document.querySelector(".padre");
const childcontenedor = document.querySelectorAll(".child");

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        padrecontenedor.classList.add("active-padre");
    },500);

    setTimeout(() =>{
        childcontenedor.forEach((child) => {
            child.classList.add("active");
        });
    }, 1000);


});