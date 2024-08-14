function buscarCepComClasse(classe) {
    const input = document.body.querySelector(`.${classe}`);
    const container = document.body.querySelector('.resposta_endereco');
    let formulario = JSON.parse(localStorage.getItem('formulario'));

    input.addEventListener('keyup', e => {
        if (input.value.length == 8) {
            let url = `https://viacep.com.br/ws/${input.value}/json/`
            let request = new XMLHttpRequest();

            request.open('GET', url);
            request.onerror = (err) => {
                formulario.cliente.endereco = undefined;
                localStorage.setItem('formulario', JSON.stringify(formulario));
                window.alert('não foi possível buscar o cep descrito');
                console.log("error --> ", err);
                return;
            }


            request.onload = () => {
                let res = JSON.parse(request.responseText);
                const errorText = "Não foi possível recuperar essa informação";
                container.classList.remove('container_invisivel');
                container.classList.add('visificador');

                formulario.cliente.endereco = res;
                formulario.cliente.cep = input.value;
                localStorage.setItem('formulario', JSON.stringify(formulario));
                container.innerHTML = `
                <h2>Confira se o endereço abaixo etá correto</h2>
                <p>Bairro: ${res.bairro ?? errorText}</p>
                <p>Logradouro: ${res.logradouro ?? errorText}</p>
                <p>Localidade: ${res.localidade ?? errorText} / ${res.uf ?? "UF Inválida"}</p>
                `
                if (!res.bairro) {
                    formulario.cliente.endereco = undefined;
                    localStorage.setItem('formulario', JSON.stringify(formulario));
                    return res
                }
            }

            request.send();
        } else {
            container.classList.add('container_invisivel');
            container.classList.remove('visificador');
        }
    })
}