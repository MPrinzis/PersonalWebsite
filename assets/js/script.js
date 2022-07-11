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
    const header = document.querySelector("header");
    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky", window.scrollY > 0)    
    })

    // goTop animation start on scroll
    const goTopLogo = document.getElementById("gotop-logo");
    const goTopArrow = document.getElementById("gotop-arrow");
        const stickyLogo = document.getElementById("sticky-logo");
    window.addEventListener("scroll",function(){
        goTopLogo.classList.toggle("animation", window.scrollY > 0)
        goTopArrow.classList.toggle("animation", window.scrollY > 0)
    })

    // hidden navbar on contact section
    const sections = document.querySelectorAll("section"); 
    const options = {   threshold: "0.5",   };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                if (e.target.id == "contact") {
                    header.classList.add("hidden");
                    navbar.classList.remove('active');
                    layers.forEach((layer) => layer.classList.remove("active"))
                    stickyLogo.classList.add("invert");
                }
                else {
                    header.classList.remove("hidden");
                    stickyLogo.classList.remove("invert");
                }
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });



// Show Contact form
let formOpen = document.querySelector('.form-open');
let contactForm = document.querySelector('.contact-form-container');
let formClose = document.querySelector('#form-close');

formOpen.addEventListener('click', () => {
    contactForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    contactForm.classList.remove('active');
});


// EmailJS script
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_kfetclr", "template_wxafq4s", params).then(function (res) {
        alert("Email inviata!" + res.status);
    })
}