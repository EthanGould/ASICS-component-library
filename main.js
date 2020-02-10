var page = {};

page.init = function() {
    page.components = document.querySelectorAll('.component');
    page.componentLinks = document.querySelectorAll('.js-component-link');
    page.componentLinks.forEach((el) => el.addEventListener('click', page.loadComponent));
    page.componentLinks[0].click();
}

page.loadComponent = function() {
    var component = window.location.hash.replace('#', '');
    page.componentLinks.forEach((el) => el.classList.remove('sidebar__link--active'))
    event.target.classList.add('sidebar__link--active');
    var selection = document.querySelector(`[data-component="${component}"]`);
    if (selection) {
        document.querySelectorAll(`[data-component]`).forEach((el) => el.style.display = 'none');
        document.querySelector(`[data-component="${component}"]`).style.display = 'block';
    }
}

window.addEventListener('load', page.init);
