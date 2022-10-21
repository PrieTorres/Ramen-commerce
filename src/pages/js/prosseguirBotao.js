function prosseguirFormulario(){
    let container = document.body.querySelector('.compra');
    let formProsseguir = document.body.querySelector(".form-prosseguir");

    container.onkeydown = "console.log(formulario)";

    document.body.querySelector('.compra__selecao-pagamento').style.display = "none";
    formProsseguir.style.display = "block";
}