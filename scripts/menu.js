const OpenMenuButton = document.getElementById("menu-btn");
const NavBar = document.querySelector(".nav-bar");
const Body = document.querySelector("body");
OpenMenuButton.addEventListener("click",()=>{
    NavBar.classList.toggle("open-nav");
    OpenMenuButton.classList.toggle("activated-button");
    if(Body.style.overflow === "hidden"){
        Body.style.overflow = "auto";
    }else{
        Body.style.overflow = "hidden";
    }
});