
function getRank(vitoria, derrota){

    let pontuacao = vitoria - derrota;
    let nivel;

    if(vitoria <= 10){
        nivel = "Ferro";
    }
     else if(vitoria >= 11 && vitoria <= 20){
        nivel = "Bronze";
    }
     else if(vitoria >= 21 && vitoria <= 50){
        nivel = "Prata";
    }
     else if(vitoria >= 51 && vitoria <= 80){
        nivel = "Ouro";
    }
     else if(vitoria >= 81 && vitoria <= 90){
        nivel = "Diamante";
    }
     else if(vitoria >= 91 && vitoria <= 100){
        nivel = "Lendário";
    }
     else if(vitoria >= 101){
        nivel = "Imortal";
     }
    
    return {
        pontuacao: pontuacao,
        nivel: nivel
    };
}

// Informe o número de vitórias e derrotas obtidas
let vitoria = 22;
let derrota = 5;

let resultado = getRank(vitoria, derrota);

console.log(`O Herói tem de saldo de ${resultado.pontuacao} está no nível de ${resultado.nivel}`);