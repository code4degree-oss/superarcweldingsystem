/**
 * Super Arc Welding System - Product Catalog Data
 * Updated with REAL Product Images & Official Spec Sheets uploaded by the manufacturer
 */

const PRODUCTS_DATA = [
  // --- 1. MIG / ARC 400 IJ HEAVY DUTY (Flagship 400A Inverter) ---
  {
    id: "mig-400-ij",
    name: "MIG / ARC 400 IJ Heavy Duty Inverter Welding System",
    category: "mig",
    badge: "Official 400A Flagship",
    amperage: "400A",
    dutyCycle: "60% @ 400A / 100% @ 310A",
    phase: "Three Phase AC415V ± 15%",
    featured: true,
    wireSize: "0.8 - 1.2 mm / 1.6 mm",
    weight: "36 KG",
    cooling: "Forced Air Cooling (Dual Heavy Fans)",
    insulation: "Class H",
    protection: "IP21S",
    warranty: "6 Month Company Warranty + Lifetime Service Support",
    winding: "100% Pure Copper Winding & IGBT Module",
    description: "Heavy-duty 400A 3-phase industrial workhorse with IGBT modules, separate yellow wire feeder unit, digital voltage/current meters, and crater current/voltage controls. Engineered for continuous fabrication, PEB structures, and heavy vehicle chassis.",
    features: [
      "100% Pure Copper Transformer & Chokes with advanced IGBT modules",
      "Separate DZ-10 heavy-duty trolley wire feeder with 5m/10m umbilical cable",
      "Digital Current & Voltage dual display meters with crater voltage & arc control knobs",
      "Built-in AC 36V heater socket for CO2 gas regulator and MCB breaker on rear panel",
      "Thermal overload protection with automatic trip shutoff"
    ],
    specs: {
      "Model": "MIG / ARC 400 IJ",
      "Input Voltage": "AC415V ± 15% (3 Phase)",
      "Input Power Capacity": "14 kVA",
      "Output Current Range": "50A – 400A",
      "Output Voltage Adjustment": "31.5 V",
      "Wire Feeder Speed": "3 – 24 m/min",
      "Power Factor": "0.93",
      "Suitable Wire Size": "0.8 – 1.2 mm / 1.6 mm",
      "Net Weight": "36 KG",
      "Dimensions": "21.5 x 11 x 21.5 Inch"
    },
    applications: ["Structural Steel & PEB", "Automobile Frame Welding", "Heavy Earthmoving Equipment", "Fabrication Workshops"],
    image: "assets/images/products/mig-400ij-full-set.jpg",
    gallery: [
      "assets/images/products/mig-400ij-full-set.jpg",
      "assets/images/products/mig-400ij-machine.jpg",
      "assets/images/products/mig-400ij-feeder-cable.jpg",
      "assets/images/products/spec-sheet-mig-400ij.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-mig-400ij.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 2. MIG / ARC 400 SUMO (Heavy Industrial 3-Phase) ---
  {
    id: "mig-400-sumo",
    name: "MIG / ARC 400 Sumo 3-Phase IGBT Welding System",
    category: "mig",
    badge: "Heavy Duty Continuous Duty",
    amperage: "400A",
    dutyCycle: "60% @ 400A",
    phase: "Three Phase AC415V ± 15%",
    featured: true,
    wireSize: "0.8 - 1.2 mm",
    weight: "32 KG",
    cooling: "Forced Air Cooling",
    insulation: "Class H",
    protection: "IP21S",
    warranty: "6 Month Company Warranty + Lifetime Service Support",
    winding: "100% Pure Copper Winding",
    description: "Rugged Sumo-series 400A inverter with high energy efficiency, 15 kVA input capacity, and wire feeder speed up to 24 m/min. Designed for non-stop industrial shift work.",
    features: [
      "15 kVA high efficiency IGBT module inverter design",
      "Separate heavy 4-roll geared wire feeder unit with quick euro connector",
      "Handles solid wire, flux-cored wire & stainless steel wires",
      "Integrated circuit breaker switch and surge protection"
    ],
    specs: {
      "Model": "MIG / ARC 400 Sumo",
      "Input Voltage": "AC415V ± 15% (3 Phase)",
      "Input Power Capacity": "15 kVA",
      "Output Current Range": "30A – 400A",
      "Output Voltage Adjustment": "34 V",
      "Wire Feeder Speed": "2 – 24 m/min",
      "Power Factor": "0.93",
      "Net Weight": "32 KG",
      "Dimensions": "20.5 x 10.5 x 21.5 Inch"
    },
    applications: ["Crane & Boiler Fabrication", "PEB Sheds", "Storage Tanks", "Heavy Machinery"],
    image: "assets/images/products/mig-400ij-feeder-cable.jpg",
    gallery: [
      "assets/images/products/mig-400ij-feeder-cable.jpg",
      "assets/images/products/spec-sheet-mig-400sumo.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-mig-400sumo.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 3. SMART WELDER MIG 315L MAX (1, 2 & 3 Phase Digital Version) ---
  {
    id: "mig-315l-max",
    name: "Smart Welder MIG 315L MAX (1, 2 & 3 Phase Digital)",
    category: "mig",
    badge: "Multi-Voltage Smart Inverter",
    amperage: "315A",
    dutyCycle: "60% @ 315A",
    phase: "Dual Voltage AC220V / AC415V ± 15% (1, 2 & 3 Phase)",
    featured: true,
    wireSize: "0.8 - 1.2 mm / Up to 4.0mm Stick Rod",
    weight: "11 KG (Power Unit)",
    cooling: "Forced Air Cooling",
    insulation: "Class F",
    protection: "IP21",
    warranty: "6 Month Company Warranty",
    winding: "Full Bridge MCU Inverter Technology",
    description: "Next-gen smart digital welder running on single phase 220V, two phase, or three phase 415V! Features LED display, auto-matching synergy parameters, 2T/4T trigger latching, gas GMAW & gasless FCAW flux-cored welding.",
    features: [
      "Full bridge technology with intelligent MCU and digital LED display",
      "Auto-matching parameters with fine-tuning voltage & inductance knobs",
      "Dual voltage capability: Works seamlessly on 220V and 415V lines",
      "MMA stick function effortlessly welds 4.0mm welding rods",
      "Suitable for continuous operation on up to 6mm thick steel plates"
    ],
    specs: {
      "Model": "MIG 315L MAX",
      "Power Voltage": "AC220V / AC415V ± 15% (1, 2 & 3 Phase)",
      "Output Current Range": "30A – 315A",
      "Rated Input Current": "38A",
      "No-Load Voltage": "65V",
      "Rated Output Voltage": "30V",
      "Duty Cycle": "60% @ 315A",
      "Efficiency": "≥ 80%",
      "Power Factor": "0.73",
      "Net Weight": "11 KG",
      "Dimensions": "480 x 215 x 355 mm"
    },
    applications: ["On-Site Erection", "Automobile Body Fabrication", "Precision Sheet Metal", "Multi-Phase Workshops"],
    image: "assets/images/products/mig-315l-max-set.jpg",
    gallery: [
      "assets/images/products/mig-315l-max-set.jpg",
      "assets/images/products/mig-315l-max-machine.jpg",
      "assets/images/products/mig-315l-max-front.jpg",
      "assets/images/products/spec-sheet-mig-315l.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-mig-315l.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 4. MIG / ARC 315 FS (Single Phase 230V Inverter) ---
  {
    id: "mig-315-fs",
    name: "MIG / ARC 315 FS Single Phase 230V Inverter",
    category: "mig",
    badge: "Single Phase High Output",
    amperage: "315A",
    dutyCycle: "60% @ 315A",
    phase: "Single Phase AC230V ± 15%",
    featured: true,
    wireSize: "0.6 - 1.0 mm MIG Wire",
    weight: "21 KG",
    cooling: "Forced Air Cooling",
    insulation: "Class H",
    protection: "IP21S",
    warranty: "6 Month Company Warranty",
    winding: "100% Pure Copper Coil",
    description: "High-output single-phase MIG machine designed for workshops without 3-phase power. Delivers 315 Amps of welding current with external geared wire feeder, burnback control, and dual digital meters.",
    features: [
      "Single phase 230V operation delivering true 315A power",
      "Independent yellow wire feeder unit with euro connector",
      "Front panel controls: Back Burn adjustment & MMA Stick current dial",
      "MIG/MMA selector switch, wire test inching, and 2T/4T modes"
    ],
    specs: {
      "Model": "MIG / ARC 315 FS",
      "Input Voltage": "AC230V ± 15% (1 Phase)",
      "Input Power Capacity": "9.7 kVA",
      "Output Voltage Adjustment": "26.5 V",
      "Output Current Range": "30A – 315A",
      "Wire Feeder Speed": "2 – 24 m/min",
      "Power Factor": "0.93",
      "Net Weight": "21 KG",
      "Dimensions": "20 x 8 x 15 Inch"
    },
    applications: ["Auto Body Repair", "Railing & Gate Fabricators", "Commercial Kitchen Equipment", "General Engineering"],
    image: "assets/images/products/mig-315fs-set.jpg",
    gallery: [
      "assets/images/products/mig-315fs-set.jpg",
      "assets/images/products/mig-315fs-machine.jpg",
      "assets/images/products/mig-315fs-front.jpg",
      "assets/images/products/spec-sheet-mig-315fs.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-mig-315fs.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 5. MIG / ARC 315 F (Three Phase 415V Inverter) ---
  {
    id: "mig-315-f",
    name: "MIG / ARC 315 F Three Phase 415V Industrial Welder",
    category: "mig",
    badge: "Industrial 3-Phase Workhorse",
    amperage: "315A",
    dutyCycle: "60% @ 315A",
    phase: "Three Phase AC415V ± 15%",
    featured: false,
    wireSize: "0.6 - 1.0 mm MIG Wire",
    weight: "21 KG",
    cooling: "Forced Air Cooling",
    insulation: "Class H",
    protection: "IP21S",
    warranty: "6 Month Company Warranty",
    winding: "100% Copper Winding",
    description: "3-Phase 415V variant of the 315A series, engineered for balanced 3-phase line draw in factory environments with zero phase imbalance.",
    features: [
      "Balanced 3-phase 415V input reducing power factor penalties",
      "External wire feeder with robust steel roll cage",
      "Smooth arc initiation with minimal spatter",
      "Class H insulation withstands high ambient factory temperatures"
    ],
    specs: {
      "Model": "MIG / ARC 315 F",
      "Input Voltage": "AC415V ± 15% (3 Phase)",
      "Input Power Capacity": "9.7 kVA",
      "Output Voltage Adjustment": "26.5 V",
      "Output Current Range": "30A – 315A",
      "Wire Feeder Speed": "2 – 24 m/min",
      "Power Factor": "0.93",
      "Net Weight": "21 KG",
      "Dimensions": "20 x 8 x 15 Inch"
    },
    applications: ["Medium Fabrication", "Agricultural Implements", "Automotive Ancillary", "Maintenance Depots"],
    image: "assets/images/products/mig-315fs-machine.jpg",
    gallery: [
      "assets/images/products/mig-315fs-machine.jpg",
      "assets/images/products/spec-sheet-mig-315f.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-mig-315f.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 6. TIG 315 BP AC/DC (Aluminium & SS Specialist) ---
  {
    id: "tig-315bp-acdc",
    name: "TIG 315 BP AC/DC Pulse Aluminium & SS Welder",
    category: "tig",
    badge: "Aluminium & Exotic Alloys",
    amperage: "315A",
    dutyCycle: "60% @ 315A",
    phase: "Three Phase AC415V ± 15%",
    featured: true,
    wireSize: "Tungsten 1.6 - 4.0 mm / Plate up to 12mm",
    weight: "33 KG",
    cooling: "Forced Air / Dual High Flow Fans",
    insulation: "Class H",
    protection: "IP21S",
    warranty: "6 Month Company Warranty + Lifetime Service Support",
    winding: "100% Copper MOSFET High Frequency",
    description: "Advanced square-wave AC/DC Pulse TIG powerhouse on wheels. Specifically engineered for flawless welding of Aluminium alloys (0.8 - 12mm) and Stainless Steel (0.3 - 12mm) with AC balance cleaning control, up/down slope, pulse frequency, and post-flow gas timers.",
    features: [
      "AC Balance & Cleaning Control eliminates stubborn oxide film on Aluminium",
      "Pulse Frequency regulation prevents burn-through and heat warping on thin sheets",
      "Complete 2T/4T trigger functions with pre-gas, up-slope, down-slope, post-gas timers",
      "Wheeled chassis with dual cooling fans and rear MCB breaker for 415V supply"
    ],
    specs: {
      "Model": "TIG 315 BP AC/DC",
      "Input Voltage": "AC415V ± 15% (3 Phase)",
      "Input Power Capacity": "8.9 kVA",
      "No-Load Voltage": "60 V",
      "Output Current Range": "5A – 315A",
      "Rated Input Current": "13.6 A",
      "Arc Ignition": "High Frequency (HF) Non-Contact",
      "Plate Thickness (Aluminium)": "0.8 – 12.0 mm",
      "Plate Thickness (Steel/SS)": "0.3 – 12.0 mm",
      "Net Weight": "33 KG",
      "Dimensions": "22.5 x 14.5 x 18 Inch"
    },
    applications: ["Aluminium Tankers & Boats", "Automotive Intercoolers & Radiators", "Defense & Aviation Fittings", "Dies & Mold Repair"],
    image: "assets/images/products/tig-315bp-acdc.jpg",
    gallery: [
      "assets/images/products/tig-315bp-acdc.jpg",
      "assets/images/products/spec-sheet-tig-315.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-tig-315.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 7. TIG / ARC 200 (Single Phase MOSFET Precision Inverter) ---
  {
    id: "tig-arc-200",
    name: "TIG / ARC 200 Single Phase Precision Inverter",
    category: "tig",
    badge: "Precision Stainless Steel",
    amperage: "200A",
    dutyCycle: "60% @ 200A",
    phase: "Single Phase AC230V ± 15%",
    featured: true,
    wireSize: "Electrode 2.0 - 3.2 mm / Plate 0.3 - 6.0 mm",
    weight: "9 KG",
    cooling: "Forced Air Cooling",
    insulation: "Class F",
    protection: "IP21",
    warranty: "6 Month Company Warranty",
    winding: "100% Copper MOSFET",
    description: "Compact DC TIG and MMA dual-process inverter with non-contact HF arc ignition. Complete with denim-wrapped TIG torch, ceramic gas cups, and collets for sanitary food & pharma stainless steel fabrication.",
    features: [
      "Non-contact HF Arc Starting prevents tungsten contamination in the weld pool",
      "Smooth stable arc down to 7 Amps for ultra-thin sheet welding (0.3mm)",
      "Supplied with denim jacket flexible TIG torch and earth clamp",
      "Lightweight 9 KG body with sturdy carry handle"
    ],
    specs: {
      "Model": "TIG / ARC 200",
      "Input Voltage": "AC230V ± 15% (1 Phase)",
      "Input Power Capacity": "6 kVA",
      "No-Load Voltage": "56 V",
      "Output Current Range": "7A – 200A",
      "Arc Ignition": "HF (High Frequency)",
      "Power Factor": "0.73",
      "Net Weight": "9 KG",
      "Plate Thickness": "0.3 – 5.0 mm (TIG) / 1.0 – 6.0 mm (ARC)",
      "Electrode Capacity": "2.0 – 3.2 mm"
    },
    applications: ["Dairy & Food Equipment", "Pharma SS Fabrication", "Kitchen Exhausts & Sinks", "Bicycle & Motorcycle Frames"],
    image: "assets/images/products/tig-200-torch-set.jpg",
    gallery: [
      "assets/images/products/tig-200-torch-set.jpg",
      "assets/images/products/tig-200a-inverter.jpg",
      "assets/images/products/spec-sheet-tig-arc-200.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-tig-arc-200.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 8. ARC 200 G (Portable MMA Inverter Welder) ---
  {
    id: "arc-200-g",
    name: "ARC 200 G Portable Inverter MMA Stick Welder",
    category: "arc",
    badge: "Ultra-Lightweight 6 KG",
    amperage: "200A",
    dutyCycle: "60% @ 200A",
    phase: "Single Phase AC230V ± 15%",
    featured: true,
    wireSize: "Electrode 2.0 – 3.2 mm",
    weight: "6 KG",
    cooling: "Forced Air Cooling",
    insulation: "Class F",
    protection: "IP21",
    warranty: "6 Month Company Warranty",
    winding: "Copper Choke / Advanced IGBT",
    description: "Ultra-portable 6 KG inverter stick welder in bright industrial yellow casing. Plugs into standard 16A single-phase sockets and generator sets. Excellent for rooftop erection, gate grills, and plant maintenance.",
    features: [
      "Advanced IGBT technology with anti-stick and hot-start circuit",
      "Digital amperage readout for precise current control",
      "Smooth arc with deep penetration on 2.5mm and 3.15mm electrodes",
      "Weighs only 6 KG with ergonomic rubberized top handle"
    ],
    specs: {
      "Model": "ARC 200 G",
      "Input Voltage": "AC230V ± 15% (1 Phase)",
      "Input Power Capacity": "6 kVA",
      "No-Load Voltage": "58 V",
      "Output Current Range": "10A – 200A",
      "Rate Input Current": "43.6 A",
      "Power Factor": "0.73",
      "Net Weight": "6 KG",
      "Dimensions": "15.5 x 6 x 11.5 Inch",
      "Plate Thickness": "2.0 – 6.0 mm",
      "Electrode Capacity": "2.0 – 3.2 mm"
    },
    applications: ["On-Site Erection", "Maintenance & Repairs", "Rooftop Structures", "General Fabrications"],
    image: "assets/images/products/arc-200g-inverter.jpg",
    gallery: [
      "assets/images/products/arc-200g-inverter.jpg",
      "assets/images/products/arc-200g-front.jpg",
      "assets/images/products/spec-sheet-arc-200g.jpg"
    ],
    specSheet: "assets/images/products/spec-sheet-arc-200g.jpg",
    priceRange: "Factory Direct Pricing"
  },

  // --- 9. CO2 / MAG WIRE FEEDER (MODEL DZ-10) ---
  {
    id: "wire-feeder-dz10",
    name: "Heavy Duty CO2 / MAG Wire Feeder Unit (Model DZ-10)",
    category: "mig",
    badge: "Industrial Feeder",
    amperage: "Supports up to 500A",
    dutyCycle: "100% @ 400A / 60% @ 500A",
    phase: "DC 24V / 36V Feeder Motor",
    featured: false,
    wireSize: "0.8 - 1.6 mm Solid & Flux Cored Wire",
    weight: "9.5 KG",
    cooling: "Heavy Open Steel Roll Cage",
    insulation: "Class H Motor",
    protection: "IP2X",
    warranty: "6 Month Company Warranty",
    winding: "Copper Wound Geared Motor",
    description: "Rugged standalone yellow wire feeder unit with 4-roll geared drive mechanism, euro torch connector, and remote control box for voltage and wire feeding speed regulation from distance.",
    features: [
      "Heavy duty all-metal gear motor with smooth 1.5 - 20 m/min speed",
      "Adjustable wire spool tension and pressure arm",
      "Standard Euro connection compatible with all MIG torches",
      "Trolley carry handle with cable bracket"
    ],
    specs: {
      "Model": "DZ-10 CO2/MAG Wire Feeder",
      "Motor Voltage": "DC 24V / 36V",
      "Applicable Current": "400A @ 100% / 500A @ 60%",
      "Wire Diameter": "0.8 – 1.6 mm",
      "Wire Feeding Speed": "1.5 – 20 m/min",
      "Torch Connection": "Standard Euro Socket"
    },
    applications: ["Crane & Gantry Work", "Boiler Fabrication", "Long-Span PEB Welding", "Structural Beams"],
    image: "assets/images/products/wire-feeder-dz10.jpg",
    gallery: [
      "assets/images/products/wire-feeder-dz10.jpg",
      "assets/images/products/wire-feeder-side.jpg"
    ],
    priceRange: "Factory Direct Pricing"
  },

  // --- 10. INDUSTRIAL WELDING ACCESSORIES COMPLETE KIT ---
  {
    id: "welding-accessories-complete-kit",
    name: "Industrial MIG Welding Accessories & Regulator Kit",
    category: "accessories",
    badge: "Complete Setup Kit",
    amperage: "Rated up to 400A",
    dutyCycle: "Heavy Duty",
    phase: "Universal",
    featured: false,
    wireSize: "Compatible with 0.8 - 1.6mm",
    weight: "7.5 KG",
    cooling: "Gas Cooled",
    insulation: "HOFR Rubber Insulated",
    protection: "Standard Indian Industrial Spec",
    warranty: "6 Month Guarantee",
    winding: "100% Pure Copper Leads",
    description: "Complete professional welding accessory bundle containing Euro-fitting MIG torch, brass CO2 flowmeter regulator with 36V electric heater, heavy-duty earth clamp with flexible pure copper cable, and control lead.",
    features: [
      "Binzel-style heavy-duty MIG torch with euro connector and spring relief",
      "Solid brass CO2 flowmeter regulator with built-in 36V anti-icing pre-heater",
      "Heavy zinc-plated copper jaw ground earth clamp",
      "Multi-core industrial control cable with quick blue aviation plug"
    ],
    specs: {
      "Torch": "MB 36KD Euro MIG Torch (3m/5m)",
      "Regulator": "CO2 Gas Flowmeter with 36V Heater",
      "Earth Clamp": "Heavy Duty 500A Brass/Copper Contact",
      "Cable": "100% Pure Annealed Copper HOFR Cable"
    },
    applications: ["New Machine Commissioning", "Workshop Replacement", "Site Erection Setups"],
    image: "assets/images/products/welding-accessories-kit.jpg",
    gallery: [
      "assets/images/products/welding-accessories-kit.jpg"
    ],
    priceRange: "Factory Direct Pricing"
  }
];

// --- CONSUMABLES & SPARES WITH REAL IMAGES ---
const CONSUMABLES_DATA = [
  {
    id: "consumables-full-kit",
    title: "Complete Consumables Maintenance Kit",
    brochureName: "TORCH SPARES KIT",
    category: "consumable",
    tagline: "Nozzles, Tips, Holders & Ceramic Diffusers",
    image: "assets/images/products/consumables-full-kit.jpg",
    highlight: "Real Stock Image",
    description: "Complete MIG torch front-end consumable set comprising pure copper gas nozzle, CuCrZr contact tips, brass tip holder, and white ceramic gas diffuser for Binzel & Super Arc torches.",
    specPoints: [
      "Chrome/Nickel plated & pure copper spatter-resistant gas nozzle",
      "Precision-machined CuCrZr 1.0mm & 1.2mm contact tips",
      "Solid brass contact tip holder with gas diffuser seat",
      "Thermal shock-resistant white ceramic gas diffuser"
    ],
    priceTag: "Wholesale Pack Available"
  },
  {
    id: "copper-gas-nozzles",
    title: "Pure Copper & Chrome Gas Nozzles",
    brochureName: "NOZZLE",
    category: "consumable",
    tagline: "Heavy-Wall Conical & Cylindrical Nozzles",
    image: "assets/images/products/consumables-gas-nozzles.jpg",
    highlight: "Real Stock Image",
    description: "Heavy-wall electrolytic pure copper and mirror chrome-plated gas nozzles designed for MB 15AK, MB 24KD, MB 36KD, and MB 501D torches to resist spatter adhesion and deliver laminar shielding gas flow.",
    specPoints: [
      "Available in Conical, Cylindrical, and Bottle Taper profiles",
      "High thermal conductivity keeps torch swan neck cool",
      "Mirror chrome plating prevents hot weld spatter from sticking",
      "Precision internal brass threads ensure tight gas seal"
    ],
    priceTag: "Ready Stock in Bhosari"
  },
  {
    id: "tips-holders-diffusers-pack",
    title: "Contact Tips, Tip Holders & Diffusers Kit",
    brochureName: "TIP & TIP HOLDER",
    category: "consumable",
    tagline: "5 Tips + 5 Holders + 4 Ceramic Diffusers",
    image: "assets/images/products/consumables-tips-holders-diffusers.jpg",
    highlight: "Real Stock Image",
    description: "Ready-to-use workshop maintenance pack featuring 5 premium copper contact tips (0.8mm/1.0mm/1.2mm), 5 heavy forged brass tip holders with right-hand threading, and 4 high-temperature ceramic diffusers.",
    specPoints: [
      "5x Precision CuCrZr contact tips with mirror-smooth wire bore",
      "5x Solid brass tip holders with gas diffuser mounting rings",
      "4x Ceramic diffusers rated to 1200°C preventing torch burn-outs",
      "Perfect replacement pack for daily fabrication lines"
    ],
    priceTag: "Fast Selling Pack"
  },
  {
    id: "north-mig-torch",
    title: "North Premium MB 36KD Heavy Duty MIG Torch",
    brochureName: "TORCH",
    category: "consumable",
    tagline: "Binzel Compatible Ergonomic Handle with Euro Fitting",
    image: "assets/images/products/consumables-mig-torch.jpg",
    highlight: "Real Stock Image",
    description: "Heavy-duty 340A air-cooled MIG torch with high-flex rubberized coaxial power cable, heavy-duty steel spring strain reliefs, euro connector, and insulated trigger switch.",
    specPoints: [
      "Available in 3 Meter, 4 Meter, and 5 Meter cable lengths",
      "Standard Euro adapter fits Super Arc and all major MIG machines",
      "High flexibility rubber cable reduces operator wrist fatigue",
      "Supplied in authentic factory packaging with manufacturer warranty"
    ],
    priceTag: "Heavy Duty Industrial"
  }
];

// Ensure global window exposure
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.CONSUMABLES_DATA = CONSUMABLES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PRODUCTS_DATA,
    CONSUMABLES_DATA
  };
}
