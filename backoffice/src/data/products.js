const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos)
    })

    .catch(err => {
        console.log(err)
    })
}

export default fetchProducts

