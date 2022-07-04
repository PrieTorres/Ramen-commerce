let valor = 1;//vai ser trocado pelo valor contido no json do ramen
document.body.querySelector('.barra__quantidade').value = valor;
let quantidade_box = document.body.querySelector('.barra__quantidade');
let num = parseInt(document.body.querySelector('.barra__quantidade').value);
function alterarQuantidade(operacao){
    if(operacao=='mais'){
        num++;
        quantidade_box.innerHTML = num;
        quantidade_box.value = num;
    }else
    if(operacao=='menos'){
        if(num>1){
            num--;
            quantidade_box.innerHTML = num;
            quantidade_box.value = num;
        }
    }
}
