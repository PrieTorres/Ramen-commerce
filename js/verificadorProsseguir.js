function verificadorProsseguir(){
    let botao = document.body.querySelector('.prosseguir-compra-botao');

    if(formulario.pagamento == 'entrega'){

        if(formulario.entrega.pagamento.length > 0 && formulario.entrega.troco.length > 0 && formulario.entrega.cartao.length > 0)
        {
            botao.classList.remove('botao-desativado');
            botao.classList.add('botao-ativado');
            botao.onclick = '';
        }else{
            botao.classList.add('botao-desativado');
            botao.classList.remove('botao-ativado');
            botao.onclick = '';
        }


    }else if(formulario.pagamento == 'online'){

        if(formulario.online.titular_cartao.length > 0 && 
            formulario.online.numero_cartao.length > 0 &&
            formulario.online.validade_cartao.length > 0 &&
            formulario.online.cod_seguranca.length > 0)
        {
            botao.classList.remove('botao-desativado');
            botao.classList.add('botao-ativado');
            botao.onclick = '';
        }else{
            botao.classList.add('botao-desativado');
            botao.classList.remove('botao-ativado');
            botao.onclick = '';
        }

    }
}