function alterarTamanho(tamanho, id){
    let divs_tamanhos = document.body.querySelectorAll('.opcoes-tamanho__opcao-'+id);

    divs_tamanhos.forEach(opc => {
        opc.classList.remove('ativo');
    });

    if(tamanho == 'pequeno'){
        divs_tamanhos[0].classList.add('ativo');
        carrinho[id].tamanho = 'pequeno';
        carrinho[id].precos? carrinho[id].preco = carrinho[id].precos[0] : undefined;

    }else if(tamanho == 'medio'){
        divs_tamanhos[1].classList.add('ativo');
        carrinho[id].tamanho = 'medio';
        carrinho[id].precos? carrinho[id].preco = carrinho[id].precos[1] : undefined;

    }else if(tamanho == 'grande'){
        divs_tamanhos[2].classList.add('ativo');
        carrinho[id].tamanho = 'grande';
        carrinho[id].precos? carrinho[id].preco = carrinho[id].precos[2] : undefined;

    }

    salvarObjeto(carrinho);
   montarCarrinho();
}