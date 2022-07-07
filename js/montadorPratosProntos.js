let container = document.body.querySelector('#container-ramens')
let i = 0;
//ramens
ramensJson.forEach(ramen => {
    let imagem = ramen.imagem;
    let nome = ramen.nome;
    let descricao = ramen.descricao;
    let atributos = []

    ramen.complementos.forEach(ingrediente => {
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
    </div>
    `
;

    container.innerHTML += html
    i++;
});
//combos
combosRamen.forEach(combo => {
    let imagem = combo.imagem;
    let nome = combo.nome;
    let descricao = combo.descricao;
    let atributos = []

    combo.complementos.forEach(ingrediente => {
        atributos.push(`<li class="atributos-ramen__item">${ingrediente}</li>`);
    });

    atributos = atributos.join('');

    let html = `
    <div class="caixa-combo-ramen" onclick="salvarObjeto(ramensJson[${i}])">
        <img src="${imagem}" alt="ramen delicioso" class="combo-ramen__imagem-ramen">
        <h3 class="combo-ramen__nome-ramen">${nome}</h3>
        <ul class="combo-ramen__atributos-ramen">
            ${atributos}
        </ul>
        <p class="combo-ramen__descricao-ramen">${descricao}</p>
    </div>
    `

    container.innerHTML += html
    i++;
});