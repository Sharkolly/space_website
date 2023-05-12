const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navBar = document.querySelector(".nav-bar");

openMenu.addEventListener("click", () =>{
    navBar.style.display = "block";

    closeMenu.addEventListener("click", () =>{
        navBar.style.display = "none";
    })
})

console.log('hi');