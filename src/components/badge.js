export function CriarBadge(tags) {
   let badges =  tags.map((tag)=>{
        return `<div class="badge badge-soft badge-primary">${tag}</div>`
    })
    return badges.join('')
}