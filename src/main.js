import { listarProdutos } from './services/api'
import './style.css'
import '@phosphor-icons/web/regular'

async function init() {
    let produtosAPI = await listarProdutos()
    let sectionProdutos = document.querySelector('#produtos')
    let cardProdutos = produtosAPI.map((produto) => {
        return /*html*/ `<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${produto.thumbnail}"/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">${produto.title}</h2>
    <div class="card-actions justify-end">
       <sup class="text-sm">R$</sup><span class="text-xl">${produto.price}</span>
    </div>
  </div>
</div>`

    })
    cardProdutos.forEach((produto) => {
        sectionProdutos.innerHTML += produto
    });
}

init()