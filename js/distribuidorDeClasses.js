function adicionarClasse(classeAdicionada, classeElemento){
    let elemento = document.body.querySelector(`.${classeElemento}`);

    elemento.classList.add(classeAdicionada);
}

function removerClasse(classeRemovida, classeElemento){
    let elemento = document.body.querySelector(`.${classeElemento}`);

    elemento.classList.remove(classeRemovida);
}