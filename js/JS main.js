document.addEventListener('DOMContentLoaded', () => {
    const rotatingElement = document.getElementById('rotatingElement');
    let rotationAngle = 0;

    if (rotatingElement) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;

            // Adjust the rotation angle based on scroll position
            rotationAngle = scrollPosition;

            // Apply the rotation transformation
            rotatingElement.style.transform = `rotate(${rotationAngle}deg)`;
        });
    } else {
        console.error("Element with ID 'rotatingElement' not found.");
    }
});







document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (event) => {
        const groupHeader = event.target.closest('.faq-group-header');

        if (groupHeader) {
            const group = groupHeader.parentElement;
            const groupBody = group.querySelector('.faq-group-body');
            const icon = groupHeader.querySelector('i');

            // Toggle icon
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');

            // Toggle visibility of body
            groupBody.classList.toggle('open');

            // Close other open FAQ bodies
            const otherGroups = faqContainer.querySelectorAll('.faq-group');

            otherGroups.forEach((otherGroup) => {
                if (otherGroup !== group) {
                    const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                    const otherIcon = otherGroup.querySelector('.faq-group-header i');

                    otherGroupBody.classList.remove('open');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        }
    });
});

// Add this code to your existing JavaScript file or create a new one

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
        hamburgerButton.classList.toggle('open');
    });
});

