

document.addEventListener('DOMContentLoaded', () => {
    // const cards = document.querySelectorAll('.card-wrap');
    
    // // Mouse effects on cards
    // cards.forEach(card => {
    //     const cardEl = card.querySelector('.card');
    //     const cardBg = card.querySelector('.card-bg');

    //     card.addEventListener('mousemove', handleMouseMove);
    //     card.addEventListener('mouseenter', handleMouseEnter);
    //     card.addEventListener('mouseleave', handleMouseLeave);

    //     function handleMouseMove(e) {
    //         const rect = card.getBoundingClientRect();
    //         const mouseX = e.clientX - rect.left - rect.width / 2;
    //         const mouseY = e.clientY - rect.top - rect.height / 2;

    //         const mousePX = mouseX / rect.width;
    //         const mousePY = mouseY / rect.height;

    //         const rX = mousePX * 30;
    //         const rY = mousePY * -30;
    //         const tX = mousePX * -40;
    //         const tY = mousePY * -40;

    //         cardEl.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
    //         cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    //     }

    //     function handleMouseEnter() {
    //         clearTimeout(card.mouseLeaveDelay);
    //     }

    //     function handleMouseLeave() {
    //         card.mouseLeaveDelay = setTimeout(() => {
    //             cardEl.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //             cardBg.style.transform = 'translateX(0px) translateY(0px)';
    //         }, 500);
    //     }

    //     const imageUrl = card.getAttribute('data-image');
    //     cardBg.style.backgroundImage = `url(${imageUrl})`;
    // });

    document.querySelectorAll('.card-wrap').forEach((card) => {
        const imageUrl = card.getAttribute('data-image');
        card.querySelector('.card-bg').style.backgroundImage = `url(${imageUrl})`;
    });
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.body;
    const mainContent = document.querySelector(".main-content");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("menu-open");

        if (navMenu.classList.contains("active")) {
            mainContent.style.transform = "translateY(300px)"; // Adjust this value to match the menu height
        } else {
            mainContent.style.transform = "translateY(0)";
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
        toggleMenu();
    }));

    const navLink = document.querySelectorAll(".nav-menu a");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    // New code for scroll animations and smooth scrolling
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    animateOnScrollElements.forEach(el => observer.observe(el));

    // Consolidated smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                closeMenu(); // Close the menu after clicking a link
            }
        });
    });

    // Add this new function to adjust scroll position on page load and resize
    function adjustScrollPosition() {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight;

                window.scrollTo(0, offsetPosition);
            }
        }
    }

    // Call the function on page load and resize
    window.addEventListener('load', adjustScrollPosition);
    window.addEventListener('resize', adjustScrollPosition);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct mailto link
    const mailtoLink = `mailto:whateverrbroochill@gmail.com?subject=Contact Form Submission&body=Greetings Tamanna,%0A${encodeURIComponent(message)}%0AFrom,%0A${encodeURIComponent(name)}`;

    // Open the mail client
    window.location.href = mailtoLink;

})

document.querySelectorAll('.card-wrap').forEach((card) => {
    const imageUrl = card.getAttribute('data-image');
    card.querySelector('.card-bg').style.backgroundImage = `url(${imageUrl})`;
});
