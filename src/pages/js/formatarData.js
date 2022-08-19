function formatarInputData(classeInput){
  let input = document.body.querySelector(`.${classeInput}`);
  let valor = '';
  let data = [];

  input.addEventListener('keydown', e => {

    if(['1','2','3','4','5','6','7','8','9','0'].includes(e.key) && valor.length <6 ){
      valor += e.key;
      data.push(valor);
      if([2,4].includes(valor.length)){
        data.push('/')
      }

      input.value = '';
    }
    else if(e.key == 'Backspace'){
      valor = valor.slice(0, -1);
      input.value = valor;
    } 
    else{
      if(valor.length < 1){
        input.valor = ''
      }else {
        input.value = valor
      }
    }

  });
}