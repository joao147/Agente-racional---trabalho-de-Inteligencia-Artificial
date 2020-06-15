function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class Tabuleiro{
    tabuleiro= new Array();
    posicaoOuro;
    
    constructor(){}

    gerarTabuleiro(qtd) {
        this.tabuleiro.push(4);// 4 representa o agente
        this.tabuleiro.push(3);// 3 representa o ouro
        this.tabuleiro.push(2);// 2 representa o wumpus
        
        let i = 2;
        for(let j=0; j<qtd; j++){
            this.tabuleiro.push(1);
            i++;
        }
        while(i<64){
            this.tabuleiro.push(0);
            i++;
        }

        shuffle(this.tabuleiro);

        const lugar = this.tabuleiro.indexOf(4);
        this.tabuleiro[lugar] = this.tabuleiro[0];
        this.tabuleiro[0] = 4;
        this.posicaoOuro = this.tabuleiro.indexOf(3);
        
    }

    printTabuleiro(){
        let i=0;
        while(i<8){
            console.log(`${this.tabuleiro[(i*8)+0]} ${this.tabuleiro[(i*8)+1]} ${this.tabuleiro[(i*8)+2]} ${this.tabuleiro[(i*8)+3]} ${this.tabuleiro[(i*8)+4]} ${this.tabuleiro[(i*8)+5]} ${this.tabuleiro[(i*8)+6]} ${this.tabuleiro[(i*8)+7]}`)
            i++;
        }
    }
}

const tab = new Tabuleiro();

module.exports.tab = tab;