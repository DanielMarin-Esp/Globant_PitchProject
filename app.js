
window.addEventListener("scroll", function() {
    var banner = document.getElementById("navBar");

    banner.classList.toggle("sticky", window.scrollY > 0);
})


const navSlide = () => {
    const menu = document.getElementsByClassName("menu");
    
    menu.addEventListener('click', function() {
        var nav = document.getElementsByClassName("nav_links");

        nav.classList.toggle("nav_active");
    })
}

const navDrop = () => {

}

