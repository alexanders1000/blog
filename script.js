document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function navigateToSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        history.pushState(null, '', sectionId);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            navigateToSection(sectionId);
        });
    });

    window.addEventListener('popstate', () => {
        const sectionId = window.location.hash || '#saving';
        navigateToSection(sectionId);
    });

    const initialSection = window.location.hash || '#saving';
    navigateToSection(initialSection);
});
