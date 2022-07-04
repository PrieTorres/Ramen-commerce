//https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

function salvarObjeto(objeto){
    window.localStorage.setItem("objeto", JSON.stringify(objeto));
}
function carregarObjeto(){
    let newObject = window.localStorage.getItem("objeto");
    let item = JSON.parse(newObject);
    carrinho.push(...item);//porque item é um array
}

function redirect(){ window.location.href = 'carrinho.html' }