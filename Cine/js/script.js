function filtrarCidades(valor) {
    const lista = document.getElementById("lista-cidades");
    lista.style.display = valor ? "block" : "none";
  }
  
  function selecionarCidade(cidade) {
    document.getElementById("cidade").value = cidade;
    document.getElementById("lista-cidades").style.display = "none";
  }

const imagens = [
    'img/banner-1.jpg',
    'img/banner-3.png',
    'img/banner-2.jpg'
];

let index = 0;
const banner = document.getElementById('banner');    
let intervalo;

function mudarBanner(direcao) {
    banner.style.opacity = 0.6;

    setTimeout(() => {
        index = (index + direcao + imagens.length) % imagens.length;
        banner.src = imagens[index];
        banner.style.opacity = 1;
    }, 300);

    clearInterval(intervalo);
    iniciarAutoTroca();
}

function iniciarAutoTroca() {
    intervalo = setInterval(() => {
        mudarBanner(1);
    }, 5000);
}

iniciarAutoTroca();

const filmes = [
    'img/film_1.png',
    'img/film_2.png',
    'img/film_3.png',
    'img/film_4.png',
    'img/film_5.png',
    'img/film1.1.png',
    'img/film2.1.png'
];
    
let inicio = 0;
const visiveis = 5;

function renderizarCards() {
const container = document.getElementById('carroselCartaz');
container.innerHTML = '';

for (let i = 0; i < visiveis; i++) {
    const index = (inicio + i) % filmes.length;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${filmes[index]}" alt="Filme">
        <button class="ver-mais">DETALHES</button>
    `;
    container.appendChild(card);
  }
}

function avancarCard() {
    inicio = (inicio + 1) % filmes.length;
    renderizarCards();
}

function voltarCard() {
    inicio = (inicio - 1 + filmes.length) % filmes.length;
    renderizarCards();
}

renderizarCards();

const filmesOutro = [
    'img/film8.png',
    'img/film7.png',
    'img/film6.png',
    'img/film9.png',
    'img/film10.png',
    'img/film6.1.png',
    'img/film7.1.png',
    'img/film8.1.png'
  ];
  
  let inicioOutro = 0;
  const visiveisOutro = 5;
  
  function renderizarOutroCarrossel() {
    const container = document.getElementById('carroselOutro');
    container.innerHTML = '';
  
    for (let i = 0; i < visiveisOutro; i++) {
      const index = (inicioOutro + i) % filmesOutro.length;
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${filmesOutro[index]}" alt="Filme">
        <button class="ver-mais">DETALHES</button>
      `;
      container.appendChild(card);
    }
  }
  
  function avancarOutroCarrossel() {
    inicioOutro = (inicioOutro + 1) % filmesOutro.length;
    renderizarOutroCarrossel();
  }
  
  function voltarOutroCarrossel() {
    inicioOutro = (inicioOutro - 1 + filmesOutro.length) % filmesOutro.length;
    renderizarOutroCarrossel();
  }
  
  document.addEventListener('DOMContentLoaded', renderizarOutroCarrossel);