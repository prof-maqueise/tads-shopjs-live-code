import { CriarCard } from './components/card'
import  * as api from './services/api'
import './style.css'
import '@phosphor-icons/web/regular'

async function init() {
    let produtosAPI = await api.buscarTodosProdutos()
    let sectionProdutos = document.querySelector('#produtos')
    let cardProdutos = produtosAPI.map((produto) => {
        return  CriarCard(produto)
    })
    cardProdutos.forEach((produto) => {
        sectionProdutos.innerHTML += produto
    });
}

init()