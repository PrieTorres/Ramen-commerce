function selecionarPagamento(pagamento){
    document.body.querySelectorAll('.compra__selecao-pagamento__opcao').forEach(opcao => {
        opcao.classList.remove('ativo');
    });


    if(pagamento == 'online'){
        document.body.querySelector('.compra__selecao-pagamento__opcao.online').classList.add('ativo');
    }else if(pagamento == 'entrega'){
        document.body.querySelector('.compra__selecao-pagamento__opcao.entrega').classList.add('ativo');
    }
}