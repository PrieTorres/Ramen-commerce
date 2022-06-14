class Ramen {
    constructor(caldo, carne, tamanho){
        this.caldo = caldo;
        this.carne = carne;
        this.tamanho = tamanho;
        this.complementos=[];
        this._preco;
    }

    get preco(){
        return this._preco;
    }

    calcularPreco(){
        if(this.tamanho=="pequeno"){
            this._preco=20+(ParseInt(this.complementos.length)*0.7);
        }
        if(this.tamanho=="medio"){
            this._preco=25+(ParseInt(this.complementos.length)*0.8);
        }
        if(this.tamanho=="grande"){
            this._preco=30+(ParseInt(this.complementos.length));
        }
    }
}

function montarRamen(){
    let carne = document.body.querySelector('input.carne:checked').value;
    let caldo = document.body.querySelector('input.caldo:checked').value;
    let tamanho = document.body.querySelector('input.tamanho:checked').value;
    let complementos_input = document.body.querySelectorAll('input.complementos:checked');
    let complementos = [];
    for(i in complementos_input){
        if(complementos_input[i].value != null){
        complementos.push(complementos_input[i].value);
        }
    }

    console.log(complementos)



    let ramen = new Ramen(caldo, carne, tamanho);
    ramen.complementos.push(complementos)

    console.log(ramen)
}