const olListCourses = document.getElementById('olListCourses');
const btnCourses = document.getElementById('btnCourses');
const limit = 8;
const hiddenClass = 'courses__card-header-hidden';

if (olListCourses && btnCourses) {
    const extras = [...olListCourses.children].slice(limit);
    if (extras.length === 0) {
        btnCourses.hidden = true;
    } else {
        const setExpanded = (open) => {
            extras.forEach((li) => li.classList.toggle(hiddenClass, !open));
            btnCourses.setAttribute('aria-expanded', String(open));
            btnCourses.textContent = open ? 'Ver menos' : 'Ver todos';
        };
        setExpanded(false);
        btnCourses.addEventListener('click', () => {
            const isOpen = btnCourses.getAttribute('aria-expanded') === 'true';
            setExpanded(!isOpen);
        });
    }
}