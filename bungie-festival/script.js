window.addEventListener("scroll", function(){
    var header_menu = document.querySelector("header")
    header_menu.classList.toggle("scrollBar", window.scrollY > 90)
}
)