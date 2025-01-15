const menuItems = [
  { id: 1, label: 'About', route: '/about' },
  { id: 2, label: 'Product', route: '/product' },
  { id: 3, label: 'Contact', route: '/contact' },
  { id: 4, label: 'Skincare Blog', route: '/blog' },
];

const navUl = document.getElementById('nav-ul');
menuItems.forEach((item) => {
  const li = document.createElement('li');
  li.className = 'nav-li';

  const a = document.createElement('a');
  a.href = item.route;
  a.textContent = item.label;
  a.className = 'nav-a';

  li.appendChild(a);

  if (item.label === 'Product') {
    const img = document.createElement('img');
    img.src = '../assets/Vector.png';
    img.alt = '';
    img.className = 'vector-set';

    const div = document.createElement('div');
    div.appendChild(img);

    li.prepend(div);
  }

  navUl.appendChild(li);
});
