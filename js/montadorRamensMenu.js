let container = document.body.querySelector('.container_ramens')
let i = 0;

//ramens
async function escreveRamensJSON(){

    await ramensJson.forEach(ramen => {
        let imagem = ramen.imagem;
        let nome = ramen.nome;
        let descricao = ramen.descricao;
        let atributos = []
        let cont = 0; 
    
        ramen.complementos.forEach(ingrediente => {
            atributos.push(
                `<li class="atributos-ramen__item" id="item${cont}-${i}" onmouseenter=" limparEstilos('atributos-ramen__item', 'aumenta_e_shadow'); aumentar_e_colorir('item${cont}-${i}') " >${ingrediente}</li>`
            );
            cont++;
        });
    
        atributos = atributos.join('');
    
        let html = `
        <div class="caixa-ramen flip-container">
    
            <div class="flipper">
                <div class="back ramen-atras"  onclick="comprarRamen(${i});  abrirCarrinho(ramensJson[${i}]);" >
                    <ul class="caixa-ramen__atributos-ramen">
                        ${atributos}
                    </ul>
                </div>
                <div class="front ramen-frente">
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
    
}
