const itemsArray = [
  {
    title: 'How to Build a Skincare Routine',
    description: 'Step-by-step guide to creating the perfect skincare regimen.',
    buttonText: 'Discover Now',
    image: '../../assets/night_cream_3 1.png',
  },
  {
    title: 'Skincare Tips for Glowing Skin',
    description: 'Simple, effective tips for achieving a radiant complexion.',
    buttonText: 'Discover Now',
    image: '../../assets/night_cream_3 1.png',
  },
  {
    title: 'The Importance of Sunscreen',
    description: 'Learn why sunscreen is essential for skin protection.',
    buttonText: 'Discover Now',
    image: '../../assets/night_cream_3 1.png',
  },
  {
    title: 'Best Products for Sensitive Skin',
    description: 'Find out the best products for sensitive skin care.',
    buttonText: 'Discover Now',
    image: '../../assets/night_cream_3 1.png',
  },
];

const protectScreen = document.querySelector('.protect-screen');

itemsArray.forEach((item) => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('protect-screen-item');
  itemDiv.innerHTML = `
        
        <div class="content">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <button>${item.buttonText}</button>
        </div>
        <img src="${item.image}" alt="${item.title}">
    `;
  protectScreen.appendChild(itemDiv);
});

const items = document.querySelectorAll('.protect-screen-item');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let index = 0;

function showItem(index) {
  protectScreen.style.transform = `translateX(-${index * (100 / 2)}%)`;
}

leftArrow.addEventListener('click', () => {
  index = index > 0 ? index - 1 : items.length - 2;
  showItem(index);
});

rightArrow.addEventListener('click', () => {
  index = index < items.length - 2 ? index + 1 : 0;
  showItem(index);
});
