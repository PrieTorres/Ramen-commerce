var notaFiscalText = "";

function saveNota(text) {
    var blob = new Blob( [text], { type:'text/plain;charset=utf-8' } );
    console.log(blob);
    saveAs(blob, 'notaFiscal.txt');
}

function criarNotaFiscal() {
    const infoCliente = JSON.parse(localStorage.getItem("formulario"));
    const infoPedido = [...JSON.parse(localStorage.getItem("carrinho"))];
    const compraContainer = document.body.querySelector('.compra__selecao-pagamento');
    const notaFiscalHtmlContainer = document.body.querySelector('.save-nota-fiscal');

    if(!infoCliente.cliente.nome || !infoCliente.cliente.endereco){
        console.log(infoCliente.cliente.nome, infoCliente.cliente.endereco)
        alert('preencha os campos!');
        return;
    }

    const notaFiscal = {
        nomeCliente: infoCliente.cliente.nome,
        enderecoCliente: (infoCliente.cliente.endereco.bairro? infoCliente.cliente.endereco.bairro+" " : "")+(infoCliente.cliente.endereco.logradouro? infoCliente.cliente.endereco.logradouro+" " : "")+(infoCliente.cliente.numero_predio ? infoCliente.cliente.numero_predio : ""),
        itensPedido: [],
        total: 0
    }

    infoPedido.forEach(ramen => {
        notaFiscal.itensPedido.push((`${ramen.quantidade} ${ramen.nome} ${ramen.tamanho? ramen.tamanho : ''}...... ${ramen.preco*ramen.quantidade}`))
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


    compraContainer.style.display = 'none';
    notaFiscalHtmlContainer.innerHTML = `
    <span class="compra__selecao-pagamento__cancelar" onclick="fecharContainerNotaFiscal()">X</span>

    ${notaFiscalHTML}

    <button onclick="saveNota(notaFiscalText)">Salvar nota fiscal</button>
    `;

    notaFiscalHtmlContainer.classList.remove('container_invisivel');
    notaFiscalHtmlContainer.classList.add('visificador');
}

function fecharContainerNotaFiscal() {
    const compraContainer = document.body.querySelector('.compra');
    const notaFiscalHtmlContainer = document.body.querySelector('.save-nota-fiscal');

    notaFiscalHtmlContainer.classList.remove('visificador');
    notaFiscalHtmlContainer.classList.add('container_invisivel');

    compraContainer.style.display = 'block';
}