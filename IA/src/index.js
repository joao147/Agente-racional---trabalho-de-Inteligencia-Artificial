const tabuleiro = require('./Tabuleiro');//importando objeto do Tabuleiro 'tab' que foi exportado
const agente = require('./Agente');//importando objeto do Agente 'age' que foi exportado

tabuleiro.tab.gerarTabuleiro(8);
tabuleiro.tab.printTabuleiro();
agente.age.setOuroPosicao(tabuleiro.tab.posicaoOuro);
agente.age.atualizaLista(0,0,tabuleiro.tab.tabuleiro);
console.log(agente.age.ouroPosicao);
console.log(agente.age.fechados);
console.log(agente.age.abertos);

while(!agente.age.getOuro()){
    tabuleiro.tab.tabuleiro[(agente.age.getX()*8)+agente.age.getY()] = 'x';
    agente.age.move(tabuleiro.tab.tabuleiro);
    tabuleiro.tab.tabuleiro[(agente.age.getX()*8)+agente.age.getY()] = 4;
    sleep(2000);
    tabuleiro.tab.printTabuleiro();
    console.log(agente.age.fechados);
    console.log(agente.age.abertos);
}
if(agente.age.getOuro()){
    encerrarJogo(0);
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

 function encerrarJogo(resultado){
    if(resultado==0){
        console.log('O agente encontrou o ouro');
    }else{
        console.log('Essa caverna é impossivel de ser concluida');
    }
 }