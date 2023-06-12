const fetchPedidos = () => {
    return fetch('https://fakestoreapi.com/carts')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  export default fetchPedidos;
  