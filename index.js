async function loadComponent(id, filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }

    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (err) {
    console.error('Error loading component:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('hero', './Components/hero/hero.html');
  loadComponent(
    'product-category',
    './Components/product category/productCategory.html'
  );
  loadComponent('ourStory', './Components/ourStory/ourStory.html');
  loadComponent(
    'why-we-choose',
    './Components/why-we-chose/why-we-choose.html'
  );
});
