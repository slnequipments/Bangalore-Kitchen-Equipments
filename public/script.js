const business = {
  name: "Bangalore Kitchen Equipments",
  phone: "916362862220",
  phoneDisplay: "+91 63628 62220",
  address: "No 13, 2nd Cross, Mariyappa Circle, Mariyappa Complex, Ganapathy Nagar, Bengaluru, Karnataka 560058",
};

const image = {
  singleBurner: "/assets/products/commercial-gas-range-clean-bangalore.jpg",
  twoBurner: "/assets/products/two-burner-commercial-gas-range.webp",
  threeBurner: "/assets/products/commercial-gas-range-clean-bangalore.jpg",
  fourBurner: "/assets/products/commercial-gas-range-clean-bangalore.jpg",
  sixBurner: "/assets/products/commercial-gas-range-clean-bangalore.jpg",
  tawa: "/assets/products/flat-grill-tawa-bangalore.jpg",
  riceVessel: "/assets/products/commercial-rice-vessel-bangalore.jpg",
  idly: "/assets/products/idli-steamer-box.jpg",
  chiller: "/assets/products/table-top-chiller-with-make-liner.jpg",
  freezer: "/assets/products/2-door-freezer.jpg",
  bainMarie: "/assets/products/bain-marie-with-tray-slider.jpg",
  display: "/assets/products/display-counter-hotcoldnormal.jpg",
  sink: "/assets/products/work-table-with-sink-unit.jpg",
  singleSink: "/assets/products/single-sink-unit.jpg",
  threeSink: "/assets/products/three-sink-unit.jpg",
  washing: "/assets/products/washing-equipment.jpg",
  workTable: "/assets/products/work-table-with-1-under-shelf-commercial-kitchen.jpg",
  workTableCover: "/assets/products/work-table-with-3-side-cover-2-us.jpg",
  trolley: "/assets/products/utility-trolley.jpg",
  platformTrolley: "/assets/products/utility-trolley.jpg",
  storage: "/assets/products/work-table-with-undershelves-overshelves.jpg",
  exhaust: "/assets/products/exhaust-hood.jpg",
  gasLine: "/assets/products/gas-line.jpg",
  ducting: "/assets/products/gi-ducting.jpg",
  blower: "/assets/products/blower-exhaust.jpg",
  griller: "/assets/products/hot-case-commercial-kitchen-equipment.jpg",
  fryer: "/assets/products/commercial-dosa-plate-bangalore.jpg",
  prep: "/assets/products/preparation-equipment.jpg",
  serving: "/assets/products/serving-equipment.jpg",
  kitchen: "/assets/products/custom-hospitality-kitchen-layout-bangalore.jpg",
  equipment: "/assets/products/stainless-steel-work-table-bangalore.jpg",
};

function product(name, category, imageUrl, description) {
  return {
    name,
    category,
    image: imageUrl,
    alt: `${name} for commercial kitchen in Bangalore`,
    description,
  };
}

const products = [
  product("Single Burner Range", "Cooking Equipment", image.singleBurner, "Single-burner commercial range for compact cooking stations and small kitchens."),
  product("Two Burner Range", "Cooking Equipment", image.twoBurner, "Two-burner stainless steel cooking range for restaurants, cafes and canteens."),
  product("Three Burner Range", "Cooking Equipment", image.threeBurner, "Three-burner range for faster production and daily commercial cooking."),
  product("Four Burner Range", "Cooking Equipment", image.fourBurner, "Heavy-duty four-burner range for restaurant and hotel kitchens."),
  product("Dosa / Chapathi Plate", "Cooking Equipment", image.tawa, "Commercial hot plate for dosa, chapathi, paratha, snacks and quick-service menus."),
  product("Tandoor Bhatti", "Cooking Equipment", image.tawa, "Charcoal or gas tandoor option for breads, kebabs and restaurant cooking lines."),
  product("Idly Box - Steam", "Steaming Equipment", image.idly, "Steam idly box for breakfast production and bulk steaming needs."),
  product("Idly Box - Gas / Electrical", "Steaming Equipment", image.idly, "Gas or electrical idly box option for compact commercial kitchens."),
  product("Single Sink Unit", "Washing Equipment", image.singleSink, "Single-bowl stainless steel sink for washing, prep and utility zones."),
  product("Two Sink Unit", "Washing Equipment", image.sink, "Two-bowl sink unit for organized washing and rinsing in commercial kitchens."),
  product("Three Sink Unit", "Washing Equipment", image.threeSink, "Three-bowl sink for wash, rinse and sanitize tasks in busy kitchens."),
  product("Hand Wash Sink - Wall Mounted", "Washing Equipment", image.singleSink, "Wall-mounted hand wash sink for hygiene stations and staff areas."),

  product("Work Table with Cross Bracing", "Preparation Equipment", image.workTable, "Stainless steel work table with cross bracing for stable prep work."),
  product("Work Table with 1 U/S", "Preparation Equipment", image.workTable, "Work table with one undershelf for preparation and storage."),
  product("Work Table with 2 U/S", "Preparation Equipment", image.storage, "Work table with two undershelves for extra storage capacity."),
  product("Work Table with 2 U/S and 2 OHS", "Preparation Equipment", image.storage, "Work table with undershelves and overshelves for organized operations."),
  product("Work Table with 3 Side Cover and 2 U/S", "Preparation Equipment", image.workTableCover, "Covered work table with undershelves for utility and prep areas."),
  product("Work Table with 3 Side Cover, 2 U/S and 2 OHS", "Preparation Equipment", image.workTableCover, "Covered table with undershelves and overshelves for compact storage."),
  product("Chat Counter", "Serving Equipment", image.serving, "Service counter for chaat, snacks and quick-service food stations."),
  product("2 / 3 Tier Trolley", "Handling Equipment", image.trolley, "Multi-tier trolley for movement, storage and service support."),
  product("Platform Trolley", "Handling Equipment", image.platformTrolley, "Platform trolley for moving supplies, utensils and kitchen material."),
  product("Work Table with Sink", "Preparation Equipment", image.sink, "Integrated work table and sink for efficient prep and washing zones."),
  product("Storage Rack - 5 Tier", "Storage Equipment", image.storage, "Five-tier rack for dry storage, utensils and kitchen organization."),
  product("Plate Rack", "Storage Equipment", image.storage, "Plate rack for organized drying, holding and back-of-house storage."),

  product("Table Top Chiller", "Cooling Equipment", image.chiller, "Countertop chiller for preparation lines, service counters and cafes."),
  product("Two Door Vertical Chiller", "Cooling Equipment", image.freezer, "Two-door vertical chiller for commercial refrigeration needs."),
  product("Four Door Vertical Chiller", "Cooling Equipment", image.freezer, "Four-door vertical chiller for higher-capacity cold storage."),
  product("Bain Marie - Counter", "Serving Equipment", image.bainMarie, "Counter-style Bain Marie for hot food holding and buffet service."),
  product("Bain Marie - Tray Slider", "Serving Equipment", image.bainMarie, "Bain Marie with tray slider for canteens, hotels and service lines."),
  product("Bain Marie - Canopy", "Serving Equipment", image.bainMarie, "Bain Marie with canopy for protected hot food display and serving."),
  product("Round Bain Marie", "Serving Equipment", image.bainMarie, "Round Bain Marie option for hot food holding and service counters."),
  product("Square Dining Table", "Dining Equipment", image.workTable, "Square dining table option for staff dining and food service areas."),
  product("Round Dining Table", "Dining Equipment", image.workTable, "Round dining table option for canteens and compact dining zones."),
  product("Stool Folding Dining Table", "Dining Equipment", image.workTable, "Folding dining table with stools for canteens and space-saving seating."),
  product("Display Counter Hot / Cold / Normal", "Display Equipment", image.display, "Display counter for bakery, snacks, sweets and chilled products."),
  product("Hood with Filter", "Ventilation", image.exhaust, "Hood with filter for cooking lines, smoke capture and ventilation control."),

  product("Chicken Griller", "Cooking Equipment", image.griller, "Commercial griller for chicken, snacks and high-volume kitchen service."),
  product("Shawarma", "Cooking Equipment", image.griller, "Shawarma machine option for restaurants, cafes and takeaway counters."),
  product("Deep Fat Fryer", "Cooking Equipment", image.fryer, "Deep fat fryer for snacks, fries and restaurant frying stations."),
  product("Batter Table", "Preparation Equipment", image.prep, "Batter table for preparation, mixing and production support."),
  product("Pot Rack", "Storage Equipment", image.storage, "Pot rack for organized storage of vessels, pans and utensils."),
  product("Palate", "Storage Equipment", image.storage, "Kitchen palate for holding, staging and organized material movement."),
  product("Drain Gratings", "Kitchen Utility", image.washing, "Drain grating solution for wash areas and wet kitchen floors."),
  product("Granite Table", "Preparation Equipment", image.prep, "Granite-top table for bakery, prep and heavy-duty work areas."),
  product("Cocktail / Mocktail Station", "Beverage Equipment", image.serving, "Station for beverage preparation, bar service and mocktail counters."),
  product("Tilting Bratt Pan", "Cooking Equipment", image.equipment, "Tilting bratt pan for bulk cooking, sauteing and high-volume production."),
  product("Rice Vessel", "Boiling Equipment", image.riceVessel, "Commercial rice vessel for bulk cooking in hotels and institutional kitchens."),
  product("Steam Boiler", "Boiling Equipment", image.riceVessel, "Steam boiler support for cooking, steaming and kitchen utility needs."),

  product("Open Type Grinder", "Processing Equipment", image.equipment, "Open type grinder for commercial food preparation and wet grinding."),
  product("Tilting Type Grinder", "Processing Equipment", image.equipment, "Tilting grinder for efficient batter and paste preparation."),
  product("Dough Atta Kneader", "Bakery Equipment", image.equipment, "Dough and atta kneader for bakeries, restaurants and canteens."),
  product("Pulverizer Gravy Machine", "Processing Equipment", image.equipment, "Pulverizer and gravy machine for spice, paste and sauce preparation."),
  product("Vegetable Cutter", "Preparation Equipment", image.prep, "Vegetable cutter for faster prep and consistent kitchen output."),
  product("Coconut Scrapper", "Preparation Equipment", image.prep, "Coconut scrapper for South Indian restaurants and prep areas."),
  product("Pizza Oven", "Bakery Equipment", image.equipment, "Commercial pizza oven for cafes, bakeries and restaurant kitchens."),
  product("Sandwich Griller", "Snack Equipment", image.equipment, "Sandwich griller for cafes, snack counters and quick-service menus."),
  product("Deep Fat Fryer - Table Top", "Snack Equipment", image.fryer, "Table top fryer for compact snack and fast-food counters."),
  product("Single Tier Wall Shelf", "Storage Equipment", image.storage, "Single-tier wall shelf for utensils, ingredients and prep storage."),
  product("Two Tier Wall Shelf", "Storage Equipment", image.storage, "Two-tier wall shelf for vertical storage and organized kitchen flow."),
  product("Hand Wash Sink with Stand", "Washing Equipment", image.singleSink, "Hand wash sink with stand for hygiene points and service areas."),

  product("GI Ducting", "Ventilation", image.ducting, "GI ducting for commercial kitchen exhaust and ventilation systems."),
  product("Blower", "Ventilation", image.blower, "Blower for exhaust systems and smoke extraction requirements."),
  product("Potato Peeler", "Preparation Equipment", image.prep, "Potato peeler for faster bulk preparation in commercial kitchens."),
  product("Commercial Mixer", "Processing Equipment", image.equipment, "Commercial mixer for food preparation, batter and bakery support."),
  product("Planetary Mixer", "Bakery Equipment", image.equipment, "Planetary mixer for bakeries, cafes and dough preparation."),
  product("Waffle Machine", "Snack Equipment", image.equipment, "Waffle machine for cafes, dessert counters and snack menus."),
  product("Spiral Mixer", "Bakery Equipment", image.equipment, "Spiral mixer for bakery dough and high-volume mixing needs."),
  product("Electric Plate Warmer", "Serving Equipment", image.serving, "Electric plate warmer for service counters and hotel kitchens."),
  product("Twistato Machine", "Snack Equipment", image.equipment, "Twistato machine for snack counters, events and quick-service menus."),
  product("Cotton Candy Machine", "Snack Equipment", image.equipment, "Cotton candy machine for events, stalls and dessert counters."),
  product("Pop Corn Machine", "Snack Equipment", image.equipment, "Pop corn machine for snack counters, events and retail service."),
  product("Sugar Cane Juicer", "Beverage Equipment", image.equipment, "Sugar cane juicer for beverage counters and juice shops."),
];

const galleryItems = [
  ["commercial-gas-range-clean-bangalore.jpg", "Commercial gas range"],
  ["2-door-freezer.jpg", "2-door freezer"],
  ["2-door-freezer-2.jpg", "Commercial 2-door freezer"],
  ["idli-steamer-box.jpg", "Idli steamer box"],
  ["bain-marie-with-tray-slider.jpg", "Bain Marie with tray slider"],
  ["blower-exhaust.jpg", "Blower exhaust"],
  ["commercial-rice-vessel-bangalore.jpg", "Commercial rice vessel"],
  ["cooling-equipment.jpg", "Cooling equipment"],
  ["display-counter-hotcoldnormal.jpg", "Display counter hot cold normal"],
  ["exhaust-hood.jpg", "Exhaust hood"],
  ["flat-grill-tawa-bangalore.jpg", "Flat grill tawa"],
  ["gas-line.jpg", "Gas line setup"],
  ["gi-ducting.jpg", "GI ducting"],
  ["hot-case-commercial-kitchen-equipment.jpg", "Hot case display equipment"],
  ["custom-hospitality-kitchen-layout-bangalore.jpg", "Hospitality kitchen layout"],
  ["preparation-equipment.jpg", "Preparation equipment"],
  ["serving-equipment.jpg", "Serving equipment"],
  ["single-sink-unit.jpg", "Single sink unit"],
  ["ssdoublesinkuni.jpg", "Double sink unit"],
  ["table-top-chiller.jpg", "Table top chiller"],
  ["table-top-chiller-with-4-door.jpg", "Table top chiller with 4 doors"],
  ["table-top-chiller-with-make-liner.jpg", "Table top chiller with make liner"],
  ["three-sink-unit.jpg", "Three sink unit"],
  ["trolley.jpg", "Commercial kitchen trolley"],
  ["utility-trolley.jpg", "Utility trolley"],
  ["vertical-disply-chiler.jpg", "Vertical display chiller"],
  ["washing-equipment.jpg", "Washing equipment"],
  ["work-tabale-with-1us.jpg", "Work table with one undershelf"],
  ["work-tabale-with-cb-commerical-kitchen.jpg", "Commercial kitchen work table"],
  ["work-tabale-with-cb-commerical-kitchen-2.jpg", "Commercial work table with cross bracing"],
  ["work-tabale-with-cb-commerical-kitchen-3.jpg", "Stainless steel work table"],
  ["work-table-with-1-under-shelf-commercial-kitchen.jpg", "Work table with one undershelf"],
  ["work-table-with-3-side-cover-2-us.jpg", "Work table with 3-side cover and undershelves"],
  ["work-table-with-3-side-cover-2-us-2-ohs.jpg", "Work table with overshelf"],
  ["work-table-with-sink-unit.jpg", "Work table with sink unit"],
  ["work-table-with-sink-unit-2.jpg", "Work table sink unit"],
  ["work-table-with-undershelves-overshelves.jpg", "Work table with undershelves and overshelves"],
  ["work-table-with-undershelves-overshelves-2.jpg", "Stainless steel overshelf table"],
].map(([file, title]) => ({
  title,
  image: `/assets/products/${file}`,
  alt: `${title} by Bangalore Kitchen Equipments`,
}));

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function buildWhatsAppUrl({ name = "", phone = "", email = "", equipment = "", message = "" }) {
  const text = [
    `New enquiry for ${business.name}`,
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    email ? `Email: ${email}` : "",
    equipment ? `Equipment: ${equipment}` : "",
    message ? `Requirement: ${message}` : "Please share quotation details.",
  ].filter(Boolean).join("\n");

  return `https://wa.me/${business.phone}?text=${encodeURIComponent(text)}`;
}

function renderProducts() {
  $$("[data-product-grid]").forEach((grid) => {
    const limit = grid.dataset.limit === "all" ? products.length : Number(grid.dataset.limit || products.length);
    grid.innerHTML = products.slice(0, limit).map((product) => `
      <article class="product-card">
        <div class="product-media">
          <img src="${product.image}" alt="${escapeHTML(product.alt)}" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-category">${escapeHTML(product.category)}</div>
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.description)}</p>
          <button class="product-btn" type="button" data-product="${escapeHTML(product.name)}">Enquire Now</button>
        </div>
      </article>
    `).join("");
  });
}

function renderGallery() {
  $$("[data-gallery-grid]").forEach((grid) => {
    const limit = grid.dataset.limit === "all" ? galleryItems.length : Number(grid.dataset.limit || galleryItems.length);
    grid.innerHTML = galleryItems.slice(0, limit).map((item) => `
      <figure class="gallery-card">
        <img src="${item.image}" alt="${escapeHTML(item.alt)}" loading="lazy">
        <figcaption>${escapeHTML(item.title)}</figcaption>
      </figure>
    `).join("");
  });
}

function fillContactForm(productName) {
  const contactForm = $("#contactForm");
  if (!contactForm) return false;

  const equipment = $('[name="equipment"]', contactForm);
  const message = $('[name="message"]', contactForm);
  if (equipment) equipment.value = productName;
  if (message) message.value = `I want a quote for ${productName}. Please share pricing and delivery details.`;
  const contactSection = $("#contact");
  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => $('[name="name"]', contactForm)?.focus(), 450);
  return true;
}

function createQuotePopup() {
  if ($("#quotePopup")) return;

  const productOptions = products.slice(0, 16).map((product) => `
    <button class="lead-product-btn" type="button" data-lead-product="${escapeHTML(product.name)}">
      <img src="${product.image}" alt="${escapeHTML(product.alt)}" loading="lazy">
      <span>${escapeHTML(product.name)}</span>
    </button>
  `).join("");

  document.body.insertAdjacentHTML("beforeend", `
    <div class="quote-popup-overlay" id="quotePopup" aria-hidden="true">
      <div class="quote-popup" role="dialog" aria-modal="true" aria-labelledby="quotePopupTitle">
        <div class="quote-popup-header">
          <div>
            <h2 id="quotePopupTitle">Get a Free Quote</h2>
            <p>Commercial kitchen equipment in Bangalore</p>
          </div>
          <button class="quote-close" type="button" data-quote-close aria-label="Close quote form">&times;</button>
        </div>
        <form class="quote-popup-body" id="quotePopupForm">
          <label>
            <span>Full Name *</span>
            <input type="text" name="name" autocomplete="name" required placeholder="Your name">
          </label>
          <label>
            <span>Phone *</span>
            <input type="tel" name="phone" autocomplete="tel" required placeholder="+91-XXXXXXXXXX">
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" autocomplete="email" placeholder="you@example.com">
          </label>
          <label>
            <span>Product Interested In</span>
            <input type="text" name="equipment" id="quoteEquipment" autocomplete="off" placeholder="Select below or type here">
          </label>
          <div>
            <span class="lead-products-label">Popular Products</span>
            <div class="lead-product-list">${productOptions}</div>
          </div>
          <label>
            <span>Requirements</span>
            <textarea name="message" rows="3" placeholder="Tell us what you need..."></textarea>
          </label>
          <button type="submit" class="button button-submit">Send on WhatsApp</button>
          <p class="form-note" id="quotePopupStatus" role="status" aria-live="polite">We usually respond within 24 hours.</p>
        </form>
      </div>
    </div>
  `);
}

function openQuotePopup(productName = "") {
  createQuotePopup();
  const popup = $("#quotePopup");
  const equipment = $("#quoteEquipment");
  if (equipment && productName) equipment.value = productName;
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  setTimeout(() => $("#quotePopupForm input")?.focus(), 50);
}

function closeQuotePopup(markSeen = true) {
  const popup = $("#quotePopup");
  if (!popup) return;
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  if (markSeen) {
    try {
      localStorage.setItem("lead_popup_seen", "true");
    } catch {
      // Ignore private browsing storage errors.
    }
  }
}

function setupQuotePopup() {
  createQuotePopup();

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-quote-open]");
    if (openButton) {
      openQuotePopup(openButton.dataset.product || "");
      return;
    }

    const productButton = event.target.closest("[data-product]");
    if (productButton) {
      const productName = productButton.dataset.product;
      if (!fillContactForm(productName)) openQuotePopup(productName);
      return;
    }

    const leadProduct = event.target.closest("[data-lead-product]");
    if (leadProduct) {
      $$(".lead-product-btn").forEach((button) => button.classList.remove("selected"));
      leadProduct.classList.add("selected");
      const equipment = $("#quoteEquipment");
      if (equipment) equipment.value = leadProduct.dataset.leadProduct;
      return;
    }

    if (event.target.matches("[data-quote-close]") || event.target.id === "quotePopup") {
      closeQuotePopup();
    }
  });

  $("#quotePopupForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const status = $("#quotePopupStatus");
    if (status) status.textContent = "Opening WhatsApp with your quote request...";
    window.open(buildWhatsAppUrl(data), "_blank", "noopener");
    event.currentTarget.reset();
    setTimeout(() => closeQuotePopup(), 900);
  });

  try {
    if (!localStorage.getItem("lead_popup_seen")) {
      setTimeout(() => openQuotePopup(), 12000);
    }
  } catch {
    setTimeout(() => openQuotePopup(), 12000);
  }
}

function setupContactForm() {
  const contactForm = $("#contactForm");
  const formStatus = $("#formStatus");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    if (formStatus) formStatus.textContent = "Opening WhatsApp with your enquiry...";
    window.open(buildWhatsAppUrl(data), "_blank", "noopener");
    contactForm.reset();
    setTimeout(() => {
      if (formStatus) formStatus.textContent = `You can also call ${business.phoneDisplay} for urgent requirements.`;
    }, 800);
  });
}

function setupMenu() {
  const navLinks = $("#primary-menu");
  const menuButton = $(".menu-button");
  if (!navLinks || !menuButton) return;

  menuButton.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

function setupChatbot() {
  const chatToggle = $(".chatbot-toggle");
  const chatClose = $(".chatbot-close");
  const chatbot = $("#chatbot");
  const chatMessages = $("#chatMessages");
  const chatForm = $("#chatForm");
  const chatInput = $("#chatInput");
  if (!chatToggle || !chatClose || !chatbot || !chatMessages || !chatForm || !chatInput) return;

  function addChatMessage(text, type = "bot") {
    const bubble = document.createElement("div");
    bubble.className = `chat-msg ${type}`;
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getBotReply(message) {
    const text = message.toLowerCase();
    if (text.includes("price") || text.includes("cost") || text.includes("quote")) {
      return "Pricing depends on size, make, quantity and installation location. Share your product list on WhatsApp and our team will send a quote.";
    }
    if (text.includes("product") || text.includes("equipment") || text.includes("range")) {
      return "We supply gas ranges, chillers, freezers, rice vessels, tawas, sinks, dishwashing setups, work tables, display counters, Bain Marie units, exhaust hoods, gas lines and custom stainless steel equipment.";
    }
    if (text.includes("service") || text.includes("design") || text.includes("fabrication")) {
      return "We help with planning and designing, equipment selection, laser cutting, sheet bending, welding, packing, transportation, installation demonstration and after-sales support.";
    }
    if (text.includes("delivery") || text.includes("install")) {
      return "We support delivery and installation guidance within Bangalore. For custom projects, share your location and kitchen requirements first.";
    }
    if (text.includes("phone") || text.includes("call") || text.includes("contact")) {
      return `You can call ${business.phoneDisplay} or send details on WhatsApp. Our address is ${business.address}.`;
    }
    return "Please share the equipment name, quantity, kitchen location and any size requirement. I can help you prepare the enquiry for our team.";
  }

  function toggleChatbot(forceOpen) {
    const shouldOpen = forceOpen ?? !chatbot.classList.contains("active");
    chatbot.classList.toggle("active", shouldOpen);
    chatToggle.setAttribute("aria-expanded", String(shouldOpen));
    if (shouldOpen) chatInput.focus();
  }

  addChatMessage("Hello. I can help with products, pricing, installation and quote enquiries.");
  chatToggle.addEventListener("click", () => toggleChatbot());
  chatClose.addEventListener("click", () => toggleChatbot(false));
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    addChatMessage(message, "user");
    chatInput.value = "";
    setTimeout(() => addChatMessage(getBotReply(message)), 250);
  });
}

renderProducts();
renderGallery();
setupQuotePopup();
setupContactForm();
setupMenu();
setupChatbot();

const year = $("#currentYear");
if (year) year.textContent = new Date().getFullYear();
