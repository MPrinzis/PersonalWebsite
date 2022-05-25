// hamburger menù script

    // hamburger animation
    const hamburger = document.querySelector(".hamburger");
    const layers = document.querySelectorAll(".hamburger span");

    hamburger.addEventListener("click", (e) => {
    layers.forEach((layer) => layer.classList.toggle("active"));   
    });

    // hamburger dropdown links
    const navbar = document.getElementById("navbar");
    const hamburgerToggle = document.getElementById("hamburger");

    const toggleMenu = () => {
        navbar.classList.toggle('active');
    }
    hamburgerToggle.addEventListener('click', toggleMenu);

    // sticky navbar on scroll
    window.addEventListener("scroll",function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })


    window.addEventListener("scroll",function(){
        var goTopLogo = document.getElementById("gotop-logo");
        goTopLogo.classList.toggle("animation", window.scrollY > 0)
    })
    window.addEventListener("scroll",function(){
        var goTopArrow = document.getElementById("gotop-arrow");
        goTopArrow.classList.toggle("animation", window.scrollY > 0)
    })