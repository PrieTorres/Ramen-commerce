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
    this.cliente = {
      nome: "",
      telefone: "",
      cep: "",
      endereco: ""
    }
    this.total = 0;
  }
}

function salvarForm(formulario){
  window.localStorage.setItem("formulario", JSON.stringify(formulario));
}

function alterarForm( chave, subchave, valor){
  //if(localStorage.getItem("formulario")){
    let formulario = JSON.parse(localStorage.getItem("formulario"));
  //}


  if(!subchave){
    formulario[chave] = valor;
  }else{
    formulario[chave][subchave] = valor;
  }

  // console.log(`
  // formulario.${chave}.${subchave}
  // form.${chave}: ${formulario[chave]}
  // form.${chave}.${subchave}: ${formulario[chave][subchave]}
  // `)
  // console.log('--------------------')

  salvarForm(formulario);
}

function alterarFormComClasse(classe, formulario, chave, sub){
  const input = document.body.querySelector(`.${classe}`);

  input.addEventListener('keydown', e => {
    let text;
    e.key!='Backspace'? text=input.value+e.key : text=input.value;
    alterarForm( chave, sub, text);
  })
}