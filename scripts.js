document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP animations for sections
    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelectorAll('.menu-section, .contact-section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // GSAP animation for header content
    gsap.from('.header-content', {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 0.5
    });

    // GSAP animation for hero image
    gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        delay: 1
    });

    // Interactive hover effect for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            gsap.to(item, {
                scale: 1.05,
                duration: 0.3
            });
        });
        item.addEventListener('mouseout', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3
            });
        });
    });
});
