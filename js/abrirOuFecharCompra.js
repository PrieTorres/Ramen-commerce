function abrirComprAlert(){
  let container_compra = document.body.querySelector('.compra');
  let container_compra_bg = document.body.querySelector('.compra-bg');

  container_compra.style.display = 'block';
  container_compra_bg.style.display = 'block';
}
function fecharCompraAlert(){
  let container_compra = document.body.querySelector('.compra');
  let container_compra_bg = document.body.querySelector('.compra-bg');

  container_compra.style.display = 'none';
  container_compra_bg.style.display = 'none';
}