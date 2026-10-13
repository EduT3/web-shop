const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
if (menuButton && menu) {
    // Without JavaScript, keep navigation visible on every screen size.
    document.documentElement.classList.add('js');
    const setMenuOpen = (open) => {
        menu.classList.toggle('active', open);
        menuButton.setAttribute('aria-expanded', String(open));
    };
    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
    window.matchMedia('(max-width: 768px)').addEventListener('change', () => setMenuOpen(false));
}

const form = document.querySelector('.contact form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('form-status').textContent =
            'Campos válidos. Esta demonstração não envia nem armazena mensagens.';
    });
}
