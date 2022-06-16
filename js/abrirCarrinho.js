function abrirCarrinho(){
    let carrinho = document.body.querySelector('.carrinho-alert');

    carrinho.style.display = 'flex';

    setTimeout(function x(){//para que o display flex seja interpretado primeiro e assim rode a animação da div ganhando altura
        carrinho.style.height = '80vh';
    },20)
}