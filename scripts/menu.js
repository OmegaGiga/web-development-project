const toggle = document.getElementById('menu_toggle');
const links = document.getElementById('menu_links');

toggle.addEventListener('click', () => {
    links.classList.toggle('show');
});