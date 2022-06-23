let carrinho = [];
let item = window.localStorage.getItem("objeto");
item = JSON.parse(item);
for(i=0; i<item.length; i++){
    carrinho.push(item[i]);
}
carrinho.forEach(ramen => {
    
});