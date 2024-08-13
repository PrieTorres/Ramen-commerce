let images = [
    'img/ramens/dish-6799805_1920.jpg',
    'img/ramens/ramen-picante.jpg',
    'img/ramens/ramen-picante.jpg',
    'img/ramens/ramen-tradicional.jpg',
    'img/ramens/ramen-vegetariano.jpg',
    'img/ramens/ramen-3561894_1920.jpg',
    'img/ramens/ramen-4593402_1920.jpg',
    'img/ramens/ramen-7187810_1920.jpg',
    ];
function trocarImagem(){
    let container = document.body.querySelector('.descrisao-ramen__container-imagem');
    let i=0;

    setInterval(e=>{
        container.style.backgroundImage = `url(${images[i]})`;
        i++;
        if(i >= parseInt(images.length)-1){
            i = 0;
        }
    }, 5000);
}
