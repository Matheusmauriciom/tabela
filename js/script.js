const objs = [
  {
    tabela: [
      {
        posicao: 1,
        time: "Flamengo",
        jogos: 38,
        vitorias: 28,
        empates: 6,
        derrotas: 4,
        gols_pro: 86,
        gols_contra: 37,
        saldo_gols: 49,
        pontos: 90,
      },
      {
        posicao: 2,
        time: "Santos",
        jogos: 38,
        vitorias: 22,
        empates: 8,
        derrotas: 8,
        gols_pro: 60,
        gols_contra: 33,
        saldo_gols: 27,
        pontos: 74,
      },
      {
        posicao: 3,
        time: "Palmeiras",
        jogos: 38,
        vitorias: 22,
        empates: 8,
        derrotas: 8,
        gols_pro: 61,
        gols_contra: 32,
        saldo_gols: 29,
        pontos: 74,
      },
      {
        posicao: 4,
        time: "Grêmio",
        jogos: 38,
        vitorias: 19,
        empates: 12,
        derrotas: 7,
        gols_pro: 64,
        gols_contra: 39,
        saldo_gols: 25,
        pontos: 69,
      },
      {
        posicao: 5,
        time: "Athletico-PR",
        jogos: 38,
        vitorias: 18,
        empates: 10,
        derrotas: 10,
        gols_pro: 51,
        gols_contra: 32,
        saldo_gols: 19,
        pontos: 64,
      },
      {
        posicao: 6,
        time: "São Paulo",
        jogos: 38,
        vitorias: 17,
        empates: 12,
        derrotas: 9,
        gols_pro: 39,
        gols_contra: 30,
        saldo_gols: 9,
        pontos: 63,
      },
      {
        posicao: 7,
        time: "Internacional",
        jogos: 38,
        vitorias: 16,
        empates: 10,
        derrotas: 12,
        gols_pro: 44,
        gols_contra: 39,
        saldo_gols: 5,
        pontos: 58,
      },
      {
        posicao: 8,
        time: "Corinthians",
        jogos: 38,
        vitorias: 14,
        empates: 14,
        derrotas: 10,
        gols_pro: 42,
        gols_contra: 34,
        saldo_gols: 8,
        pontos: 56,
      },
      {
        posicao: 9,
        time: "Fortaleza",
        jogos: 38,
        vitorias: 15,
        empates: 8,
        derrotas: 15,
        gols_pro: 50,
        gols_contra: 47,
        saldo_gols: 3,
        pontos: 53,
      },
      {
        posicao: 10,
        time: "Goiás",
        jogos: 38,
        vitorias: 15,
        empates: 8,
        derrotas: 15,
        gols_pro: 46,
        gols_contra: 64,
        saldo_gols: -18,
        pontos: 53,
      },
      {
        posicao: 11,
        time: "Bahia",
        jogos: 38,
        vitorias: 13,
        empates: 11,
        derrotas: 14,
        gols_pro: 44,
        gols_contra: 43,
        saldo_gols: 1,
        pontos: 50,
      },
      {
        posicao: 12,
        time: "Vasco",
        jogos: 38,
        vitorias: 12,
        empates: 13,
        derrotas: 13,
        gols_pro: 39,
        gols_contra: 49,
        saldo_gols: -10,
        pontos: 49,
      },
      {
        posicao: 13,
        time: "Atlético-MG",
        jogos: 38,
        vitorias: 12,
        empates: 9,
        derrotas: 17,
        gols_pro: 45,
        gols_contra: 54,
        saldo_gols: -9,
        pontos: 45,
      },
      {
        posicao: 14,
        time: "Fluminense",
        jogos: 38,
        vitorias: 12,
        empates: 9,
        derrotas: 17,
        gols_pro: 46,
        gols_contra: 53,
        saldo_gols: -7,
        pontos: 45,
      },
      {
        posicao: 15,
        time: "Botafogo",
        jogos: 38,
        vitorias: 13,
        empates: 4,
        derrotas: 21,
        gols_pro: 31,
        gols_contra: 47,
        saldo_gols: -16,
        pontos: 43,
      },
      {
        posicao: 16,
        time: "Ceará",
        jogos: 38,
        vitorias: 11,
        empates: 9,
        derrotas: 18,
        gols_pro: 36,
        gols_contra: 41,
        saldo_gols: -5,
        pontos: 42,
      },
      {
        posicao: 17,
        time: "Cruzeiro",
        jogos: 38,
        vitorias: 7,
        empates: 15,
        derrotas: 16,
        gols_pro: 27,
        gols_contra: 46,
        saldo_gols: -19,
        pontos: 36,
      },
      {
        posicao: 18,
        time: "CSA",
        jogos: 38,
        vitorias: 9,
        empates: 8,
        derrotas: 21,
        gols_pro: 23,
        gols_contra: 58,
        saldo_gols: -35,
        pontos: 35,
      },
      {
        posicao: 19,
        time: "Chapecoense",
        jogos: 38,
        vitorias: 7,
        empates: 10,
        derrotas: 21,
        gols_pro: 28,
        gols_contra: 52,
        saldo_gols: -24,
        pontos: 31,
      },
      {
        posicao: 20,
        time: "Avaí",
        jogos: 38,
        vitorias: 3,
        empates: 13,
        derrotas: 22,
        gols_pro: 18,
        gols_contra: 62,
        saldo_gols: -44,
        pontos: 22,
      },
    ],
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const url = '/dados.json';
  //chamando o meu json
  fetch(url)
        //peguei minha 
      .then(response => response.json())  //converti para jason
      .then(data => {
          // elemento com o id '
          let tabelaBrasileirao= document.getElementById('tabela-brasileirao');
          
          //itera a array
          data.tabela.forEach(time => {

              //criei minha linha
              const linha = document.createElement('tr'); //criei minha tr

              //chamei a posicao
              linha.innerHTML = `
                  <td>${time.posicao}</td>
                  <td>${time.time}</td>
                  <td>${time.jogos}</td>
                  <td>${time.vitorias}</td>
                  <td>${time.empates}</td>
                  <td>${time.derrotas}</td>
                  <td>${time.gols_pro}</td>
                  <td>${time.gols_contra}</td>
                  <td>${time.saldo_gols}</td>
                  <td>${time.pontos}</td>

              `;
              tabelaBrasileirao.appendChild(linha);
          });
      })
});




function derrotas (number)
{

  let teste = objs.derrotas;

console.log(objs)
}


