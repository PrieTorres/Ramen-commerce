function comprarRamen(id_ramen){
    ramensJson.forEach(ramen =>{
        if(ramen.id == id_ramen){
            carrinho.push(ramen);
        }
    })
}