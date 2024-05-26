const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
  };
  
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice() {   // Função para rolar o dado (de 1 a 6)
    return Math.floor(Math.random() * 6) + 1;
}  // função assincrona para simular o tempo de espera do dado

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Ronda ${round}`);

        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        // rolar os dados
        let diceResult1 = await rollDice()   // alt + shift + seta_para_baixo para copiar linha para baixo
        let diceResult2 = await rollDice()
    
        // teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
    
        if (block == "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE
    
            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
        }
    
        if (block == "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE
    
            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
        }
    
        if (block == "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER  
            let powerResult2 = diceResult2 + character2.PODER
            // variáveis que só existem dentro deste escopo (if neste caso)
            
            console.log(`${character1.NOME} confrontou ${character2.NOME}! 🥊`)
            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)

            // character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0  //If ternário
            // character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0  

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                character2.PONTOS--;
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`)
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                character1.PONTOS--;
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`)
            }

            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : "")   // OU
            // if (powerResult2 === powerResult1) {
            //     console.log("Confronto empatado! Nenhum ponto foi perdido")
            // }
        }

        // verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }

        console.log("========================")

    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final: ")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else
        console.log("A corrida terminou em empate");
    // Com esta estrutura podemos retirar as chavetas
}


(async function main() {  // Função principal (de entrada) que chama as outras funções
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);   // windows + . para colocar emojis
    await playRaceEngine(player1, player2);  // await para esperar a função terminar de rodar
    await declareWinner(player1, player2);
})(); // auto invoke function --> função auto invocada



  