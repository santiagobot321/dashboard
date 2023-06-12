const fetchProducts = () => {
    return fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(datos => {
        return datos;
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  export default fetchProducts;
  