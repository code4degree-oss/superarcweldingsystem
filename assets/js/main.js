/**
 * Super Arc Welding System — main.js
 * Homepage logic: navigation, featured products, machine selector,
 * testimonials, modals, quote forms, category cards.
 * Depends on PRODUCTS_DATA and CONSUMABLES_DATA from products-data.js.
 */

/* ================================================================
   1. NAVIGATION
   ================================================================ */
function initNavigation() {
  const toggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.querySelector(".site-header");

  // Hamburger toggle
  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    const closeBtn = document.getElementById("mobileNavClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    }

    // Close menu when any nav link is clicked
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // Smooth-scroll for anchor links with 80px offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // Add "scrolled" class to header on scroll
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load
  }
}

/* ================================================================
   2. FEATURED PRODUCTS
   ================================================================ */
function initFeaturedProducts() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;

  const featured = (window.PRODUCTS_DATA || []).filter((p) => p.featured);

  grid.innerHTML = featured
    .map(
      (product) => `
    <div class="product-card">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card-body">
        <span class="product-card-badge">${product.amperage} ${product.category.toUpperCase()}</span>
        <h3 class="product-card-title">${product.name}</h3>
        <ul class="product-card-specs">
          <li>${product.dutyCycle}</li>
          <li>${product.phase}</li>
          <li>${product.wireSize}</li>
        </ul>
        <button class="btn btn-primary product-card-btn" onclick="openQuoteModal('${product.name.replace(/'/g, "\\'")}')">Get Quote</button>
      </div>
    </div>`
    )
    .join("");
}

/* ================================================================
   3. MACHINE SELECTOR / CALCULATOR
   ================================================================ */
function initMachineSelector() {
  const metalSel = document.getElementById("calcMetal");
  const thickSel = document.getElementById("calcThickness");
  const workSel = document.getElementById("calcWorkload");

  if (!metalSel || !thickSel || !workSel) return;

  const resultModel = document.getElementById("calcResultModel");
  const resultAmps = document.getElementById("calcResultAmps");
  const resultWire = document.getElementById("calcResultWire");
  const resultGas = document.getElementById("calcResultGas");
  const resultDuty = document.getElementById("calcResultDuty");

  function recommend() {
    const metal = metalSel.value; // aluminium | stainless | mild
    const thickness = parseFloat(thickSel.value) || 0;
    const workload = workSel.value; // light | medium | heavy

    let model = "";
    let amps = "";
    let wire = "";
    let gas = "";
    let duty = "";

    if (metal === "aluminium") {
      // Aluminium → TIG
      model = "TIG 315 BP AC/DC";
      amps = "10 – 315A";
      wire = "1.6 / 2.4 mm Aluminium Filler";
      gas = "100% Argon";
      duty = "60% @ 315A";
    } else if (metal === "stainless" || metal === "ss") {
      if (thickness <= 2.5) {
        // Thin stainless → TIG/ARC
        model = "TIG/ARC 200";
        amps = "10 – 200A";
        wire = "1.6 mm SS Filler";
        gas = "100% Argon";
        duty = "60% @ 200A";
      } else {
        // Thick stainless → MIG
        model = "MIG/ARC 400 IJ";
        amps = "50 – 400A";
        wire = "0.8 / 1.0 mm SS Wire";
        gas = "Ar + CO₂ Mix";
        duty = "60% @ 400A";
      }
    } else {
      // Mild steel
      if (thickness >= 8 || workload === "heavy") {
        model = "MIG/ARC 400 IJ Heavy Duty";
        amps = "50 – 400A";
        wire = "1.0 / 1.2 mm MS Wire";
        gas = "CO₂ / Ar+CO₂ Mix";
        duty = "60% @ 400A";
      } else if (thickness >= 4 || workload === "medium") {
        model = "Smart Welder MIG 315L MAX";
        amps = "50 – 315A";
        wire = "0.8 / 1.0 mm MS Wire";
        gas = "CO₂ / Ar+CO₂ Mix";
        duty = "60% @ 315A";
      } else {
        // Light mild steel
        model = "ARC 200 G / MIG 315 Compact";
        amps = "20 – 315A";
        wire = "0.8 mm MS Wire";
        gas = "CO₂";
        duty = "60% @ 200A";
      }
    }

    if (resultModel) resultModel.textContent = model;
    if (resultAmps) resultAmps.textContent = amps;
    if (resultWire) resultWire.textContent = wire;
    if (resultGas) resultGas.textContent = gas;
    if (resultDuty) resultDuty.textContent = duty;
  }

  // Run on change and on page load
  metalSel.addEventListener("change", recommend);
  thickSel.addEventListener("change", recommend);
  workSel.addEventListener("change", recommend);
  recommend();
}

/* ================================================================
   4. TESTIMONIALS
   ================================================================ */
function initTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;

  const testimonials = [
    {
      name: "Rajesh Patil",
      company: "Balaji Fabricators, Bhosari",
      quote:
        "We have been using the MIG 400 IJ for over 2 years now. Rock-solid performance on heavy PEB fabrication. Their on-site service team arrives within hours.",
      rating: 5,
    },
    {
      name: "Sunil Jadhav",
      company: "Apex Auto Components, Chakan",
      quote:
        "The 315L MAX runs perfectly on our single-phase line. Excellent arc stability and the digital display makes setting current very easy.",
      rating: 5,
    },
    {
      name: "Prashant Deshmukh",
      company: "Shree Engineers, Talwade",
      quote:
        "Best after-sales service in Pune. When our wire feeder broke down during a critical order, they sent a technician the same day.",
      rating: 5,
    },
  ];

  grid.innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${"★".repeat(t.rating)}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <strong>${t.name}</strong>
        <span>${t.company}</span>
      </div>
    </div>`
    )
    .join("");
}

/* ================================================================
   5. MODALS
   ================================================================ */
function initModals() {
  // Close buttons inside modals
  document.querySelectorAll(".modal-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = btn.closest(".modal-overlay");
      if (overlay) overlay.classList.remove("active");
    });
  });

  // Clicking overlay backdrop (not content) closes modal
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

/* ================================================================
   6. OPEN QUOTE MODAL (global)
   ================================================================ */
window.openQuoteModal = function (productName) {
  const field = document.getElementById("modalProductField");
  const modal = document.getElementById("quoteModal");
  if (field) field.value = productName || "";
  if (modal) modal.classList.add("active");
};

/* ================================================================
   7. QUOTE / CONTACT FORMS → WhatsApp
   ================================================================ */
function initQuoteForms() {
  const PHONE = "919890143408";

  /**
   * Build a WhatsApp redirect from a form.
   * @param {HTMLFormElement} form
   * @param {string} prefix — optional prefix line
   */
  function handleFormSubmit(form, prefix) {
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const lines = [];
      if (prefix) lines.push(prefix);

      for (const [key, value] of data.entries()) {
        if (value.toString().trim()) {
          // Pretty-print the field name
          const label = key
            .replace(/([A-Z])/g, " $1")
            .replace(/[_-]/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase())
            .trim();
          lines.push(`${label}: ${value}`);
        }
      }

      const message = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${PHONE}?text=${message}`;

      alert("Thank you for your enquiry! Redirecting to WhatsApp…");
      window.open(url, "_blank");
      form.reset();

      // Close modal if inside one
      const overlay = form.closest(".modal-overlay");
      if (overlay) overlay.classList.remove("active");
    });
  }

  handleFormSubmit(
    document.getElementById("modalQuoteForm"),
    "New Quote Request from Website"
  );
  handleFormSubmit(
    document.getElementById("contactQuoteForm"),
    "Contact Enquiry from Website"
  );
  handleFormSubmit(
    document.getElementById("repairServiceForm"),
    "On-Site Repair / Service Request"
  );
}

/* ================================================================
   8. CATEGORY CARDS
   ================================================================ */
function initCategoryCards() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  // SVG icons (Lucide / Feather style, 24×24 stroke)
  const icons = {
    zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    target: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    battery: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>`,
    package: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  };

  const categories = [
    {
      id: "mig",
      title: "MIG / MAG Welders",
      desc: "300A – 500A Heavy Duty CO2 Welders",
      icon: "zap",
      count: 7,
    },
    {
      id: "tig",
      title: "TIG / Argon Welders",
      desc: "AC/DC Pulse for Aluminium & SS",
      icon: "target",
      count: 2,
    },
    {
      id: "arc",
      title: "ARC Inverter Welders",
      desc: "Portable MMA Stick Welders",
      icon: "battery",
      count: 1,
    },
    {
      id: "accessories",
      title: "Accessories & Spares",
      desc: "Torches, Feeders, Nozzles & Tips",
      icon: "package",
      count: 5,
    },
  ];

  grid.innerHTML = categories
    .map(
      (cat) => `
    <div class="category-card" data-category="${cat.id}">
      <div class="category-card-icon">${icons[cat.icon]}</div>
      <h3 class="category-card-title">${cat.title}</h3>
      <p class="category-card-desc">${cat.desc}</p>
      <span class="category-card-count">${cat.count} Product${cat.count !== 1 ? "s" : ""}</span>
    </div>`
    )
    .join("");

  // Click handler — scroll to products or consumables section
  grid.querySelectorAll(".category-card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-category");
      const targetId = (cat === "accessories" && document.getElementById("consumables")) ? "consumables" : "products";
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const top =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ================================================================
   9. CATALOG PAGE (products.html)
   ================================================================ */
function initCatalogPage() {
  const grid = document.getElementById("catalogGrid");
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  if (!grid || typeof PRODUCTS_DATA === "undefined") return;

  function renderCategory(cat) {
    let list = [];
    if (cat === "all") {
      list = PRODUCTS_DATA;
    } else if (cat === "consumables") {
      list = (typeof CONSUMABLES_DATA !== "undefined" ? CONSUMABLES_DATA : []).map((c) => ({
        name: c.title,
        image: c.image,
        category: "spares",
        amperage: c.brochureName,
        dutyCycle: c.tagline,
        phase: c.specPoints[0] || "Standard Fitting",
        wireSize: c.specPoints[1] || "Genuine Spares",
      }));
    } else {
      list = PRODUCTS_DATA.filter((p) => p.category === cat);
    }
    grid.innerHTML = list
      .map(
        (product) => `
      <div class="product-card">
        <div class="product-card-img">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-card-body">
          <span class="product-card-badge">${product.amperage} ${product.category.toUpperCase()}</span>
          <h3 class="product-card-title">${product.name}</h3>
          <ul class="product-card-specs">
            <li>${product.dutyCycle}</li>
            <li>${product.phase}</li>
            <li>${product.wireSize}</li>
          </ul>
          <button class="btn btn-primary product-card-btn" onclick="openQuoteModal('${product.name.replace(/'/g, "\\'")}')">Get Quote</button>
        </div>
      </div>`
      )
      .join("");
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCategory(btn.getAttribute("data-category") || "all");
    });
  });

  // Check URL hash (e.g. products.html#mig)
  const hash = window.location.hash.replace("#", "");
  const validCategories = ["mig", "tig", "arc", "accessories", "consumables"];
  if (validCategories.includes(hash)) {
    const targetBtn = document.querySelector(`.filter-tab-btn[data-category="${hash}"]`);
    if (targetBtn) {
      filterBtns.forEach((b) => b.classList.remove("active"));
      targetBtn.classList.add("active");
      renderCategory(hash);
    } else {
      renderCategory("all");
    }
  } else {
    renderCategory("all");
  }
}

/* ================================================================
   10. GENUINE CONSUMABLES & ACCESSORIES
   ================================================================ */
function initConsumablesPage() {
  const grids = document.querySelectorAll("#consumablesGrid, #consumablesHomeGrid");
  if (!grids.length || typeof CONSUMABLES_DATA === "undefined") return;

  const html = CONSUMABLES_DATA.map(
    (item) => `
    <div class="product-card">
      <div class="product-card-img">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="product-card-body">
        <span class="product-card-badge">${item.brochureName}</span>
        <h3 class="product-card-title">${item.title}</h3>
        <p class="product-card-desc">${item.tagline}</p>
        <ul class="product-card-specs">
          ${item.specPoints.slice(0, 3).map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
        <button class="btn btn-primary product-card-btn" onclick="openQuoteModal('${item.title.replace(/'/g, "\\'")}')">Get Quote</button>
      </div>
    </div>`
  ).join("");

  grids.forEach((grid) => {
    grid.innerHTML = html;
  });
}

/* ================================================================
   INIT ON DOM READY
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCategoryCards();
  initFeaturedProducts();
  initCatalogPage();
  initConsumablesPage();
  initMachineSelector();
  initTestimonials();
  initModals();
  initQuoteForms();
});
