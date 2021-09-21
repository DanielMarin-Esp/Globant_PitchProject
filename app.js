window.addEventListener("scroll", function() {
    var banner = document.getElementById("navBar");

    banner.classList.toggle("sticky", window.scrollY > 0);
})