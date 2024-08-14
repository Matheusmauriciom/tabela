let tabela; // va global para armazenar os dados do json

document.addEventListener("DOMContentLoaded", function () {
  const url = "/dados.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      tabela = data.tabela; // armazenando os dados na variável global

      let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
      tabela.forEach((time) => {
        const linha = document.createElement("tr");
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
        ordenarTabela("pontos", "desc");
      });
    });
});

function ordenarTabela(criterio, ordem = "asc") {
  const dataSort = tabela.sort(function (a, b) {
    if (ordem === "asc") {
      return a[criterio] - b[criterio];
    } else {
      return b[criterio] - a[criterio];
    }
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  dataSort.forEach((time) => {
    const linha = document.createElement("tr");

    // Adiciona a classe 'top-4' se a posição for de 1 a 4
    if (time.posicao >= 1 && time.posicao <= 4) {
      linha.classList.add("top-4");
    }
    if (time.posicao >= 17 && time.posicao <= 20) {
      linha.classList.add("bot-4");
    }

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
}

//organiza por string.
function ordenarPorNome(ordem = "asc") {
  const timeSort = tabela.sort(function (a, b) {
    if (ordem === "asc") {
      return a.time.localeCompare(b.time);
    } else {
      return b.time.localeCompare(a.time);
    }
  });

  const tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  timeSort.forEach((time) => {
    let linha = document.createElement("tr");

    // Adiciona a classe 'top-4' se a posição for de 1 a 4
    if (time.posicao >= 1 && time.posicao <= 4) {
      linha.classList.add("top-4");
    }
    if (time.posicao >= 17 && time.posicao <= 20) {
      linha.classList.add("bot-4");
    }

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
}
