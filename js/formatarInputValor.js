function formatarInputValor(classe){
  let input = document.body.querySelector(`.${classe}`);

  input.addEventListener('keydown', e => {
    
    if(['1','2','3','4','5','6','7','8','9','0'].includes(e.key)){
      input.value = `R$: ${e.key},00`;
    }else{
      input.value = input.value;
      console.log('valor invalido')
    }

  });

  
}