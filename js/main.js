const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const yOffset = -70;

            const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: targetOffsetTop + yOffset, behavior: 'smooth' });
        }
    });
});

function moveTo(sectionId) {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
        const yOffset = -70;

        const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetOffsetTop + yOffset, behavior: 'smooth' });
    }
}

function updateActiveItem() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        console.log(`Section ${section.id}: Top = ${rect.top}, Bottom = ${rect.bottom}`);

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const targetId = section.getAttribute('id');
            const activeItem = document.querySelector(`[data-target="${targetId}"]`);

            document.querySelectorAll('.item').forEach((item) => {
                item.classList.remove('active');
            });

            if (activeItem) {
                activeItem.classList.add('active');
            }
        }
    });
}


window.addEventListener('load', updateActiveItem);
window.addEventListener('scroll', updateActiveItem);