class Ramen {
    constructor(caldo, carne, tamanho){
        this.nome
        this.caldo = caldo;
        this.carne = carne;
        this.tamanho = tamanho;
        this.complementos=[];
        this.precos=[];
        this.imagem = './img/ramens/ramen_7.png';
        this.descricao = 'O seu ramen personalizado do jeitinho que você gosta'
        this.quantidade = 1;
    }


    calcularPreco(){
        
            this.precos[0]=28.9+(parseInt(this.complementos.length)*0.7);
        
        
            this.precos[1]=37.4+(parseInt(this.complementos.length)*0.8);
        
        
            this.precos[2]=45.5+(parseInt(this.complementos.length));
        
    }
}