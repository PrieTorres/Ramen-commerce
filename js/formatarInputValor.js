function formatarInputValor(classe, valorMinimo=0){
  let input = document.body.querySelector(`.${classe}`);
  let valor = `${valorMinimo}`;
  let formulario = window.localStorage.getItem("formulario");
  formulario = JSON.parse(formulario);

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
      if(valor.length <= 0){
        input.value = `R$: 00,00`;
      }else{
        input.value = `R$: ${valor},00`;
      }
    }

    if(valor < valorMinimo){
      input.style.color = "red"
    }

    formulario.entrega.troco = input.value;
    window.localStorage.setItem("formulario", JSON.stringify(formulario));

  });
 
}