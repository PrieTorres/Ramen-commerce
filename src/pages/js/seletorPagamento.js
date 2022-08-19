function selecionarPagamento(pagamento){
    document.body.querySelectorAll('.compra__selecao-pagamento__opcao').forEach(opcao => {
        opcao.classList.remove('ativo');
    });
    document.body.querySelector('.pagamento-online').style.display = 'none';
    document.body.querySelector('.pagamento-entrega').style.display = 'none';
    document.body.querySelector('.pagamento-online').style.opacity = '0';
    document.body.querySelector('.pagamento-entrega').style.opacity = '0';


    if(pagamento == 'online'){
        document.body.querySelector('.compra__selecao-pagamento__opcao.online').classList.add('ativo');

        document.body.querySelector('.pagamento-online').style.display = 'block';
        setTimeout(() => {
            document.body.querySelector('.pagamento-online').style.opacity = '1';
        }, 20);

    }else if(pagamento == 'entrega'){
        document.body.querySelector('.compra__selecao-pagamento__opcao.entrega').classList.add('ativo');

        document.body.querySelector('.pagamento-entrega').style.display = 'block';
        setTimeout(() => {
            document.body.querySelector('.pagamento-entrega').style.opacity = '1';
        }, 20);
    }
}