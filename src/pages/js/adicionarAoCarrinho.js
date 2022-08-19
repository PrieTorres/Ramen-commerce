function comprarRamen(id_ramen){
    ramensJson.forEach(ramen =>{
        if(ramen.id == id_ramen){
            carrinho.push(ramen);
        }
    });
}

function comprarCombo(id_combo){
    combosRamen.forEach(combo =>{
        if(combo.id == id_combo){
            carrinho.push(combo);
        }
    });
}