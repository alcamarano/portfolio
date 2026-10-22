const btnTheme = document.getElementById('btnTheme');
const html = document.documentElement;

btnTheme.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});