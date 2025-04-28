document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.article_section');

    sections.forEach(section => {
        const button = section.querySelector('.article_toggle');
        const content = section.querySelector('.article_content');

        button.addEventListener('click', () => {
        if (section.classList.contains('open')) {
            content.style.maxHeight = null;
            section.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            section.classList.add('open');
        }
        });
    });
});