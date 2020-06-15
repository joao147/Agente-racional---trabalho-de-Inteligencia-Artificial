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
    tabuleiro= new Array();//Tabuleiro
    posicaoOuro;
    //CONSTANTES
    NADA = 0;
    POCO = 1;
    WUMPUS = 2;
    OURO = 3;
    AGENTE = 4;

    constructor(){}

    gerarTabuleiro(qtd){
        this.tabuleiro.push(AGENTE);// 4 representa o agente
        this.tabuleiro.push(OURO);// 3 representa o ouro
        this.tabuleiro.push(WUMPUS);// 2 representa o wumpus
        
        let i = 2;//Inicia em 2 pois já há 3 itens no tabuleiro(agente, ouro e wumpus)

        for(let j = 0; j < qtd; j++){//adiciona o numero de poços que o usuário inserir
            this.tabuleiro.push(POCO);// 1 representa os poços
            i++;
        }

        while(i<64){//Inseri NADA no resto do tabuleiro
            this.tabuleiro.push(NADA);// 0 representa que não a nada que impeça o agente
            i++;
        }

        shuffle(this.tabuleiro);//Aplica o shuffle no array

        //O agente sempre inicia no [0,0]
        const lugar = this.tabuleiro.indexOf(4);//recebe posição do agente após shuffle
        this.tabuleiro[lugar] = this.tabuleiro[0];//adiciona o que estava na posição [0,0] a posição onde o agente estava
        this.tabuleiro[0] = 4;//Coloca o agente na posição[0,0]

        this.posicaoOuro = this.tabuleiro.indexOf(3);//resgata a posição do ouro no array
    }

    printTabuleiro(){//mostra o tabuleiro
        let i=0;
        while(i<8){
            console.log(`${this.tabuleiro[(i*8)+0]} ${this.tabuleiro[(i*8)+1]} ${this.tabuleiro[(i*8)+2]} ${this.tabuleiro[(i*8)+3]} ${this.tabuleiro[(i*8)+4]} ${this.tabuleiro[(i*8)+5]} ${this.tabuleiro[(i*8)+6]} ${this.tabuleiro[(i*8)+7]}`)
            i++;
        }
    }
}

const tab = new Tabuleiro();//Cria um objeto de Tabuleiro

module.exports.tab = tab;//exporta o objeto cria 'tab'