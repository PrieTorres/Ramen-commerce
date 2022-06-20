//https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

function salvarObjeto(objeto){
    window.localStorage.setItem("objeto", JSON.stringify(objeto));
}
function carregarObjeto(){
    let newObject = window.localStorage.getItem("objeto");
    console.log(JSON.parse(newObject));
}
function x(){ window.location.href = 'carrinho.html' }