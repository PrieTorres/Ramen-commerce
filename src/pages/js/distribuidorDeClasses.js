function adicionarClasse(classeAdicionada, classeElemento){
    let elementos = document.body.querySelectorAll(`.${classeElemento}`);

    elementos.forEach(elemento => {
        elemento.classList.add(classeAdicionada);
    });
}

function removerClasse(classeRemovida, classeElemento){
    let elementos = document.body.querySelectorAll(`.${classeElemento}`);

    elementos.forEach(elemento => {
        elemento.classList.remove(classeRemovida);
    });
}