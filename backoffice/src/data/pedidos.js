const fetchPedidos = () => {
    fetch('https://fakestoreapi.com/carts')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.log(error)
    })
}

export default fetchPedidos