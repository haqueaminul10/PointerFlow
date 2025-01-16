const whatPeopleSay = [
  {
    id: 1,
    image: '../../assets/Ellipse 39.png',
    star: '★★★★★',
    comment:
      'After using this serum for just a week, I noticed a significant improvement in my skin’s texture and radiance. As a dermatologist, I highly recommend it.',
    name: 'Rachel Nguyen',
    deg: 'Dermatologist',
  },
  {
    id: 2,
    image: '../../assets/Ellipse 39.png',
    star: '★★★★☆',
    comment:
      'This product is amazing! My skin feels hydrated and smooth. I’ll definitely keep using it.',
    name: 'James Parker',
    deg: 'Skin Care Enthusiast',
  },
  {
    id: 3,
    image: '../../assets/Ellipse 39.png',
    star: '★★★★★',
    comment:
      'I’ve tried so many serums, but this one is by far the best. Highly recommend for anyone looking for visible results.',
    name: 'Sophia Lee',
    deg: 'Beauty Blogger',
  },
];

const cardContainer = document.getElementById('section-9-card-container');

// Generate all cards as a single HTML string
const cardsHTML = whatPeopleSay
  .map(
    (person) => `
    <div class="section-9-card">
      <img src="${person.image}" alt="${person.name}">
      <div class="section-9-stars">${person.star}</div>
      <h3>${person.name}</h3>
      <p>${person.comment}</p>
      <div class="section-9-deg">${person.deg}</div>
    </div>
  `
  )
  .join(''); // Join all card HTML into a single string

// Set the container's innerHTML to the generated cards
cardContainer.innerHTML = cardsHTML;
