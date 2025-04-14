import { CriarCard } from './components/card'
import  * as api from './services/api'
import './style.css'
import '@phosphor-icons/web/regular'

let sectionProdutos = document.querySelector('#produtos')
let selectCategorias = document.querySelector('#selectCategorias')
async function init() {
    let produtosAPI = await api.buscarTodosProdutos()
    let categoriasAPI = await api.buscarTodasCategorias()
    let cardProdutos = produtosAPI.map((produto) => {
        return  CriarCard(produto)
    })
    cardProdutos.forEach((produto) => {
        sectionProdutos.innerHTML += produto
    });

    let optionsCategorias = categoriasAPI.map((categoria)=>{
        return `<option value="${categoria.slug}">${categoria.name}</option>`
    })
    optionsCategorias.forEach((option)=>{
        selectCategorias.innerHTML+= option
    })

}

init()