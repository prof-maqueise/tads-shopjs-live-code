export async function buscarTodosProdutos() {
    let response = await fetch('https://dummyjson.com/products/?delay=3000')
    let dados = await response.json()
    return dados.products
}