function montarRamen(){
    let carne = document.body.querySelector('input.carne:checked').value;
    let caldo = document.body.querySelector('input.caldo:checked').value;
    let tamanho = document.body.querySelector('input.tamanho:checked').value;
    let complementos_input = document.body.querySelectorAll('input.complementos:checked');
    let complementos = [];
    for(i in complementos_input){
        if(complementos_input[i].value != null){
        complementos.push(complementos_input[i].value);
        }
    }

    let ramen = new Ramen(caldo, carne, tamanho);
    ramen.complementos.push(complementos);

    
}