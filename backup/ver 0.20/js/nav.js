
    const navMenuBtn=document.getElementById("nav_menu_btn");
    const navMenus=document.getElementById("nav_menu");

    navMenuBtn.addEventListener("click",()=>{
        navMenus.classList.toggle("nav_menu-fold");
    });