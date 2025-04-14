export async function buscarTodosProdutos() {
    let response = await fetch('https://dummyjson.com/products/')
    let dados = await response.json()
    return dados.products
}
export async function buscarTodasCategorias() {
    let response = await fetch('https://dummyjson.com/products/categories')
    let categorias = await response.json()
    return categorias
}