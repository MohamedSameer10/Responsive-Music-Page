const sideNavBar =  document.querySelector('.container aside .side-bar-contents')
const menuSide = document.querySelector(".icon")
const openSide = document.querySelector('.hamburger')

console.log(menuSide,openSide);

openSide.addEventListener("click",function(){
    sideNavBar.style.left = "0"
})

menuSide.addEventListener("click",function(){
    sideNavBar.style.left = "-100%"
})