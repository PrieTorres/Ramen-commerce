function movedorCarrousel(local){
    let botao = document.body.querySelector(`.botao-carousel.${local}`);
    let botoes = document.body.querySelectorAll('.botao-carousel');
    let scrolldiv = document.body.querySelector('.conteudo_principal_ramens-container');
    scrolldivWidth = scrolldiv.scrollWidth;

    for (i=0;i<botoes.length;i++) {
        if(botoes[i].classList.contains('ativo')){
            botoes[i].classList.remove('ativo');
        } 
    }

    botao.classList.add('ativo');

    if(local == 'esquerda'){
        scrolldiv.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    if(local == 'meio'){
        scrolldiv.scrollTo({
            top:0,
            left: (scrolldivWidth/2)-(scrolldivWidth/5.94),
            behavior: 'smooth'
        });
    }
    if(local == 'direita'){
        scrolldiv.scrollTo({
            top:0,
            left:scrolldivWidth,
            behavior: 'smooth'
        });
    }

}