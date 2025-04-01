import './style.css'
import '@phosphor-icons/web/regular'
async function listarProdutos() {
    let response = await fetch('https://dummyjson.com/products')
    let dados = await response.json()
    return dados.products
}

async function init() {
    let produtosAPI = await listarProdutos()
    let ul = document.querySelector('#produtos')
    let liProdutos = produtosAPI.map((produto) => {
        return `<li> 
                  ${produto.title}
                  <img src="${produto.thumbnail}"/>
                </li>`
    })
    liProdutos.forEach((produto) => {
        ul.innerHTML += produto
    });
}

init()