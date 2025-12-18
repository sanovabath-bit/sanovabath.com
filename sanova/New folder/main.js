const params = new URLSearchParams(window.location.search);

const category = params.get("category");
const type = params.get("type");
const variant = params.get("variant");

const products = document.querySelectorAll(".product");
const title = document.getElementById("categoryTitle");

products.forEach(product => {
  const c = product.dataset.category;
  const t = product.dataset.type;
  const v = product.dataset.variant;

  const matchCategory = !category || c === category;
  const matchType = !type || t === type;
  const matchVariant = !variant || v === variant;

  product.style.display =
    matchCategory && matchType && matchVariant ? "block" : "none";
});

let heading = "Our Products";
if (category) heading = category.toUpperCase();
if (type) heading += " / " + type.replace("-", " ").toUpperCase();
if (variant) heading += " / " + variant.toUpperCase();

title.innerText = heading;
