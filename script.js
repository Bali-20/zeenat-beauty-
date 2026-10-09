const WHATSAPP_NUMBER = "923262559374";

const products = [
  {
    id: "anti-melasma-gel",
    name: "Anti-Melasma Gel",
    price: 1920,
    compareAt: 2400,
    category: "treatment",
    tag: "Treatment",
    image: "files/anti-mlasma gel price 1920.jpeg",
  },
  {
    id: "apex-perfume",
    name: "Apex Perfume",
    price: 2784,
    category: "fragrance",
    tag: "Fragrance",
    image: "files/apex perpome   price 2784.jpeg",
  },
  {
    id: "beard-growth-serum",
    name: "Beard Growth Serum",
    price: 1800,
    compareAt: 2250,
    category: "serum",
    tag: "Serum",
    image: "files/beard growthb serum price 1800.jpeg",
  },
  {
    id: "bloom-love-perfume",
    name: "Bloom Love Perfume",
    price: 2784,
    category: "fragrance",
    tag: "Fragrance",
    image: "files/bloom love      price 2784.jpeg",
  },
  {
    id: "charcoal-mask",
    name: "Charcoal Mask",
    price: 960,
    category: "treatment",
    tag: "Treatment",
    image: "files/charcaol mask         price 960.jpeg",
  },
  {
    id: "day-cream",
    name: "Day Cream",
    price: 1175,
    category: "treatment",
    tag: "Treatment",
    image: "files/day cream         price 1175.jpeg",
  },
  {
    id: "glass-skin-serum",
    name: "Glass Skin Serum",
    price: 1284,
    compareAt: 1600,
    category: "serum",
    tag: "Serum",
    image: "files/glass skin price serum  price 1284.jpeg",
  },
  {
    id: "glow-skin-serum",
    name: "Glow Skin Serum",
    price: 1284,
    compareAt: 1600,
    category: "serum",
    tag: "Serum",
    image: "files/glow skin serum       price 1284.jpeg",
  },
  {
    id: "glutathione-glow-face-wash",
    name: "Glutathione Glow Face Wash",
    price: 804,
    compareAt: 1000,
    category: "face-wash",
    tag: "Face Wash",
    image: "files/glutathione glow face wash    price 804.jpeg",
  },
  {
    id: "gold-hair-serum",
    name: "Gold Hair Serum",
    price: 1800,
    category: "hair-care",
    tag: "Hair Care",
    image: "files/gold hair serum    price 1800.jpeg",
  },
  {
    id: "gold-peel-off-mask",
    name: "Gold Peel-Off Mask",
    price: 1104,
    category: "treatment",
    tag: "Treatment",
    image: "files/gold prrl of mask            price 1104.jpeg",
  },
  {
    id: "gold-instant-facial",
    name: "Gold Instant Facial",
    price: 1428,
    category: "treatment",
    tag: "Treatment",
    image: "files/gold urgent facial        price 1428 .jpeg",
  },
  {
    id: "hair-repair-shampoo",
    name: "Hair Repair Shampoo",
    price: 1350,
    category: "hair-care",
    tag: "Hair Care",
    image: "files/hair repair shampo        price 1350 .jpeg",
  },
  {
    id: "hand-and-foot-cream",
    name: "Hand & Foot Cream",
    price: 1350,
    category: "body-care",
    tag: "Body Care",
    image: "files/hand 7 foot creame     price 1350.jpeg",
  },
  {
    id: "lip-scrub",
    name: "Lip Scrub",
    price: 312,
    category: "scrub",
    tag: "Scrub",
    image: "files/lip scrub   price 312.jpeg",
  },
  {
    id: "miracle-aloe-face-mask",
    name: "Miracle Face Mask with Aloe Vera",
    price: 1560,
    category: "treatment",
    tag: "Treatment",
    image: "files/miracle face mask with aleo vera jusice    price 1560.jpeg",
  },
  {
    id: "mud-kojic-acid-powder",
    name: "Mud with Kojic Acid Powder",
    price: 552,
    category: "treatment",
    tag: "Treatment",
    image: "files/mud with kojic acid powder            price 552.jpeg",
  },
  {
    id: "natural-growth-hair-oil",
    name: "Natural Growth Hair Oil",
    price: 1092,
    category: "hair-care",
    tag: "Hair Care",
    image: "files/natural growth hair oli       price  1092.jpeg",
  },
  {
    id: "natural-growth-hair-shampoo",
    name: "Natural Growth Hair Shampoo",
    price: 1092,
    category: "hair-care",
    tag: "Hair Care",
    image: "files/natural growth hair shampo           price 1092.jpeg",
  },
  {
    id: "niacinamide-face-serum",
    name: "Niacinamide Face Serum",
    price: 1284,
    compareAt: 1600,
    category: "serum",
    tag: "Serum",
    image: "files/niacinamide face serum price 1284.jpeg",
  },
  {
    id: "peach-scrub",
    name: "Peach Scrub",
    price: 1350,
    compareAt: 1680,
    category: "scrub",
    tag: "Scrub",
    image: "files/peach scrub  price 1350.jpeg",
  },
  {
    id: "rose-face-wash",
    name: "Rose Face Wash",
    price: 980,
    category: "face-wash",
    tag: "Face Wash",
    image: "files/roce face wash     price 980 .jpeg",
  },
  {
    id: "rose-gel",
    name: "Rose Gel",
    price: 1080,
    category: "treatment",
    tag: "Treatment",
    image: "files/roce gell   price 1080 .jpeg",
  },
  {
    id: "salicylic-anti-acne-face-wash",
    name: "Salicylic Anti-Acne Face Wash",
    price: 804,
    category: "face-wash",
    tag: "Face Wash",
    image: "files/salicylic  anti acne face wash peice 804.jpeg",
  },
  {
    id: "salicylic-anti-acne-serum",
    name: "Salicylic Anti-Acne Serum",
    price: 1284,
    category: "serum",
    tag: "Serum",
    image: "files/salicylic anti acne serum  price 1284.jpeg",
  },
  {
    id: "star-beauty-soap-and-cream",
    name: "Star Beauty Soap & Cream Set",
    price: 348,
    category: "body-care",
    tag: "Body Care",
    image: "files/star beauty soap & star beauty cream             price 348.jpeg",
  },
  {
    id: "strawberry-scrub",
    name: "Strawberry Scrub",
    price: 1080,
    compareAt: 1350,
    category: "scrub",
    tag: "Scrub",
    image: "files/straberry scrub price 1080.jpeg",
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Serum",
    price: 1284,
    category: "serum",
    tag: "Serum",
    image: "files/vitam c serum  price 1284.jpeg",
  },
  {
    id: "vitamin-c-face-wash",
    name: "Vitamin C Face Wash",
    price: 804,
    compareAt: 1000,
    category: "face-wash",
    tag: "Face Wash",
    image: "files/VITAMIN C face wash                      pice  804.jpeg",
  },
  {
    id: "zardani-instant-facial",
    name: "Zardani Instant Facial",
    price: 1350,
    category: "treatment",
    tag: "Treatment",
    image: "files/zadrani urgent facil            price 1350.jpeg",
  },
  {
    id: "vempra-empyra-perfume",
    name: "Vempra & Empyra Perfume (100 ml)",
    price: null,
    category: "fragrance",
    tag: "Fragrance",
    image: "files/vempra .jpeg",
  },
  {
    id: "talbina",
    name: "Talbina (200 g)",
    price: null,
    category: "wellness",
    tag: "Wellness",
    image: "files/talbina.jpeg",
  },
];

const productGrid = document.querySelector("#productGrid");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector(".cart-count");
const checkoutButton = document.querySelector("#checkoutButton");
const customerName = document.querySelector("#customerName");
const customerAddress = document.querySelector("#customerAddress");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

const cart = new Map();

const formatPrice = (price) =>
  price == null ? "Price on request" : `Rs. ${price.toLocaleString("en-PK")}`;

function formatOrderTotal(items) {
  const total = items.reduce((sum, product) => sum + (product.price || 0) * product.qty, 0);
  const hasUnpricedItems = items.some((product) => product.price == null);
  if (hasUnpricedItems && total === 0) return "Price confirmed on WhatsApp";
  return hasUnpricedItems ? `${formatPrice(total)} + price on request` : formatPrice(total);
}

function renderProducts(filter = "all") {
  const visibleProducts =
    filter === "all" ? products : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.compareAt ? '<span class="sale-badge">Sale</span>' : ""}
          </div>
          <div class="product-info">
            <span class="product-tag">${product.tag}</span>
            <h3>${product.name}</h3>
            <div class="rating" aria-label="Five star rating">5.0 rating</div>
            <div class="price-row">
              <strong>${formatPrice(product.price)}</strong>
              ${product.compareAt ? `<del>${formatPrice(product.compareAt)}</del>` : ""}
            </div>
            <div class="card-actions">
              <button class="button primary" type="button" data-add="${product.id}">Add to Cart</button>
              <button class="button ghost" type="button" data-buy="${product.id}">Buy Now</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function openCart() {
  document.body.classList.add("cart-open");
  document.querySelector(".cart-drawer").setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  document.querySelector(".cart-drawer").setAttribute("aria-hidden", "true");
}

function addToCart(id) {
  const current = cart.get(id) || 0;
  cart.set(id, current + 1);
  renderCart();
}

function changeQty(id, amount) {
  const next = (cart.get(id) || 0) + amount;
  if (next <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, next);
  }
  renderCart();
}

function getCartProducts() {
  return [...cart.entries()]
    .map(([id, qty]) => {
      const product = products.find((item) => item.id === id);
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);
}

function renderCart() {
  const selectedProducts = getCartProducts();
  const itemCount = selectedProducts.reduce((sum, product) => sum + product.qty, 0);
  cartCount.textContent = itemCount;
  cartTotal.textContent = formatOrderTotal(selectedProducts);

  if (!selectedProducts.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    return;
  }

  cartItems.innerHTML = selectedProducts
    .map(
      (product) => `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)} x ${product.qty}</p>
            <div class="quantity-row">
              <button type="button" data-dec="${product.id}" aria-label="Decrease ${product.name} quantity">-</button>
              <span>${product.qty}</span>
              <button type="button" data-inc="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
              <button type="button" data-remove="${product.id}">Remove</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function buildWhatsappUrl(items) {
  const name = customerName.value.trim();
  const address = customerAddress.value.trim();
  const lines = [
    "Assalam o Alaikum, I want to order from Zeenat Beauty:",
    "",
    ...items.map(
      (product, index) =>
        `${index + 1}. ${product.name} - Qty ${product.qty} - ${formatPrice(product.price == null ? null : product.price * product.qty)}`,
    ),
    "",
    `Total: ${formatOrderTotal(items)}`,
    name ? `Name: ${name}` : "Name:",
    address ? `City / Address: ${address}` : "City / Address:",
  ];

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function checkoutCart() {
  const items = getCartProducts();
  if (!items.length) {
    openCart();
    return;
  }
  window.open(buildWhatsappUrl(items), "_blank", "noopener");
}

function buyNow(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  window.open(buildWhatsappUrl([{ ...product, qty: 1 }]), "_blank", "noopener");
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const buyButton = event.target.closest("[data-buy]");
  const openButton = event.target.closest("[data-open-cart]");
  const closeButton = event.target.closest("[data-close-cart]");
  const filterButton = event.target.closest("[data-filter]");
  const incButton = event.target.closest("[data-inc]");
  const decButton = event.target.closest("[data-dec]");
  const removeButton = event.target.closest("[data-remove]");

  if (addButton) {
    addToCart(addButton.dataset.add);
    openCart();
  }

  if (buyButton) {
    buyNow(buyButton.dataset.buy);
  }

  if (openButton) {
    openCart();
  }

  if (closeButton) {
    closeCart();
  }

  if (filterButton) {
    document.querySelectorAll(".filter").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderProducts(filterButton.dataset.filter);
  }

  if (incButton) {
    changeQty(incButton.dataset.inc, 1);
  }

  if (decButton) {
    changeQty(decButton.dataset.dec, -1);
  }

  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }
});

checkoutButton.addEventListener("click", checkoutCart);

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

renderProducts();
renderCart();
