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
      });
    });
});

function time() {
  const timeSort = tabela.sort(function (a, b) {
    return a.time.localeCompare(b.time);
  });

  const tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  timeSort.forEach((time) => {
    let linha = document.createElement("tr");
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

function derrota() {
  const dataSort = tabela.sort(function (a, b) {
    return a.derrotas - b.derrotas;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  dataSort.forEach((time) => {
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
  });
}

function empate() {
  const empateSort = tabela.sort(function (a, b) {
    return a.empates - b.empates;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  empateSort.forEach((time) => {
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
  });
}

function vitoria() {
  const vitoriaSort = tabela.sort(function (a, b) {
    return b.vitorias - a.vitorias;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  vitoriaSort.forEach((time) => {
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
  });
}

function posicao() {
  const posicaoSort = tabela.sort(function (a, b) {
    return a.posicao - b.posicao;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  posicaoSort.forEach((time) => {
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
  });
}

function gols_pro() {
  const golsPro = tabela.sort(function (a, b) {
    return b.gols_pro - a.gols_pro;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  golsPro.forEach((time) => {
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
  });
}
function gols_contra() {
  const golsContra = tabela.sort(function (a, b) {
    return a.gols_contra - b.gols_contra;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  golsContra.forEach((time) => {
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
  });
}
function saldo_gols() {
  const saldoGols = tabela.sort(function (a, b) {
    return b.saldo_gols - a.saldo_gols;
  });

  let tabelaBrasileirao = document.getElementById("tabela-brasileirao");
  tabelaBrasileirao.innerHTML = ``;
  saldoGols.forEach((time) => {
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
  });
}
