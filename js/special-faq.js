function toggleFaqAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.faq-accordion-icon i');

    // Fermer tous les autres contenus d'accordéon
    document.querySelectorAll('.faq-accordion-content').forEach((item) => {
        if (item !== content) {
            item.style.display = 'none';
            item.previousElementSibling.classList.remove('active');
            item.previousElementSibling.querySelector('.faq-accordion-icon i').classList.remove('fa-minus');
            item.previousElementSibling.querySelector('.faq-accordion-icon i').classList.add('fa-plus');
        }
    });

    // Ouvrir ou fermer le contenu cliqué
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        button.classList.remove('active');
    } else {
        content.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        button.classList.add('active');
    }
}