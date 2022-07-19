function montarCarrosel(){
    let id = 0;
    let container  = document.body.querySelector('.conteudo_principal_ramens-container');

    ramensJson.forEach(ramen => {
        let preco = ramen.precos[1];
        preco = preco.toFixed(2);
        let nome = ramen.nome;
        let imagem = ramen.imagem;

        let html = `
        <div class="conteudo_principal_ramens-container-caixa" onclick="comprarRamen(${id}); salvarObjeto(carrinho); redirect()">
            <h2 class="ramens-caixa-titulo">${nome}</h2>
            <img src="${imagem}" alt="um ramen delicioso e bemmmm quentinho" class="ramens-caixa-imagem">
            <span class="ramens-caixa_preco">R$${preco}</span>
        </div>
        `

        container.innerHTML += html;

        id++;
    });
}
montarCarrosel();