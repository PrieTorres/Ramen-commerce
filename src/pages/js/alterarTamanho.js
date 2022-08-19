function alterarTamanho(tamanho, id){
    let divs_tamanhos = document.body.querySelectorAll('.opcoes-tamanho__opcao-'+id);

    divs_tamanhos.forEach(opc => {
        opc.classList.remove('ativo');
    });

    if(tamanho == 'pequeno'){
        divs_tamanhos[0].classList.add('ativo');
        carrinho[id].tamanho = 'pequeno';

    }else if(tamanho == 'medio'){
        divs_tamanhos[1].classList.add('ativo');
        carrinho[id].tamanho = 'medio';

    }else if(tamanho == 'grande'){
        divs_tamanhos[2].classList.add('ativo');
        carrinho[id].tamanho = 'grande';

    }

    salvarObjeto(carrinho);
   montarCarrinho();
}