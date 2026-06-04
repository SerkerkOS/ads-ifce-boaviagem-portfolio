const sidebar = document.querySelector('.head_sidebar');
const btnOriginal = document.querySelector('.main_Title button');
const tituloOriginal = document.querySelector('.main_Title h1');

// Move o botão e o título pro header
const header = document.querySelector('header');

btnOriginal.classList.add('btn-header');
tituloOriginal.classList.add('titulo-header');

header.appendChild(btnOriginal);
header.appendChild(tituloOriginal);

// Cria o overlay dinamicamente
const overlay = document.createElement('div');
overlay.id = 'overlay';
document.body.appendChild(overlay);

function abrirSidebar() {
    sidebar.classList.add('aberta');
    overlay.classList.add('ativo');
}

function fecharSidebar() {
    sidebar.classList.remove('aberta');
    overlay.classList.remove('ativo');
}

btnOriginal.addEventListener('click', function () {
    if (sidebar.classList.contains('aberta')) {
        fecharSidebar();
    } else {
        abrirSidebar();
    }
});

overlay.addEventListener('click', fecharSidebar);
