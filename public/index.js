
console.log('console log desde el navegador')

const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')

const button = document.querySelector('button')

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