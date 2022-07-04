let container = document.body.querySelector('#container-ramens')
let i = 0;
ramensJson.forEach(ramen => {
    let imagem = ramen.imagem;
    let nome = ramen.nome;
    let descricao = ramen.descricao;
    let atributos = []

    ramen.ingredientes.forEach(ingrediente => {
        atributos.push(`<li class="atributos-ramen__item">${ingrediente}</li>`);
    });

    atributos = atributos.join('');

    let html = `
<div class="caixa-ramen" onclick="salvarObjeto(ramensJson[${i}])">
    <img src="${imagem}" alt="ramen delicioso" class="caixa-ramen__imagem-ramen">
    <h3 class="caixa-ramen__nome-ramen">${nome}</h3>
    <ul class="caixa-ramen__atributos-ramen">
        ${atributos}
    </ul>
    <p class="caixa-ramen__descricao-ramen">${descricao}</p>
</div>`
;

    container.innerHTML += html
    i++;
});