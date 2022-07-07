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
        ingrediente_ramen.push(...complementos);
        ingrediente_ramen.push(ramen.caldo);
        ingrediente_ramen.push(ramen.carne);

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

        let p = null;
        let m = null;
        let g = null;

        if(ramen.tamanho != undefined){
            switch(ramen.tamanho){
                case 'pequeno':
                    p = 'ativo'
                    break
                case 'medio':
                    m = 'ativo'
                    break
                case 'grande':
                    g = 'ativo'
                    break
            }
        }



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
                <div class="opcoes-tamanho__container">
                    <ul class="opcoes-tamanho__lista">
                        <li class="opcoes-tamanho__opcao opcoes-tamanho__opcao-${id} tamanho__opcao--pequeno ${p}" onclick="alterarTamanho('pequeno', ${id})">P</li>
                        <li class="opcoes-tamanho__opcao opcoes-tamanho__opcao-${id} tamanho__opcao--medio ${m}" onclick="alterarTamanho('medio', ${id})">M</li>
                        <li class="opcoes-tamanho__opcao opcoes-tamanho__opcao-${id} tamanho__opcao--grande ${g}" onclick="alterarTamanho('grande', ${id})">G</li>
                    </ul>
                </div>
        </div>
        `;

        html_carrinho_container.innerHTML += html;

        id++;

    });


}

function montarTotal(){
    let container_itens = document.body.querySelector('.itens-comprados');

    carrinho.forEach(item => {
        let id = 0;

        let html = `
        <div class="item-comprado">
            <div class="item-comprado__cancelar" onclick="removerItem(${id})">X</div>
            <div class="item-comprado__info">
                <img class="item-comprado__imagem" src="${item.imagem}" alt="ramen apetitoso">
                <p class="item-comprado__nome">${item.nome}</p>
            </div>
        </div>
        `
        id++;
    });
}

function alterarTotal(){

}

function removerItem(id){

}