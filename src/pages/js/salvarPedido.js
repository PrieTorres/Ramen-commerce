function salvarPedido () {
    const infoCliente = JSON.parse(localStorage.getItem("formulario")).cliente;
    const infoCarrinho = [...JSON.parse(localStorage.getItem("carrinho"))];
    const infoCompra = JSON.parse(localStorage.getItem("formulario"));

    let total = 0;
    let itens = [];
    infoCarrinho.forEach(item => {
        if(!item.preco) throw new Error('itens should have a price!');

        total+=item.preco;
        itens.push({
            preco: item.preco,
            nome: item.nome + (item.carne? " "+item.carne : "") + (item.caldo? " "+item.caldo : ""),
            ingredientes: [...item.complementos],
            quantidade: item.quantidade,
            tamanho: item.tamanho
        })
    });

    let output = {
        itens: itens,
        preco: total,
        pagamento: infoCompra.pagamento,
        horaPedido: new Date(),
        cliente: infoCliente
    }

    fetch(`${window.location.origin}/pedidos`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(output)
    });

    window.location.reload();
    window.location.href(window.location.origin+'/index.html');

}