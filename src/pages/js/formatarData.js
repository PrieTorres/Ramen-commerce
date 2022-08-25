function formatarInputData(classeInput){
  let input = document.body.querySelector(`.${classeInput}`);
  let valor = '';
  let data = [];
  let numbers = [];
  input.value = '';
  let formulario = window.localStorage.getItem("formulario");
  formulario = JSON.parse(formulario);

  input.addEventListener('keydown', e => {

    if(['1','2','3','4','5','6','7','8','9','0'].includes(e.key) && valor.length < 10 ){
      input.value = ''

      numbers.push(e.key);

      data.push(e.key);

      if([2,5].includes(data.length)){
        data.push('/')
      }

      valor = data.join('')

      input.value = `${valor}`;
    } else if(e.key == 'Backspace'){
      numbers.pop();
      let count = 0;
      data = [];
      
      numbers.forEach(num => {
        if(count == 2||count == 4){
          data.push('/');
        }
        count++;
        data.push(num);
      });

      valor = data.join('');

      input.value = valor;
    } else{
      if(valor.length <= 0){
        input.value = ''
      }else {
        input.value = valor
      }
    }

    formulario.online.validade_cartao = valor;
    window.localStorage.setItem("formulario", JSON.stringify(formulario));
  });

}