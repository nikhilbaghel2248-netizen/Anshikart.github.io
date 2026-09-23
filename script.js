/**
 * ==========================================================================
 * ANSHIKART - ATELIER D'ÉLECTRONIQUE
 * Interactive Engine: Dynamic Vault, Cart Drawer, Currency, & Modals
 * ==========================================================================
 */

// --- 1. PRODUCT ARCHIVE (THE VAULT COLLECTION) ---
const PRODUCTS = [
  {
    id: 1,
    name: "Anshikart Apex Horizon Monolith",
    category: "smart-living",
    categoryLabel: "Sanctuary Automation",
    priceUSD: 18900,
    edition: "6/50 Allocated",
    badge: "HAUTE SIGNATURE",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=85",
    description: "Laser-sintered Grade-5 titanium domestic brain with integrated quantum neural co-processor, ambient air ionizer, and zero-latency architectural lighting sync.",
    specs: ["Grade 5 Titanium", "140 TOPS Neural Core", "Atmospheric Ionizer", "Kyoto Hand-Polish"],
    detailedSpecs: {
      "Enclosure Material": "Cold-Forged Titanium & Obsidian Glass",
      "Computing Cluster": "Anshikart Neural Bionic Core (140 TOPS)",
      "Wireless Protocol": "Air-Gapped Quantum Mesh & Matter 3.0",
      "Power Architecture": "Supercapacitor Buffer with 150W Fast Induction",
      "Dimensions / Mass": "380mm × 210mm • 8.4 kg Solid Monocoque"
    }
  },
  {
    id: 2,
    name: "AuraSphere Levitating Resonator",
    category: "neural-acoustics",
    categoryLabel: "Neural Acoustics",
    priceUSD: 12500,
    edition: "Bespoke Vault Order",
    badge: "ZERO RESONANCE",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=85",
    description: "Magnetically levitated spatial audio orb with 99.9% pure beryllium transducer array, eliminating 100% of physical mechanical surface resonance.",
    specs: ["Beryllium Transducers", "4.8 Tesla Levitation", "120dB Dynamic Range", "Lossless WiSA 96/24"],
    detailedSpecs: {
      "Levitation Array": "Active Electromagnetic Quad-Coil (4.8T)",
      "Transducer Material": "99.9% Vapour-Deposited Beryllium Dome",
      "Amplification": "Dual Class-AD Monoblock 600W RMS",
      "Frequency Response": "18Hz - 42,000Hz (± 0.5dB)",
      "Battery Autonomy": "48 Hours Continuous Levitation & Playback"
    }
  },
  {
    id: 3,
    name: "Valkyrie Cybernetic Chrono-Ring",
    category: "wearables",
    categoryLabel: "Cybernetic Wearables",
    priceUSD: 4950,
    edition: "Edition of 250",
    badge: "BIOMETRIC FIDO2",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85",
    description: "Sub-dermal photoplethysmography sensor ring crafted in black ceramic and 18K molten gold, acting as an unhackable hardware key for yacht, vault, and villa.",
    specs: ["Black Zirconia Ceramic", "18K Gold Inlay", "FIDO2 Multi-Sig Key", "100m Hydro-Sealed"],
    detailedSpecs: {
      "Chassis Composition": "Diamond-Polished Zirconia & Solid 18K Gold",
      "Cryptographic Engine": "EAL6+ Secure Element with Private Key Storage",
      "Sensory Array": "Dual-Wavelength PPG, SpO2, HRV & Skin Temp",
      "Water Resistance": "10 ATM (100 Meters Saturation Tested)",
      "Power Reserve": "14-Day Micro-Solid-State Battery"
    }
  },
  {
    id: 4,
    name: "Kurogane Obsidian Smart Workstation",
    category: "smart-living",
    categoryLabel: "Sanctuary Living",
    priceUSD: 24500,
    edition: "Only 4 Created Annually",
    badge: "ARCHITECTURAL PIECE",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=85",
    description: "Monolithic volcanic obsidian desk surface featuring invisible full-width 200W Qi wireless induction fields, hidden haptic macro controls, and integrated cooling channels.",
    specs: ["Natural Volcanic Obsidian", "Full Surface 200W Induction", "Haptic Concealed HUD", "Swiss Motorized Lift"],
    detailedSpecs: {
      "Surface Stone": "Natural Single-Slab Obsidian from Iceland",
      "Induction Array": "32 Adaptive Gallium-Nitride Charging Nodes",
      "Interface": "Micro-Perforated OLED Display Through Stone",
      "Hydraulic Columns": "Whisper-Quiet Dual Telescopic Titanium Pillars",
      "Load Bearing": "350 kg Dynamic Load Capacity"
    }
  },
  {
    id: 5,
    name: "Aetherius Planar Audio Rig",
    category: "neural-acoustics",
    categoryLabel: "Neural Acoustics",
    priceUSD: 8400,
    edition: "Numbered Collector Series",
    badge: "FLAGSHIP AUDIOPHILE",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    description: "Open-back planar magnetic headphones with cryogenically treated ultra-thin nano-composite diaphragm and Tuscan vegetable-tanned perforated lambskin.",
    specs: ["106mm Planar Diaphragm", "Cryo-Treated Silver Wiring", "Handcrafted Alcantara", "0.0005% THD"],
    detailedSpecs: {
      "Diaphragm Size": "106mm Ultra-Thin (1.2 Micron) Planar Film",
      "Magnet Topology": "Double-Sided Symmetric Neodymium N52 Array",
      "Cabling": "8-Core Monocrystalline Silver with 4.4mm Balanced Plug",
      "Ear Cushions": "Memory Foam Wrapped in Hand-Selected Italian Lambskin",
      "Impedance": "32 Ohms @ 1kHz (Drivable from DAP or Tube Amp)"
    }
  },
  {
    id: 6,
    name: "Solace Sensory Circadian Pod",
    category: "smart-living",
    categoryLabel: "Sanctuary Living",
    priceUSD: 9200,
    edition: "8 Units Remaining",
    badge: "RESTORATIVE SCIENCE",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85",
    description: "Sculptural bedside circadian light sculptor that synthesizes sunset melatonin wavelengths, emits binaural theta frequencies, and neutralizes RF radiation fields.",
    specs: ["Full Spectrum Circadian LED", "Theta Binaural Audio", "Faraday EMP Shroud", "Murano Smoked Glass"],
    detailedSpecs: {
      "Lighting Spectrum": "Zero Blue-Light 1800K - 6500K True CRI 99.4",
      "Acoustic Chamber": "Integrated Down-Firing Ceramic Resonator",
      "Shielding": "Electromagnetic Neutralizing Base Field",
      "Controls": "Contactless Proximity & Gesture Recognition",
      "Aromatherapeutic Diffuser": "Cold-Air Ultrasonic Ultrasonic Essential Oil Chamber"
    }
  },
  {
    id: 7,
    name: "Phantom Cyber-Visor AR Monocle",
    category: "wearables",
    categoryLabel: "Cybernetic Wearables",
    priceUSD: 14200,
    edition: "VIP Reserve Only",
    badge: "SPATIAL COMPUTING",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=85",
    description: "Dual 4K Micro-OLED spatial waveguides enclosed in lightweight 3D-printed titanium frames with electrochromic privacy dimming for private telemetry overlays.",
    specs: ["Dual 4K Micro-OLED", "5,000 Nits Brightness", "Electrochromic Lenses", "Weight: Only 68 grams"],
    detailedSpecs: {
      "Optical Engine": "Diffractive Surface Relief Waveguides (55° FOV)",
      "Displays": "0.71-inch Micro-OLED (3840 × 2160 pixels per eye)",
      "Battery Module": "Magnetic Neckband Power Unit (8 Hours Continuous)",
      "Connectivity": "Wi-Fi 7 + Ultra-Wideband (UWB) Sub-millimeter Tracking",
      "Prescription Support": "Custom Ground Zeiss Diamond-Coated Inserts"
    }
  },
  {
    id: 8,
    name: "Aegis Monolithic Cold Vault",
    category: "vault",
    categoryLabel: "Sovereign Security",
    priceUSD: 7600,
    edition: "Serialized Foundry Master",
    badge: "MILITARY EMP SHIELD",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=85",
    description: "Solid milled billet titanium hardware vault with 64TB holographic optical crystal storage, biometric capillary scan, and automated thermal self-quarantine.",
    specs: ["64TB Holographic Storage", "Capillary Biometrics", "EMP Solid Shielding", "1,200°C Fire Proof"],
    detailedSpecs: {
      "Foundry Casting": "Solid Block Grade-5 Titanium (Milled 18-Hour CNC)",
      "Storage Medium": "Nanostructured Quartz 5D Holographic Glass (Indestructible)",
      "Biometrics": "Sub-Surface Finger Blood-Flow & Iris Recognition",
      "Tamper Response": "Instant Flash Depolarization Thermal Fuse",
      "Interface": "Optical Isolated Air-Gapped Laser Transceiver"
    }
  }
];

// --- 2. CURRENCY CONFIGURATION ---
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  AED: { symbol: "AED ", rate: 3.67 },
  CHF: { symbol: "CHF ", rate: 0.88 }
};

let currentCurrency = "USD";

// --- 3. STATE MANAGEMENT ---
let cart = [];
let currentFilter = "all";
let bespokeMonogramActive = false;
const MONOGRAM_FEE_USD = 450;

// --- 4. DOM REFERENCES ---
const productsGrid = document.getElementById("productsGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartTrigger = document.getElementById("cartTrigger");
const cartClose = document.getElementById("cartClose");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const vaultItemsSub = document.getElementById("vaultItemsSub");
const monogramOption = document.getElementById("monogramOption");
const monogramPriceDisplay = document.getElementById("monogramPriceDisplay");

// Currency Elements
const currencyPicker = document.getElementById("currencyPicker");
const currencyBtn = document.getElementById("currencyBtn");
const currencyDropdown = document.getElementById("currencyDropdown");

// Modals
const quickViewBackdrop = document.getElementById("quickViewBackdrop");
const qvContent = document.getElementById("qvContent");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const checkoutFinalVal = document.getElementById("checkoutFinalVal");
const conciergeBackdrop = document.getElementById("conciergeBackdrop");

// Search Drawer
const searchToggle = document.getElementById("searchToggle");
const searchDrawer = document.getElementById("searchDrawer");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const searchResultsGrid = document.getElementById("searchResultsGrid");

// Mobile Menu
const mobileToggle = document.getElementById("mobileToggle");
const desktopNav = document.getElementById("desktopNav");

// Cursor Follower
const cursorGlow = document.getElementById("cursorGlow");
const toastHub = document.getElementById("toastHub");

// --- 5. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  updateCurrencyDisplay();
  setupSmoothCursor();
});

// --- 6. CURRENCY CONVERSION HELPERS ---
function formatPrice(usdAmount) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(usdAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function updateCurrencyDisplay() {
  const curr = CURRENCIES[currentCurrency];
  currencyBtn.querySelector(".curr-symbol").textContent = curr.symbol.trim();
  currencyBtn.querySelector(".curr-code").textContent = currentCurrency;

  // Update flagship price in hero
  const flagshipPriceEl = document.querySelector(".flagship-price");
  if (flagshipPriceEl) {
    const rawUSD = parseInt(flagshipPriceEl.getAttribute("data-usd"), 10) || 18900;
    flagshipPriceEl.textContent = formatPrice(rawUSD);
  }

  // Update monogram fee display
  if (monogramPriceDisplay) {
    monogramPriceDisplay.textContent = `+${formatPrice(MONOGRAM_FEE_USD)}`;
  }

  // Re-render product catalog and cart
  renderProducts();
  renderCart();
}

// --- 7. PRODUCT CATALOG RENDERING & FILTERING ---
function renderProducts() {
  if (!productsGrid) return;

  const filtered = currentFilter === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === currentFilter);

  productsGrid.innerHTML = filtered.map(product => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-media-wrap">
        <span class="product-badge-top">
          <i class="fa-solid fa-cube"></i> ${product.badge}
        </span>
        <span class="product-edition-tag">${product.edition}</span>
        <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
        
        <div class="card-overlay-actions">
          <button class="btn-card-quickview" onclick="openQuickView(${product.id})">
            <i class="fa-solid fa-eye"></i> INSPECT BLUEPRINT
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <span class="product-category-sub">${product.categoryLabel}</span>
        <h3 class="product-card-title">${product.name}</h3>
        <p class="product-card-desc">${product.description}</p>

        <div class="product-specs-pills">
          ${product.specs.map(spec => `<span class="spec-pill">${spec}</span>`).join('')}
        </div>

        <div class="product-card-bottom">
          <div class="product-price-box">
            <span class="price-label">Acquisition Price</span>
            <span class="price-val">${formatPrice(product.priceUSD)}</span>
          </div>

          <button class="btn-card-acquire" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-vault"></i>
            <span>ACQUIRE</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterVault(categoryKey) {
  currentFilter = categoryKey;
  
  // Update Filter Tabs active class
  document.querySelectorAll(".filter-tab").forEach(tab => {
    if (tab.getAttribute("data-filter") === categoryKey) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderProducts();
}

// --- 8. CART MANAGEMENT (THE PRIVATE VAULT) ---
function addToCart(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(ci => ci.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartState();
  openCart();
  showToast("Masterpiece Secured", `${item.name} transferred into your Private Vault.`);
}

function removeFromCart(productId) {
  cart = cart.filter(ci => ci.id !== productId);
  updateCartState();
}

function updateQty(productId, delta) {
  const item = cart.find(ci => ci.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCartState();
}

function toggleMonogramOption() {
  bespokeMonogramActive = monogramOption.checked;
  renderCartTotals();
}

function updateCartState() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCount;
  vaultItemsSub.textContent = `${totalCount} Acquisition${totalCount === 1 ? '' : 's'} Selected`;
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-box-open"></i>
        <h4>Your Vault Is Empty</h4>
        <p>You have not secured any architectural or neural gadgets yet.</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-price">${formatPrice(item.priceUSD)} each</span>
          <div class="cart-qty-ctrls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Release Allocation">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }

  renderCartTotals();
}

function renderCartTotals() {
  const subtotalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * item.qty), 0);
  const monogramUSD = bespokeMonogramActive && cart.length > 0 ? MONOGRAM_FEE_USD : 0;
  const totalUSD = subtotalUSD + monogramUSD;

  cartSubtotal.textContent = formatPrice(subtotalUSD);
  cartTotal.textContent = formatPrice(totalUSD);
  if (checkoutFinalVal) {
    checkoutFinalVal.textContent = formatPrice(totalUSD);
  }
}

function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// --- 9. QUICK VIEW MODAL ---
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const specRows = Object.entries(product.detailedSpecs || {}).map(([key, val]) => `
    <div class="qv-spec-row">
      <span class="qv-spec-key">${key}</span>
      <span class="qv-spec-val">${val}</span>
    </div>
  `).join('');

  qvContent.innerHTML = `
    <div class="qv-media">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="qv-details">
      <span class="qv-cat">${product.categoryLabel} • ${product.edition}</span>
      <h2 class="qv-title">${product.name}</h2>
      <div class="qv-price">${formatPrice(product.priceUSD)}</div>
      <p class="qv-desc">${product.description}</p>
      
      <div class="qv-specs-table">
        ${specRows}
      </div>

      <button class="btn btn-luxury-primary" onclick="addToCart(${product.id}); closeQuickView();">
        <span class="btn-shine"></span>
        <i class="fa-solid fa-vault"></i>
        <span>ACQUIRE TO PRIVATE VAULT</span>
      </button>
    </div>
  `;

  quickViewBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  quickViewBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// --- 10. PRIVATE CHECKOUT & CONCIERGE MODALS ---
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Vault Empty", "Please select a creation before proceeding to settlement.");
    return;
  }
  closeCart();
  renderCartTotals();
  checkoutBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  checkoutBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmission(event) {
  event.preventDefault();
  const name = document.getElementById("clientName").value;
  const destination = document.getElementById("deliveryDestination").value;

  closeCheckoutModal();
  cart = [];
  bespokeMonogramActive = false;
  if (monogramOption) monogramOption.checked = false;
  updateCartState();

  showToast("Dossier Transmitted", `Thank you, ${name}. White-Glove dispatch dossier dispatched to ${destination}. Direct concierge contact in progress.`);
}

function openConciergeModal() {
  conciergeBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeConciergeModal() {
  conciergeBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function handleAudienceSubmission(event) {
  event.preventDefault();
  const name = document.getElementById("audName").value;
  closeConciergeModal();
  showToast("Private Audience Reserved", `Your request for ${name} has been securely registered with the Chief Architect.`);
}

function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  showToast("Invitation Dispatched", `A discrete entrance key has been routed to ${emailInput.value}.`);
  emailInput.value = "";
}

// --- 11. LIVE INSTANT SEARCH DRAWER ---
function setupSearch() {
  if (!searchToggle || !searchDrawer || !searchInput) return;

  searchToggle.addEventListener("click", () => {
    searchDrawer.classList.toggle("open");
    if (searchDrawer.classList.contains("open")) {
      searchInput.focus();
    }
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchResultsGrid.innerHTML = "";
    searchInput.focus();
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchResultsGrid.innerHTML = "";
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.specs.some(s => s.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      searchResultsGrid.innerHTML = `
        <div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-dim); font-family: var(--font-mono); font-size: 0.85rem;">
          No bespoke creations matching "${query}". Contact Concierge for custom commissioning.
        </div>
      `;
      return;
    }

    searchResultsGrid.innerHTML = matches.map(m => `
      <div class="search-item-card" onclick="openQuickView(${m.id}); searchDrawer.classList.remove('open');">
        <img src="${m.image}" alt="${m.name}" class="search-thumb">
        <div class="search-item-info">
          <h5>${m.name}</h5>
          <span>${formatPrice(m.priceUSD)}</span>
        </div>
      </div>
    `).join('');
  });
}

// --- 12. TOAST SYSTEM ---
function showToast(title, message) {
  if (!toastHub) return;

  const toast = document.createElement("div");
  toast.className = "luxury-toast";
  toast.innerHTML = `
    <div class="toast-icon"><i class="fa-solid fa-gem"></i></div>
    <div class="toast-body">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  toastHub.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideToast 0.4s ease reverse forwards";
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

// --- 13. SMOOTH CURSOR FOLLOWER ---
function setupSmoothCursor() {
  if (!cursorGlow) return;
  if (window.innerWidth <= 768) return; // skip on touch devices

  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// --- 14. EVENT LISTENERS SETUP ---
function setupEventListeners() {
  // Mobile Nav Toggle
  if (mobileToggle && desktopNav) {
    mobileToggle.addEventListener("click", () => {
      desktopNav.classList.toggle("mobile-active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        desktopNav.classList.remove("mobile-active");
      });
    });
  }

  // Cart Open/Close
  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  // Quick View Backdrop close
  if (quickViewBackdrop) {
    quickViewBackdrop.addEventListener("click", (e) => {
      if (e.target === quickViewBackdrop) closeQuickView();
    });
  }

  // Checkout Backdrop close
  if (checkoutBackdrop) {
    checkoutBackdrop.addEventListener("click", (e) => {
      if (e.target === checkoutBackdrop) closeCheckoutModal();
    });
  }

  // Concierge Backdrop close
  if (conciergeBackdrop) {
    conciergeBackdrop.addEventListener("click", (e) => {
      if (e.target === conciergeBackdrop) closeConciergeModal();
    });
  }

  // Book Concierge Buttons in UI
  const bookConciergeBtn = document.getElementById("bookConciergeBtn");
  if (bookConciergeBtn) bookConciergeBtn.addEventListener("click", openConciergeModal);
  
  const consultationBtn = document.getElementById("consultationBtn");
  if (consultationBtn) consultationBtn.addEventListener("click", openConciergeModal);

  // Quick Acquire button on hero flagship
  const quickAcquireBtn = document.querySelector(".btn-quick-acquire");
  if (quickAcquireBtn) {
    quickAcquireBtn.addEventListener("click", () => addToCart(1));
  }

  // Currency Dropdown Toggle
  if (currencyBtn && currencyDropdown) {
    currencyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currencyDropdown.classList.toggle("active");
    });

    document.querySelectorAll(".curr-opt").forEach(opt => {
      opt.addEventListener("click", (e) => {
        const selected = opt.getAttribute("data-curr");
        if (CURRENCIES[selected]) {
          currentCurrency = selected;
          document.querySelectorAll(".curr-opt").forEach(o => o.classList.remove("active"));
          opt.classList.add("active");
          currencyDropdown.classList.remove("active");
          updateCurrencyDisplay();
          showToast("Currency Recalibrated", `Valuations adjusted to ${selected}.`);
        }
      });
    });

    // Close currency dropdown when clicking elsewhere
    document.addEventListener("click", () => {
      currencyDropdown.classList.remove("active");
    });
  }

  // Category Filter Tab Clicks
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-filter");
      filterVault(cat);
    });
  });

  // Search Engine Setup
  setupSearch();
}
