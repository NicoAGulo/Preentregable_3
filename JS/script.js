//INDEX

var australixElement = document.getElementById('link-sidebar-australix')

if (australixElement) {
    australixElement.addEventListener('click', australixClicked)
}

function australixClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarAustralix = document.getElementById('sidebar-australix')
    sidebarAustralix.style.display = "block";
}


var queElement = document.getElementById('link-sidebar-que')

if (queElement) {
    queElement.addEventListener('click', queClicked)
}

function queClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarQue = document.getElementById('sidebar-que')
    sidebarQue.style.display = "block";
}

var porQueElement = document.getElementById('link-sidebar-por-que')

if (porQueElement) {
    porQueElement.addEventListener('click', porQueClicked)
}

function porQueClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarPorQue = document.getElementById('sidebar-por-que')
    sidebarPorQue.style.display = "block";
}

var comoElement = document.getElementById('link-sidebar-como')

if (comoElement) {
    comoElement.addEventListener('click', comoClicked)
}

function comoClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarComo = document.getElementById('sidebar-como')
    sidebarComo.style.display = "block";
}

//CURSOS

var teatroElement = document.getElementById('link-sidebar-teatro')

if (teatroElement) {
    teatroElement.addEventListener('click', teatroClicked)
}

function teatroClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');
    const sidebarTeatro = document.getElementById('sidebar-teatro');
    sidebarTeatro.style.display = "block";
}

var danzaElement = document.getElementById('link-sidebar-danza')

if (danzaElement) {
    danzaElement.addEventListener('click', danzaClicked)
}

function danzaClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');

    const sidebarDanza = document.getElementById('sidebar-danza');
    sidebarDanza.style.display = "block";
}



var telaElement = document.getElementById('link-sidebar-tela')

if (telaElement) {
    telaElement.addEventListener('click', telaClicked)
}

function telaClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');

    const sidebarTela = document.getElementById('sidebar-tela');
    sidebarTela.style.display = "block";
}


var circoElement = document.getElementById('link-sidebar-circo')

if (circoElement) {
    circoElement.addEventListener('click', circoClicked)
}

function circoClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');

    const sidebarCirco = document.getElementById('sidebar-circo');
    sidebarCirco.style.display = "block";
}

//ESPACIOS

var salaTeatroElement = document.getElementById('link-sidebar-sala-teatro')

if (salaTeatroElement) {
    salaTeatroElement.addEventListener('click', salaTeatroClicked)
}

function salaTeatroClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');

    const sidebarSalaTeatro = document.getElementById('sidebar-sala-teatro');
    sidebarSalaTeatro.style.display = "block";
}



var salaDanzaElement = document.getElementById('link-sidebar-sala-danza')

if (salaDanzaElement) {
    salaDanzaElement.addEventListener('click', salaDanzaClicked)
}

function salaDanzaClicked() {
    document.querySelectorAll('[id^="sidebar-"]').forEach(el => el.style.display = 'none');

    const sidebarSalaDanza = document.getElementById('sidebar-sala-danza');
    sidebarSalaDanza.style.display = "block";
}