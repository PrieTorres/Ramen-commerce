class Formulario_pagamento {
  constructor(){
    this.pagamento; //entrega ou online
    this.entrega = {
      pagamento: '', //dinheiro ou cartao
      troco: '', // valor ou apenas não
      cartao: '' // uma das opcoes de cartao ou apenas não
    }
    this.online = {
      titular_cartao: '',
      numero_cartao: '',
      validade_cartao: '',
      cod_seguranca: ''
    }
    this.total = 0;
  }
}

const formulario = new Formulario_pagamento();

function salvarForm(formulario){
  window.localStorage.setItem("formulario", JSON.stringify(formulario));
}

function alterarForm(formulario, chave, valor){
  if(localStorage.getItem("formulario")){
    formulario = JSON.parse(localStorage.getItem("formulario"));
  }

  formulario.keys(obj).forEach(function(key) {

    //console.log(key, obj[key]);
    if(key == chave){
      obj[key] = valor;
    }
  
  });

  salvarForm(formulario);
}