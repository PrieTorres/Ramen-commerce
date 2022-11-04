var notaFiscalText = "";

function saveNota(text) {
    var blob = new Blob( [text], { type:'text/plain;charset=utf-8' } );
    console.log(blob);
    saveAs(blob, 'notaFiscal.txt');
}

function criarNotaFiscal() {
    const infoCliente = JSON.parse(localStorage.getItem("formulario"));
    const infoPedido = [...JSON.parse(localStorage.getItem("carrinho"))];
    const compraContainer = document.body.querySelector('.compra');

    const notaFiscal = {
        nomeCliente: infoCliente.cliente.nome,
        enderecoCliente: infoCliente.cliente.endereco,
        itensPedido: [],
        total: 0
    }

    infoPedido.forEach(ramen => {
        notaFiscal.itensPedido.push((`${ramen.quantidade} ${ramen.nome} ${ramen.tamanho}...... ${ramen.preco*ramen.quantidade}`))
    })

    infoPedido.forEach(ramen => {notaFiscal.total += (ramen.preco*ramen.quantidade)});

    console.log(notaFiscal)

    var aa = ''
    var bb = ''

    notaFiscal.itensPedido.forEach(
        (pedido) => { 
            aa += `<li>${pedido}</li>`; 
            bb += (pedido+"\n\r")
        }
    )

    let itens = `
    <ul>
        ${ aa }
    <ul>
    `

    const notaFiscalHTML = `
    <h2>${notaFiscal.nomeCliente.toUpperCase()}</h2>
    <h2>${notaFiscal.enderecoCliente.toUpperCase()}</h2>

    <p>${itens}</p>

    <h1>Total: ${notaFiscal.total.toFixed(2)}</h1>
    `;

    notaFiscalText = `
    ${notaFiscal.nomeCliente.toUpperCase()}
    ${notaFiscal.enderecoCliente.toUpperCase()}

    ${bb}

    Total: ${notaFiscal.total.toFixed(2)}
    `;

    compraContainer.innerHTML = `
    
    <span class="compra__selecao-pagamento__cancelar" onclick="fecharCompraAlert()">X</span>

    ${notaFiscalHTML}

    <button onclick="saveNota(notaFiscalText)">Salvar nota fiscal</button>
    
    `
}