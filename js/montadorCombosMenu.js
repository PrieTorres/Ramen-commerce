var id_combo_ramen = 0;


function escreverHTMLCombos(id){
    let descricao = combosRamen[id].descricao;
    let imagem = combosRamen[id].imagem;
    let preco = combosRamen[id].preco;
    let complementos = [];

    combosRamen[id].complementos.forEach(ingrediente => {
        complementos.push(`<li class="atributos-ramen__item" id="item${cont}-${i}" onclick=" limparEstilos('atributos-ramen__item', 'aumenta_e_shadow'); aumentar_e_colorir('item${cont}-${i}') " >${ingrediente}</li>`);
        cont++;
    });

    let html_combos_carrosel = `
    <div class="carrosel_combos" onmouseenter="mostrarTelaHover('container_combos')" onmouseleave="ocultarTelaHover('container_combos')">

        <div class="tela_hover">
            <p class="combo_descricao">${descricao}</p>
        </div>
        <div class="tela_principal" style="background-image: url(${imagem});">
            <p class="combo_preco">${preco}</p>
            <p class="combo_complementos"></p>
        </div>

        <div class="movimentador-carrosel">
            <div class="proximo" onclick="nextCombo()">►</div>
            <div class="anterior" onclick="previousCombo()">◄</div>
        </div>

    </div>
    `;

    console.log(html_combos_carrosel);

    document.body.querySelector('#container_carrosel_combos').innerHTML = html_combos_carrosel;

   
}

async function nextCombo(){
    if(id_combo_ramen >= (combosRamen.length-1)){
        id_combo_ramen = 0;
    }else{
        id_combo_ramen++;
    }

    escreverHTMLCombos(id_combo_ramen);
}

async function previousCombo(){
    if(id_combo_ramen <= 0){
        id_combo_ramen = (combosRamen.length-1);
    }else{
        id_combo_ramen--;
    }

    escreverHTMLCombos(id_combo_ramen);
}

function mostrarTelaHover(classe){
    let telaHover = document.body.querySelector(`.${classe}>.carrosel_combos>.tela_hover`)

    telaHover.style.width = '80vw';
}

function ocultarTelaHover(classe){
    let telaHover = document.body.querySelector(`.${classe}>.carrosel_combos>.tela_hover`)

    telaHover.style.width = '0vw';
}