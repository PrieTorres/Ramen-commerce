//https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

function salvarObjeto(item){
    window.localStorage.setItem("carrinho", JSON.stringify(item));
}
function carregarObjeto(){
    if(window.localStorage.getItem("carrinho").length == 0) return;
    let newObject = window.localStorage.getItem("carrinho");
    let item = JSON.parse(newObject);
    carrinho.push(...item);//porque item é um array
}

function redirect(){ window.location.href = 'carrinho.html' }