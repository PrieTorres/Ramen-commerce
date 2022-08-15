function formatarInputValor(classe){
  let input = document.body.querySelector(`.${classe}`);
  let valor = '';

  input.addEventListener('keydown', e => {
    
    if(['1','2','3','4','5','6','7','8','9','0'].includes(e.key) && valor.length < 4){
      valor += e.key;
      input.value = `R$: ${valor},00`;
    }else if(e.key == 'Backspace'){
      valor = valor.slice(0, -1);
      input.value = `R$: ${valor},000`;
      if(valor.length <= 0){
        input.value = `R$: 00,000`;
      }
    }
    else{
      if(valor.length > 0){
        input.value = `R$: ${valor},00`;
      }else{
        input.value = 'R$: 00,00';
      }
    }

  });
 
}