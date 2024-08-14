const pedidos = [];

async function carregarPedidos() {
    const localPedidos = JSON.parse(localStorage.getItem("pedidos")) ?? [];

    await fetch("/pedidos")
        .then(res => res = res.json())
        .catch(err => { console.log(err); return err })
        .then(data => { pedidos.push(...Object.values(data)); return pedidos })

    return [...pedidos, ...localPedidos];
}

async function renderizarPedidos(pedidos, classeContainer) {
    let container = document.body.querySelector(`.${classeContainer}`);
    container.innerHTML = ''

    if (!pedidos) {
        pedidos = await carregarPedidos();
    }
    console.log("pedidos --> ", pedidos);


    pedidos.forEach(pedido => {
        let text_itens = "";
        console.log('entrou aqui', pedido);


        pedido.itens.forEach(item => {
            text_itens += `<li class="item-pedido">${item.nome}</li>`
        });

        container.innerHTML += `
        <div class="pedido-container">
            <span class="delete-icon" onclick="excluirPedido('${pedido._id}')">X</span>
            <div class="imagem-pedido">
                <img src="${pedido.imagem ? pedido.imagem : './img/ramens/desenho-ramen.png'}" alt="ramen delicioso">
            </div>
            <div class="infos-pedido">
                <p class="hora-pedido">Pedido feito às ${pedido.horaPedido ? (new Date(pedido.horaPedido).getHours()) : "10"}:${pedido.horaPedido ? (new Date(pedido.horaPedido).getMinutes()) : "10"}</p>
                <ul class="itens-pedido">
                    ${text_itens}
                </ul>
                <p class="info-pagamento">
                    Total: ${pedido.preco}  ----  ${pedido.pagamento}
                </p>
            </div>
        </div>
        `
    });
}

function excluirPedido(pedidoId) {
    const localPedidos = JSON.parse(localStorage.getItem("pedidos")) ?? [];
    const index = localPedidos.map(p => p.id).indexOf(pedidoId);

    if (index >= 0) {
        localPedidos.splice(index, 1);
        localStorage.setItem("pedidos", JSON.stringify(localPedidos));
    }

    fetch(`/deletar-pedido/${pedidoId}`, { method: "delete" });
    window.location.reload();
    window.location.href(window.location.origin + "/meus_pedidos.html")
}