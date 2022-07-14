let container = document.body.querySelector('#container-ramens')
let i = 0;

//ramens
async function escreverHTML(){

    await ramensJson.forEach(ramen => {
        let imagem = ramen.imagem;
        let nome = ramen.nome;
        let descricao = ramen.descricao;
        let atributos = []
        let cont = 0; 
    
        ramen.complementos.forEach(ingrediente => {
            atributos.push(`<li class="atributos-ramen__item" id="item${cont}-${i}" onclick=" limparEstilos('atributos-ramen__item', 'aumenta_e_shadow'); aumentar_e_colorir('item${cont}-${i}') " >${ingrediente}</li>`);
            cont++;
        });
    
        atributos = atributos.join('');
    
        let html = `
        <div class="caixa-ramen flip-container" onclick="salvarObjeto(ramensJson[${i}])">
    
            <div class="flipper">
                <div class="back">
                    <ul class="caixa-ramen__atributos-ramen">
                        ${atributos}
                    </ul>
                </div>
                <div class="front">
                    <img src="${imagem}" alt="ramen delicioso" class="caixa-ramen__imagem-ramen">
                    <h3 class="caixa-ramen__nome-ramen">${nome}</h3>
                    <p class="caixa-ramen__descricao-ramen">${descricao}</p>
                </div>
            </div>
            
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
        let cont = 0;

        combo.complementos.forEach(ingrediente => {
            atributos.push(`<li class="atributos-ramen__item" id="item${cont}" onclick="aumentar_e_colorir('item${cont}')">${ingrediente}</li>`);
            cont++;
        });
    
        atributos = atributos.join('');
    
        let html = `
        <div class="caixa-combo-ramen" onclick="salvarObjeto(ramensJson[${i}])">
    
            <div class="flipper">
    
                <div class="front">
                    <img src="${imagem}" alt="ramen delicioso" class="combo-ramen__imagem-ramen">
                    <h3 class="combo-ramen__nome-ramen">${nome}</h3>
                    <p class="combo-ramen__descricao-ramen">${descricao}</p>
                </div>
    
                <div class="back">
                    <ul class="combo-ramen__atributos-ramen">
                        ${atributos}
                    </ul>
                </div>
                
            </div>
    
        </div>
        `
    
        container.innerHTML += html
        i++;
    });
}

escreverHTML();
