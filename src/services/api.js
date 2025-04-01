export async function listarProdutos() {
    let response = await fetch('https://dummyjson.com/products')
    let dados = await response.json()
    return dados.products
}