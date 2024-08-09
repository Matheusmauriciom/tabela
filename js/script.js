let tabela; // va global para armazenar os dados do json

document.addEventListener('DOMContentLoaded', function () {
  const url = '/dados.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      tabela = data.tabela; // armazenando os dados na variável global

      let tabelaBrasileirao = document.getElementById('tabela-brasileirao');
      tabela.forEach(time => {
        const linha = document.createElement('tr');
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
    });


});














// function mostrarDerrotas() {
//   if (!tabela) {
//     console.error('Dados ainda não carregados.');
//     return;
//   }

//   let tabelaBrasileirao = document.getElementById('tabela-brasileirao');
//   tabelaBrasileirao.innerHTML = ''; // Limpa a tabela antes de atualizar

//   tabela.forEach(time => {
//     const linha = document.createElement('tr');
//     linha.innerHTML = `
//       <td>${time.posicao}</td>
//       <td>${time.time}</td>
//       <td>${time.derrotas}</td>
//     `;
//     tabelaBrasileirao.appendChild(linha);
//   });
// }


