export  function CriarCard(produto){
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
}