const sideBarClick = (event) =>{
    const activeSideMenuElement = document.querySelector(".active");
    activeSideMenuElement.classList.remove("active") 
    event.target.classList.add("active")
}