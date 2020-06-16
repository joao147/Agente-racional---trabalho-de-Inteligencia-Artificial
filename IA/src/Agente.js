/*function calcDistancia(x,y){//Função Heurisca Não Adimissível
    return  2*(Math.abs(x-age.ouroPosicao.x)
            +Math.abs(y-age.ouroPosicao.y));
}*/

function calcDistancia(x,y){//Função Heurisca Adimissível
    return  Math.sqrt((Math.pow(x-age.ouroPosicao.x,2)
            +Math.pow(y-age.ouroPosicao.y,2)));
}

function encerrarJogo(resultado){
    if(resultado==0){
        console.log(`
        *-------------------------*
         O agente encontrou o ouro
        *-------------------------*
        `);
    }else{
        console.log('Essa caverna é impossivel de ser concluida');
    }
 }

class Agente{
    x;
    y;
    ouro;
    abertos = new Array();
    fechados = new Array();
    ouroPosicao;
    qtdPassos = 0;

    constructor(){
        this.x = 0;
        this.y = 0;
        this.ouro = false;
    }

    setX(x){
        this.x = x;
    }

    getX(){
        return this.x;
    }

    setY(y){
        this.y = y;
    }

    getY(){
        return this.y;
    }

    setOuro(){
        this.ouro = true;
    }

    getOuro(){
        return this.ouro;
    }

    getQtdPassos(){
        return this.qtdPassos;
    }

    getDistaciaInicialOuro(){
        return calcDistancia(0,0);
    }

    setOuroPosicao(posicao){
        let j;
        let i;
        for( i = 0; i < 8; i++){
            for( j = 0; j < 8; j++){
                if((i*8)+j === posicao){
                    break;
                }
            }
            if((i*8)+j === posicao){
                break;
            }
        }

        if (j === 8){
            i++;
            j = 0;
        }

        let ouroX = i;
        let ouroY = j;
        this.ouroPosicao = {x: ouroX, y: ouroY};
    }

    atualizaLista(x,y,tab){
        let posicaoAtual = (x*8) + y; //conversão matriz para lista

        let obj = new Object;
        obj.posicao = posicaoAtual;
        obj.custo = calcDistancia(x,y);
            
        this.fechados.push(obj);    //adiciona o nó atual a lista de fechados
        this.qtdPassos++;
        this.abertos = this.abertos.filter(a => a.posicao!==posicaoAtual);   //remove o nó atual da lista de abertos
        if( this.fechados[this.fechados.length-1].custo > 0){
            if (x===0){ //tratamento da linha 0
                if (y===0){ //tratamento da coluna 0
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual + 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1);
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a direita na lista de abertos
                    }
                }
                else if (y===7){ //tratamento da ultima coluna
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual-1;
                        obj.custo = calcDistancia(x,y-1)

                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a esquerda na lista de abertos
                    }
                }

                else { //tratamento das demais colunas
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual + 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a direita na lista de abertos
                    }
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual - 1;
                        obj.custo = calcDistancia(x,y-1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj);//adiciona o nó a esquerda na lista de abertos
                    }

                }
                if(tab[posicaoAtual + 8]===0 || tab[posicaoAtual + 8]===3){ //verificacao padrao para a linha 0
                    obj = new Object;
                    obj.posicao = posicaoAtual + 8;
                    obj.custo = calcDistancia(x+1,y)
                    const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                    if(fechado.length===0)
                    this.abertos.push(obj);//adiciona o nó abaixo na lista de abertos
                }
            }

            else if (x===7){ //tratamento da linha 7
                if (y===0){ //tratamento da coluna 0
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual + 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj);//adiciona o nó a direita na lista de abertos
                    }
                }

                else if (y===7){ //tratamento da ultima coluna
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual - 1;
                        obj.custo = calcDistancia(x,y-1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj);//adiciona o nó a esquerda na lista de abertos
                    }
                }

                else { //tratamento das demais colunas
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj);//adiciona o nó a direita na lista de abertos
                    }
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual - 1;
                        obj.custo = calcDistancia(x,y-1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj);//adiciona o nó a esquerda na lista de abertos
                    }

                }
                if(tab[posicaoAtual - 8]===0 || tab[posicaoAtual - 8]===3){ //verificacao padrao para a linha 7
                    obj = new Object;
                    obj.posicao = posicaoAtual - 8;
                    obj.custo = calcDistancia(x-1,y)
                    const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                    if(fechado.length===0)
                    this.abertos.push(obj); //adiciona o nó acima na lista de abertos
                }
                
            }

            else { //tratamento das demais linhas: 1,2,3,4,5 e 6   
                if (y===0){ //tratamento da coluna 0
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual + 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a direita na lista de abertos
                    }
                }

                else if (y===7){ //tratamento da ultima coluna
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual - 1;
                        obj.custo = calcDistancia(x,y-1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a esquerda na lista de abertos
                    }
                }

                else { //tratamento das demais colunas
                    if(tab[posicaoAtual + 1]===0 || tab[posicaoAtual + 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual + 1;
                        obj.custo = calcDistancia(x,y+1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a direita na lista de abertos
                    }
                    if(tab[posicaoAtual - 1]===0 || tab[posicaoAtual - 1]===3){
                        obj = new Object;
                        obj.posicao = posicaoAtual - 1;
                        obj.custo = calcDistancia(x,y-1)
                        const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                        if(fechado.length===0)
                        this.abertos.push(obj); //adiciona o nó a esquerda na lista de abertos
                    }

                }
                if(tab[posicaoAtual + 8]===0 || tab[posicaoAtual + 8]===3){ //verificacao padrao para as linhas intermediarias
                    obj = new Object;
                    obj.posicao = posicaoAtual + 8;
                    obj.custo = calcDistancia(x+1,y)
                    const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                    if(fechado.length===0)
                    this.abertos.push(obj);//adiciona o nó abaixo na lista de abertos
                }
                if(tab[posicaoAtual - 8]===0 || tab[posicaoAtual - 8]===3){ //verificacao padrao para as linhas intermediarias
                    obj = new Object;
                    obj.posicao = posicaoAtual - 8;
                    obj.custo = calcDistancia(x-1,y)
                    const fechado = this.fechados.filter(f => f.posicao === obj.posicao);
                    if(fechado.length===0)
                    this.abertos.push(obj); //adiciona o nó acima na lista de abertos
                }
            }

            if(this.abertos.length === 0){
                console.log('Impossivel chegar ao ouro! Nenhum caminho aberto');
            }
    }
}

    move(tab){
        let melhorMovimento;
        let i;
        let j;
        let verify=0;

        if(this.abertos.length > 0){
            melhorMovimento = this.abertos[0];

            if(this.abertos.length > 1){
                for(let count = 1; count < this.abertos.length; count++){
                    if(melhorMovimento.custo > this.abertos[count].custo){
                        melhorMovimento = this.abertos[count];
                    }
                }
            }
        }else{
            encerrarJogo(1);
            return;
        }

        for(i = 0; i < 8; i++){
            for( j = 0; j < 8; j++){
                if((i*8)+j === melhorMovimento.posicao){
                    break;
                }
            }
            if((i*8)+j === melhorMovimento.posicao){
                verify = 1;
                this.x = i;
                this.y = j;
                break;
            }
        }

        if (this.y === 8){
            this.x++;
            this.y = 0;
        }

        if(verify === 1){
            this.atualizaLista(this.x, this.y, tab);
        }

        if(this.verificarOuro(this.x, this.y,tab)){
            this.setOuro();
            encerrarJogo(0);
        }
    }

    verificarOuro(x,y,tab){
        if(((x*8)+y) >= 0){
            if(tab[(x*8)+y] === 3){
                return true;
            }else{
                return false;
            }
        }
    }   
}

const age = new Agente();

module.exports.age = age;