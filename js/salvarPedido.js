function salvarPedido() {
    const infoCliente = JSON.parse(localStorage.getItem("formulario")).cliente;
    const infoCarrinho = [...JSON.parse(localStorage.getItem("carrinho"))];
    const infoCompra = JSON.parse(localStorage.getItem("formulario"));
    if(!infoCliente?.cep || !infoCliente?.endereco || !infoCliente?.nome || !infoCliente?.telefone){
        document.querySelector(".alert-missing-client-info").classList.add("ativo");
        if(!infoCliente?.cep) document.querySelector(".label-input:has(.input_cliente_cep)").classList.add("invalid");
        if(!infoCliente?.endereco) document.querySelector(".label-input:has(.input_cliente_endereco)").classList.add("invalid");
        if(!infoCliente?.nome) document.querySelector(".label-input:has(.input_cliente_nome)").classList.add("invalid");
        if(!infoCliente?.telefone) document.querySelector(".label-input:has(.input_cliente_tel)").classList.add("invalid");
        return;
    }

    let total = 0;
    let itens = [];
    infoCarrinho.forEach(item => {
        if (!item.preco) throw new Error('itens should have a price!');

        total += item.preco * item.quantidade;
        itens.push({
            preco: item.preco,
            nome: item.nome + (item.carne ? " " + item.carne : "") + (item.caldo ? " " + item.caldo : ""),
            ingredientes: [...item.complementos],
            quantidade: item.quantidade,
            tamanho: item.tamanho
        })
    });

    const output = {
        pagamentoDetails: {...infoCompra},
        itens: itens,
        preco: total,
        pagamento: infoCompra.pagamento,
        horaPedido: new Date(),
        cliente: infoCliente,
        imagem: `${infoCarrinho[0].imagem}`
    }

    fetch(`${window.location.origin}/pedidos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(output)
    }).catch(err => {
        const pedidos = JSON.parse(localStorage.getItem("pedidos")) ?? [];
        pedidos.push({ id: Math.floor(Math.random() * 99999999999), ...output, errMessage: err?.message, errCode: err?.code });
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    });

    localStorage.removeItem("carrinho");
    window.location.reload();
    window.location.href(window.location.origin + '/index.html');
}