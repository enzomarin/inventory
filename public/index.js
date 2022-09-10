
console.log('console log desde el navegador')

const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')

const button = document.querySelector('button')
const pokeApiBaseUrl = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${pokeApiBaseUrl}/charmander`, {
    method: "GET",

}).then((res)=>{
    return res.json()
}).then((pokemon) =>{
    console.log({pokemon})

    const html = `
        <h3>${pokemon.name}</h3>
        <img src=${pokemon.sprites.front_default} alt="Imagen de: ${pokemon.name}">
        <span>id: #${pokemon.id}</span>
    `
    const div = document.createElement('div')
    div.classList.add('poke-card')
    div.innerHTML = html
    document.querySelector('body').appendChild(div)
}).catch()


button.addEventListener('click', (e) =>{
    //console.log({name: productName.value, price: productPrice.value})
    const name = productName.value
    const price = productPrice.value

    //realizamos una peticion al servidor con fetch
    fetch('/api/v1/products',{
        method: "POST", 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name,
            price
        }),
    })
})