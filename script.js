const btnMenu = document.getElementById("menu-hamburguer");
const fecharMenu = document.getElementById("fechar-menu");
const bgEscuro = document.getElementById("bg-escuro");
const nav = document.getElementById("nav");

btnMenu.addEventListener("click", toggleMenu);
fecharMenu.addEventListener("click", fechar);

function fechar() {
  nav.classList.toggle("ativo");
  bgEscuro.classList.toggle("hidden");
}

function toggleMenu() {
  nav.classList.toggle("ativo");
  bgEscuro.classList.toggle("hidden");
}

/* Slider */
let slides = document.getElementsByClassName("slides");
let thumbnails = document.querySelectorAll(".thumbnails");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(e) {
  showSlides((slideIndex += e));
}

function currentSlide(e) {
  showSlides((slideIndex = e));
}

function showSlides(e) {
  if (e > slides.length) {
    slideIndex = 1;
  }
  if (e < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails.forEach((element) => {
    element.classList.remove("active");
  });
  thumbnails[slideIndex - 1].classList.toggle("active");
}
btnPrev.addEventListener("click", () => plusSlides(-1));
btnNext.addEventListener("click", () => plusSlides(1));
thumbnails.forEach((element, index) => {
  element.addEventListener("click", () => currentSlide(index + 1));
});

//Carrinho de Compras

let produto = {
  preco: 125,
  qtd: 0,
};

const btnCarrinho = document.getElementById("carrinho");
const btnAdicionar = document.getElementById("add-carrinho");
const inputQuantidade = document.getElementById("quantidade");
const labelCarrinho = document.getElementById("qtd-carrinho");
const modalCarrinho = document.getElementById("modal-carrinho");
const modalCarrinhoCheio = document.getElementById("modal-carrinho-cheio");
const labelQtdProduto = document.getElementById("label-qtd-produto");
const precoTotal = document.getElementById("preco-total");
const btnDeletar = document.getElementById("delete");

function atualizarCarrinho() {
  labelCarrinho.classList.remove("hidden");
  const quantidadeProduto = inputQuantidade.value;
  produto.qtd += Number(quantidadeProduto);
  labelCarrinho.textContent = produto.qtd;

  labelQtdProduto.textContent = produto.qtd;
  precoTotal.textContent = `$${produto.preco * produto.qtd}.00`;
}

function deletarProduto() {
    produto.qtd = 0
    modalCarrinhoCheio.classList.add('hidden')
    modalCarrinho.classList.add("hidden");
    labelCarrinho.textContent = ''
    labelCarrinho.classList.add("hidden")
}

btnAdicionar.addEventListener("click", atualizarCarrinho);
btnDeletar.addEventListener("click", deletarProduto)

const diminuir = document.getElementById("diminuir");
const aumentar = document.getElementById("aumentar");
diminuir.addEventListener("click", (e) => {
  if (quantidade.value <= 1) {
    return e.preventDefault();
  } else {
    quantidade.value--;
  }
});

aumentar.addEventListener("click", () => {
  quantidade.value++;
});

btnCarrinho.addEventListener("click", () => {
  if (produto.qtd > 0) {
    modalCarrinhoCheio.classList.toggle("hidden");
  } else {
    modalCarrinho.classList.toggle("hidden");
  }
});
