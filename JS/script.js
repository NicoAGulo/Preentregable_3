var australixElement = document.getElementById('link-sidebar-australix')
australixElement.addEventListener('click', australixClicked)

function australixClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarAustralix = document.getElementById('sidebar-australix')
    sidebarAustralix.style.display = "block";
}

var queElement = document.getElementById('link-sidebar-que')
queElement.addEventListener('click', queClicked)

function queClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarQue = document.getElementById('sidebar-que')
    sidebarQue.style.display = "block";
}

var porQueElement = document.getElementById('link-sidebar-por-que')
porQueElement.addEventListener('click', porQueClicked)

function porQueClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarPorQue = document.getElementById('sidebar-por-que')
    sidebarPorQue.style.display = "block";
}

var comoElement = document.getElementById('link-sidebar-como')
comoElement.addEventListener('click', comoClicked)

function comoClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarComo = document.getElementById('sidebar-como')
    sidebarComo.style.display = "block";
}