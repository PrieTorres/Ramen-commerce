let html = `
<div class="caixa-ramen">
    <img src="${imagem}" alt="ramen delicioso" class="caixa-ramen__imagem-ramen">
    <h3 class="caixa-ramen__nome-ramen">${nome}</h3>
    <ul class="caixa-ramen__atributos-ramen">
        <li class="atributos-ramen__item"></li>
    </ul>
    <p class="caixa-ramen__descricao-ramen">${descricao}</p>
</div>`
;
let container = document.body.querySelector('#container-ramens')
ramensJson.forEach(ramen => {
    let imagem = ramen.imagem;
    let nome = ramen.nome;
    let descricao = ramen.descricao;

    container.innerHTML += html
});