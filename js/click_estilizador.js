function aumentar_e_colorir(elemento_id){
    let elemento = document.body.querySelector(`#${elemento_id}`);
    elemento.classList.add('aumenta_e_shadow');
}
function limparEstilos(classeFixa, classeRemover){
    let elementos = document.body.querySelectorAll(`.${classeFixa}`);

    elementos.forEach(elemento => {
        if(elemento.classList.contains(classeRemover)){
            elemento.classList.remove(classeRemover);
        }
    });
}