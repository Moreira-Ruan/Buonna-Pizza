document.getElementById('menuToggle').addEventListener('click', function() {
    toggleMenu();
});

function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
}

// Fechar o menu ao clicar em um link e rolar suavemente para a seção correspondente
document.querySelectorAll('.sideMenu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        
        document.getElementById('sideMenu').style.right = '-250px';
    });
});
