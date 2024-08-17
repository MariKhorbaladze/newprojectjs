fetch('https://fakestoreapi.com/products?limit=15')
  .then(res => res.json())
  .then(products => {
    const cardContainer = document.getElementById('cardContainer');

    cardContainer.innerHTML = '';

    products.forEach(product => {
      const cardLink = document.createElement('a');
      cardLink.href = `product.html?id=${product.id}`; 
      cardLink.className = 'card-link';

      
      const cardElement = document.createElement('div');
      cardElement.className = 'card';

      const imgElement = document.createElement('img');
      imgElement.src = product.image;
      imgElement.alt = product.title;
      imgElement.className = 'product-image';

      const titleElement = document.createElement('h3');
      titleElement.textContent = product.title;

      const priceElement = document.createElement('p');
      priceElement.textContent = `$${product.price}`;

      cardElement.appendChild(imgElement);
      cardElement.appendChild(titleElement);
      cardElement.appendChild(priceElement);

      cardLink.appendChild(cardElement);
      cardContainer.appendChild(cardLink);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
