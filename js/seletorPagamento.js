function selecionarPagamento(pagamento){
    if(pagamento == 'online'){
        document.body.querySelector('.compra__selecao-pagamento__opcao.online').classList.add('ativo');
    }
}