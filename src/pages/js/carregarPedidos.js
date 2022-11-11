const pedidos = [];

function carregarPedidos() {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', `${window.location.origin}/pedidos`, false);

    xhttp.send();

    let response = JSON.parse(xhttp.responseText);

    //console.log('response --> ', response);

    pedidos.push(...response);
    return pedidos;
}

function renderizarPedidos(pedidos, classeContainer) {
    let container = document.body.querySelector(`.${classeContainer}`);
    container.innerHTML = ''

    pedidos.forEach(pedido => {
        container.innerHTML += `
        <div class="pedido-container">
            <div class="imagem-pedido">
                <img src="${}" alt="${}">
            </div>
            <div class="infos-pedido">
                <p class="hora-pedido">${}</p>
                <ul class="itens-pedido">
                    ${}
                </ul>
                <p class="info-pagamento">
                    Total: ${}  ---- ${}
                </p>
            </div>
        </div>
        `
    });
}