function verificadorProsseguir(){
    let all_divs = document.body.querySelectorAll('.form-ativo>div');

    if(all_divs.length <= 0){
        alert('preencha os campos para prosseguir')
    }

    let all_inputs = [];

    if(document.body.querySelectorAll('.form-ativo')[0].classList[0] == 'pagamento-entrega'){


        
    }else{
        all_inputs = document.body.querySelectorAll('.')
    }

    console.log(all_inputs);
}