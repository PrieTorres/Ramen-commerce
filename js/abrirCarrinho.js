function abrirCarrinho(ramen){
    let carrinho = document.body.querySelector('.carrinho-alert');
    let carrinho_background = document.body.querySelector('#carrinho-alert-background');

    carrinho_background.style.display = 'block';
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

function fecharCarrinho(){
    let div_carrinho = document.body.querySelector('.carrinho-alert');
    let carrinho_background = document.body.querySelector('#carrinho-alert-background');

    carrinho_background.style.display = 'none';
    div_carrinho.style.display = 'none';
    div_carrinho.style.height = '0';
}

function alterarNumero(tipo='padrao'){
    let numero = parseInt(document.body.querySelector('#quantidade_ramens').value);

    if(tipo == 'personalizado'){
        ramensJson_personalizado[0].quantidade = numero;
    }else if(tipo == 'combo'){

    }else if(tipo == 'padrao'){
        let index = carrinho.length;
        index--;
        // console.log(carrinho[index]);
        carrinho[index].quantidade = numero;
    }
    
}