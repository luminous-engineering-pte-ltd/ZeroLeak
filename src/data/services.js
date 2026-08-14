const img = (q) => `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=75`;

const serviceSeed = [
  ['01', 'Roofing', 'roofing', 'Roof installation, restoration, insulation and repair for Singapore properties.', ['Polycarbonate Roofing', 'Glass Roofing', 'Roof Tile Supply', 'Roof Tile Coating', 'Roof Restoration, Singapore', 'Roof and Gutter Repair', 'New Roof Construction', 'Roof Remodeling', 'Roof Insulation', 'Metal Roofing']],
  ['02', 'Waterproofing', 'waterproofing', 'Membrane, bathroom, balcony, basement and commercial waterproofing solutions.', ['Nano Technology', 'Commercial Waterproofing', 'Waterproofing Membrane', 'Residential Waterproofing', 'No Hacking Waterproofing', 'Balconies Waterproofing', 'Bathroom Waterproofing', 'Swimming Pool Waterproofing', 'Basement Waterproofing']],
  ['03', 'Grouting & Injection', 'grouting-injection', 'PU, epoxy and cement grouting for active leaks, voids and cracks.', ['PU Grouting and Injection', 'Epoxy Injection', 'Epoxy Grouting', 'Underwater Epoxy Grouting', 'Cement Grouting', 'Tunneling']],
  ['04', 'Concrete Repair', 'concrete-repair', 'Practical concrete repair for slabs, pavements, walls and structural defects.', ['Pavement Repair', 'Slab Repair', 'Wall Crack Repair', 'Structural Repairs']],
  ['05', 'Water Leakages', 'water-leakages', 'Leak diagnosis and repair for ceilings, roofs and walls.', ['Ceiling Leakage', 'Roof Leakage', 'Wall Leakage']],
  ['06', 'Underground Services', 'underground-services', 'Plumbing support for residential and commercial building environments.', ['Residential Plumbing Singapore', 'Commercial Plumbing Singapore']],
  ['07', 'Awning and Canopy', 'awning-canopy', 'Polycarbonate, glass and aluminium composite panel awning solutions.', ['Polycarbonate Awning', 'Glass Awning', 'Aluminium Composite Panel']],
  ['08', 'Structural Strengthening', 'structural-strengthening', 'Strengthening systems for columns, beams, slabs and specialist structures.', ['Fibre Carbon Wrapping', 'FRP System', 'FRG System', 'Flexural Strengthening', 'Shear Strengthening', 'Confinement of Columns', 'Seismic Upgrading', 'Technical Services']],
  ['09', 'Other', 'other', 'Specialist support for inspection, access, safety surfaces and surface restoration.', ['Thermal Imaging', 'Rope Access Works', 'Anti Slip', 'Algae & Mould Removal']]
];

export const slugify = (value) => value.toLowerCase().replace(/&/g, 'and').replace(/,/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const services = serviceSeed.map(([number, name, slug, description, subs]) => ({
  number,
  name,
  slug,
  description,
  icon: number,
  image: img(slug),
  benefits: [
    'Careful inspection before recommending the repair method',
    'Professional-grade materials selected for the site condition',
    'Clear scope, practical sequencing and tidy site practices',
    'Suitable for residential, commercial and industrial properties'
  ],
  applications: ['Landed homes', 'Condominiums', 'Commercial buildings', 'Offices', 'Industrial properties', 'Residential properties'],
  process: ['Inspection', 'Diagnosis', 'Recommendation', 'Execution', 'Final inspection'],
  faqs: [
    ['How do you start the work?', `ZeroLeak begins ${name.toLowerCase()} work with a site review to understand the visible symptoms and likely source.`],
    ['Can this service suit occupied properties?', 'Where practical, the recommendation considers access, disruption, surface condition and the property use.'],
    ['How do I request a quotation?', 'Share photos, property details and preferred timing through the quote form or WhatsApp.']
  ],
  subServices: subs.map((sub) => ({
    name: sub,
    slug: slugify(sub),
    description: `${sub} support delivered with proper inspection, measured recommendations and professional workmanship for Singapore properties.`,
    benefits: ['Focused diagnosis', 'Appropriate material selection', 'Clean execution', 'Practical after-work review'],
    applications: ['Homes', 'Commercial properties', 'Wet areas', 'Building envelopes']
  }))
}));

export const featuredSolutions = [
  ['Bathroom Waterproofing', 'waterproofing', 'bathroom-waterproofing'],
  ['Roof Leakage Repair', 'water-leakages', 'roof-leakage'],
  ['Basement Waterproofing', 'waterproofing', 'basement-waterproofing'],
  ['PU Grouting', 'grouting-injection', 'pu-grouting-and-injection'],
  ['Wall Crack Repair', 'concrete-repair', 'wall-crack-repair'],
  ['Thermal Imaging', 'other', 'thermal-imaging']
];

export const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Blog', '/blog'],
  ['About', '/about'],
  ['Contact', '/contact']
];
