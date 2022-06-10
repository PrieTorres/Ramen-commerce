export class Ramen {
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