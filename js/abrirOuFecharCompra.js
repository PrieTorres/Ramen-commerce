function abrirComprAlert(){
  let container_compra = document.body.querySelector('.compra');
  let container_compra_bg = document.body.querySelector('.compra-bg');


  container_compra.style.display = 'block';
  container_compra_bg.style.display = 'block';

  setTimeout(() => {
    container_compra.style.opacity = 1;
    container_compra_bg.style.opacity = 1;
  }, 200);
}
function fecharCompraAlert(){
  let container_compra = document.body.querySelector('.compra');
  let container_compra_bg = document.body.querySelector('.compra-bg');

  container_compra.style.opacity = 0;
  container_compra_bg.style.opacity = 0;
  
  setTimeout(() => {
    container_compra.style.display = 'none';
    container_compra_bg.style.display = 'none';
  }, 200);
}