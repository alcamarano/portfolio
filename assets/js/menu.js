const btnHeaderMenu = document.getElementById('btnHeaderMenu');
const navHeaderMenu = document.getElementById('navHeaderMenu');

function setMenu(open) {
    navHeaderMenu.classList.toggle('header__nav-menu--open', open);
    btnHeaderMenu.setAttribute('aria-expanded', String(open));
}

btnHeaderMenu.addEventListener('click', () => {
    const isOpen = btnHeaderMenu.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
});

navHeaderMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        setMenu(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && btnHeaderMenu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        btnHeaderMenu.focus();
    }
});

window.matchMedia('(min-width: 800px)').addEventListener('change', (e) => {
    if (e.matches) setMenu(false);
});