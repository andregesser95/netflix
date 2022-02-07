$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 5,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

function assitir(){
  alert('Assistindo House of Cards...')
}

function maisInformacoes(){
  alert('House of Cards está atualmente disponível para Ver em Stream no/na Brasil. JustWatch te ajuda a descobrir onde você pode assistir legalmente seus filmes e séries online. Visite JustWatch para mais informações.')
}
