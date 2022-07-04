function montarCarrinho(){
    let html_carrinho_container = document.body.querySelector("#carrinho-de-itens");
    id=0;

    carrinho.forEach(ramen => {
        let imagem_ramen = ramen.imagem;
        let descricao_ramen = ramen.descricao;
        let quantidade_ramen = ramen.quantidade;
        //console.log(quantidade_ramen);

        let ingrediente_ramen = [];
        let complementos = [...ramen.complementos];
        ingrediente_ramen.push(...complementos[0]);
        ingrediente_ramen.push(ramen.caldo);
        ingrediente_ramen.push(ramen.carne);
        ingrediente_ramen.push(ramen.tamanho);
        let lista_ingredientes = [];
        if(ingrediente_ramen.length>0){
            ingrediente_ramen.forEach(ingrediente => {
                lista_ingredientes.push(`
                <li class="container-caixa-item__lista__item">
                    ${ingrediente}
                </li>
                `)
            });
        }
        lista_ingredientes = lista_ingredientes.join('');



        let html = `
        <div class="container-caixa-item">
            <img src="${imagem_ramen}" alt="ramen comprado" class="container-caixa-item__imagem">
            <div class="caixa-item__info">
                <ul class="container-caixa-item__lista">
                    ${lista_ingredientes}
                </ul>
                <p class='container-caixa-item__descricao'>
                    ${descricao_ramen}
                </p>
                <div class="container-caixa-item__caixa-quantidade quantifier-container">
                    <div class="caixa-quantidade__barra quantifier-caixa">
                        <div class="quantifier-opcao barra__menos" onclick='alterarQuantidade("menos", "${id}")' >-</div>
                        <div class="barra__quantidade quantifier-quantidade" id="ramen-container-${id}" >${quantidade_ramen}</div>
                        <div class="quantifier-opcao barra__menos" onclick='alterarQuantidade("mais", "${id}")'>+</div>
                    </div>
                </div>
        </div>
        `;

        html_carrinho_container.innerHTML += html;

        id++;

    });


}