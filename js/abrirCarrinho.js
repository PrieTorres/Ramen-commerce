function abrirCarrinho(ramen){
    let carrinho = document.body.querySelector('.carrinho-alert');

    carrinho.style.display = 'flex';

    let imagem_carrinho = document.body.querySelector('.carrinho-alert__confere');
    let texto_carrinho = document.body.querySelector('.carrinho-alert__texto');

    if(ramen.imagem != undefined || ramen.imagem != null){
        imagem_carrinho.innerHTML = '';
        imagem_carrinho.style.backgroundImage = `url(${ramen.imagem})`;
    }

    setTimeout(function x(){//para que o display flex seja interpretado primeiro e assim rode a animação da div ganhando altura
        carrinho.style.height = '80vh';
    },20)
}