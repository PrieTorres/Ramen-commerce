var id_combo_ramen = 0;


function escreverHTMLCombos(id){
    let descricao = combosRamen[id].descricao;
    let imagem = combosRamen[id].imagem;
    let preco = combosRamen[id].preco;
    let itens = [];

    combosRamen[id].complementos.forEach(ingrediente => {
        itens.push(`<li class="combo_complementos__item">${ingrediente}</li>`);
    });
    itens = itens.join(''); 


    let html_combos_carrosel = `
    <div class="carrosel_combos" onmouseenter="mostrarTelaHover('container_combos')" onmouseleave="ocultarTelaHover('container_combos')">

        <div class="tela_hover" id="combo_${id_combo_ramen}" onclick="comprarCombo(${(id_combo_ramen+1)}); abrirCarrinho(combosRamen[${id_combo_ramen}]);">
            <p class="combo_descricao">${descricao}</p>
        </div>
        <div class="tela_principal" style="background-image: url(${imagem});">
            <div class="combos_infos">
                <p class="combo_preco">${preco}</p>
                <ul class="combo_complementos">${itens}</ul>
            </div>
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

    telaHover.style.opacity = '1';
}

function ocultarTelaHover(classe){
    let telaHover = document.body.querySelector(`.${classe}>.carrosel_combos>.tela_hover`)

    telaHover.style.opacity = '0';
}