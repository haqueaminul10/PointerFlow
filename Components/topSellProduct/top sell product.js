const products = [
  {
    id: 1,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 2,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 3,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 4,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 5,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 6,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 7,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
  {
    id: 8,
    category: 'Moisturizers',
    title: 'Detox Charcoal Mask',
    price: '$32',
    image: '../../assets/Frame 41.png',
  },
];

function renderProducts(products) {
  const productContainer = document.getElementById('product-container');

  products.forEach((product) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.className = 'carousel-image';

    const title = document.createElement('p');
    title.textContent = product.category;
    title.className = 'product-title';

    const description = document.createElement('p');
    description.textContent = product.title;
    description.className = 'product-des';

    const price = document.createElement('p');
    price.textContent = product.price;
    price.className = 'product-price';

    carouselItem.appendChild(img);
    carouselItem.appendChild(title);
    carouselItem.appendChild(description);
    carouselItem.appendChild(price);

    productContainer.appendChild(carouselItem);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderProducts(products);
});
