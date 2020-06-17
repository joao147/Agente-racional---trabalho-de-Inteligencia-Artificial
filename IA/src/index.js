const tabuleiro = require('./Tabuleiro');//importando objeto do Tabuleiro 'tab' que foi exportado
const agente = require('./Agente');//importando objeto do Agente 'age' que foi exportado

//funções necessárias funcionamento do Agente e do jogo
tabuleiro.tab.gerarTabuleiro(8);
agente.age.setOuroPosicao(tabuleiro.tab.posicaoOuro);
agente.age.atualizaLista(0,0,tabuleiro.tab.tabuleiro);

//Prints de do estado inicial do tabuleiro, agente e listas de abertos e fechados
tabuleiro.tab.printTabuleiro();
console.log(agente.age.ouroPosicao);
console.log('Fechados:')
console.log(agente.age.fechados);
console.log('Abertos:')
console.log(agente.age.abertos);

//Inicio do jogo
while(!agente.age.getOuro()){
tabuleiro.tab.tabuleiro[(agente.age.getX()*8)+agente.age.getY()] = 'x';//Inseri um 'x' onde o agente já passou
    agente.age.move(tabuleiro.tab.tabuleiro);
    tabuleiro.tab.tabuleiro[(agente.age.getX()*8)+agente.age.getY()] = 4;//Inseri um 4 na posição atual do agente(4 representa o agente)

    sleep(2000);//Pausa de 2 segundos

    tabuleiro.tab.printTabuleiro();
    console.log('Fechados:')
    console.log(agente.age.fechados);
    console.log('Abertos:')
    console.log(agente.age.abertos);
}

/*console.log(agente.age.getQtdPassos());
console.log(agente.age.getDistaciaInicialOuro());*/

if(agente.age.getQtdPassos() < agente.age.getDistaciaInicialOuro()){//Testa se a função utilizada é adimissível ou não
    console.log('Não adimissível');
}else{
    console.log('Adimissível');
}


function sleep(miliseconds) {//Função de pause
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

