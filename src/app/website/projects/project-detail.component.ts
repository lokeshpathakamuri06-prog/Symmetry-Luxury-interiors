import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface ProjectDetail {
  id: number;
  name: string;
  category: string;
  location: string;
  year: number;
  area: string;
  duration: string;
  client: string;
  tagline: string;
  description: string[];
  heroImage: string;
  gallery: { src: string; caption: string }[];
  scope: { icon: string; title: string; detail: string }[];
  materials: { category: string; items: string[] }[];
  highlights: string[];
}

const PROJECTS: ProjectDetail[] = [
  {
    id: 1,
    name: 'The Banjara Residence',
    category: 'Residential',
    location: 'Hyderabad',
    year: 2024,
    area: '6,200 sq ft',
    duration: '8 months',
    client: 'Private Client',
    tagline: 'A home that breathes warmth, elegance and considered living.',
    description: [
      'The Banjara Residence is a 6,200 sq ft private home in one of Hyderabad\'s most prestigious neighbourhoods. The brief called for a home that would feel both luxurious and genuinely liveable — one that reflected the family\'s global sensibility while remaining rooted in the warmth of Indian domesticity.',
      'We developed a design language centred on natural materials, restrained colour and deliberate scale. American walnut joinery, hand-plastered walls, linen upholstery and locally sourced stone create a palette that is rich without being ostentatious. Every room is composed around a central object — a dining table, a reading chair, a sculptural lamp — that anchors the space and gives it meaning.',
      'The project included a full gut renovation of the existing structure, complete interior architecture, bespoke furniture design and a comprehensive art and accessory programme sourced from studios across India and Italy.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=85',
    gallery: [
      { src:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85', caption:'Living Room — Custom walnut joinery and Italian linen sofas' },
      { src:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85', caption:'Master Bedroom — Hand-plastered walls with bespoke bedframe' },
      { src:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=85', caption:'Dining Room — Marble-top table with Sella chairs' },
      { src:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85', caption:'Study — Floor-to-ceiling bookshelf with integrated lighting' },
      { src:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=85', caption:'Family Lounge — Curved sofa with travertine coffee table' },
      { src:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=900&q=85', caption:'Entry Hall — Statement pendant and hand-knotted rug' }
    ],
    scope: [
      { icon:'bi-layout-text-window', title:'Interior Architecture', detail:'Full spatial planning, ceiling design, partition layouts and joinery drawings across all rooms.' },
      { icon:'bi-palette2',            title:'Design & Concept',     detail:'Mood boards, material palettes, furniture layouts and 3D visualisations for client approval.' },
      { icon:'bi-tools',               title:'Custom Furniture',     detail:'Bespoke sofa, dining table, bed frames, wardrobes and study furniture manufactured to our specifications.' },
      { icon:'bi-globe2',              title:'Global Sourcing',      detail:'Lighting from Italy, rugs from Jaipur, decorative objects from Bali and furniture hardware from Germany.' },
      { icon:'bi-lightbulb',           title:'Lighting Design',      detail:'Layered lighting scheme with architectural coves, pendant statements and task lighting throughout.' },
      { icon:'bi-stars',               title:'Art & Styling',        detail:'Curated art programme, sculpture placement, soft furnishings and complete interior styling at handover.' }
    ],
    materials: [
      {
        category: 'Surfaces & Finishes',
        items: ['Bianco Carrara marble (kitchen island and bathrooms)', 'Indian Kota stone (flooring — ground level)', 'Hand-applied Italian stucco (feature walls)', 'Teak hardwood (flooring — upper level)', 'Micro-cement (basement and utility)']
      },
      {
        category: 'Joinery & Furniture',
        items: ['American walnut (all cabinetry and joinery)', 'Solid brass hardware (Valli & Valli, Italy)', 'Full-grain Italian leather (master bedroom seating)', 'Belgian linen (principal sofas and curtains)', 'Powder-coated mild steel (study shelving frames)']
      },
      {
        category: 'Textiles & Soft Furnishings',
        items: ['Hand-knotted wool rug (entry hall — Jaipur Rugs)', 'Silk cushions (living room — sourced in Bali)', 'Linen drapes (all principal rooms)', 'Velvet throws (bedrooms — Dedar, Italy)', 'Outdoor teak and Sunbrella fabric (terrace)']
      }
    ],
    highlights: ['6,200 sq ft across 4 levels','8-month full-scope delivery','100% bespoke furniture programme','Art collection of 18 commissioned pieces']
  },
  {
    id: 6,
    name: 'The Executive HQ',
    category: 'Commercial',
    location: 'Bengaluru',
    year: 2024,
    area: '18,000 sq ft',
    duration: '6 months',
    client: 'Confidential — Technology Sector',
    tagline: 'A workspace that communicates authority, inspires focus and reflects brand identity.',
    description: [
      'The Executive HQ is the new headquarters of a leading Indian technology company — 18,000 sq ft of workspace designed to communicate the organisation\'s ambitions while fostering the focus and wellbeing of its 200-person team.',
      'The design brief called for a departure from the typical tech-office aesthetic of exposed brick and bean bags. Instead, we developed a palette that draws on the language of premium hospitality — considered materiality, human-scaled spaces and layered lighting — applied to the rigour of a working environment.',
      'Key spaces include an executive boardroom with a 16-seat custom conference table, a client reception and hospitality lounge, open-plan workspaces, focus rooms, a wellness zone and a rooftop terrace.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
    gallery: [
      { src:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=85', caption:'Main Reception — Brand identity integrated through materiality' },
      { src:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85', caption:'Executive Boardroom — 16-seat custom table in American walnut' },
      { src:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=85', caption:'Client Lounge — Hospitality-grade seating and lighting' },
      { src:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85', caption:'Open Workspace — Ergonomic benching with acoustic panels' },
      { src:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85', caption:'Wellness Zone — Biophilic design with living wall installation' }
    ],
    scope: [
      { icon:'bi-layout-text-window', title:'Space Planning',       detail:'Full floor-plate planning for 200 staff across open-plan, focus, collaboration and executive zones.' },
      { icon:'bi-palette2',            title:'Brand Integration',   detail:'Company brand colour, texture and identity woven through every material selection and detail.' },
      { icon:'bi-tools',               title:'Custom Furniture',    detail:'Bespoke conference table, reception desk, executive seating and collaboration furniture.' },
      { icon:'bi-soundwave',           title:'Acoustic Design',     detail:'Acoustic panels, ceiling baffles and room-within-room design to manage noise across all zones.' },
      { icon:'bi-lightbulb',           title:'Lighting Design',     detail:'Circadian-rhythm lighting system that adapts from energising morning to calm evening output.' },
      { icon:'bi-tree',                title:'Biophilic Design',    detail:'Living wall installation, planter integration and natural material palette throughout.' }
    ],
    materials: [
      {
        category: 'Surfaces & Finishes',
        items: ['Engineered oak flooring (all open areas)', 'Polished concrete (breakout and circulation)', 'White Thassos marble (reception desk and feature wall)', 'Fluted glass partitions (executive zone)', 'Acoustic plaster (all ceilings)']
      },
      {
        category: 'Furniture & Joinery',
        items: ['American walnut (boardroom table and joinery)', 'Powder-coated steel (open-plan workstations)', 'Full-grain leather (executive seating — Poltrona Frau)', 'Kvadrat fabric (acoustic panels and task seating)', 'Brushed brass (all hardware and fittings)']
      },
      {
        category: 'Biophilic & Wellness',
        items: ['Living wall system (30 sqm — moss and fern)', 'FSC-certified teak (terrace decking)', 'Natural hemp rope (feature installation)', 'Bamboo panels (wellness zone)', 'Linen and wool blends (lounge soft furnishings)']
      }
    ],
    highlights: ['18,000 sq ft across 3 floors','200-person workspace','6-month fit-out delivery','LEED Gold aligned design']
  },
  {
    id: 10,
    name: 'The Grand Retreat',
    category: 'Hospitality',
    location: 'Goa',
    year: 2024,
    area: '32,000 sq ft',
    duration: '14 months',
    client: 'The Grand Retreat Hotels Pvt. Ltd.',
    tagline: 'A resort that captures the soul of coastal Goa with the refinement of global luxury.',
    description: [
      'The Grand Retreat is a 45-key boutique resort on the North Goa coastline — a project that asked us to translate the layered beauty of Goa\'s Portuguese-Indian heritage into a contemporary luxury experience without resorting to pastiche.',
      'We developed a design narrative around the concept of "coastal archaeology" — unearthing the textures, colours and materials of the land itself. Laterite stone, handmade terracotta tiles, cane weave and locally sourced hardwoods form the material foundation, layered with curated contemporary furniture and lighting from our global sourcing network.',
      'The project encompassed 45 guest rooms and suites, a signature restaurant and bar, a spa and wellness pavilion, two pools, event facilities and all public and arrival areas.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85',
    gallery: [
      { src:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85', caption:'Pool Villa — Outdoor living with ocean views' },
      { src:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85', caption:'Guest Suite — Canopy bed with hand-woven textiles' },
      { src:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=85', caption:'Signature Restaurant — Laterite arches and rattan pendants' },
      { src:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85', caption:'Arrival Pavilion — Double-height space with living wall' },
      { src:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85', caption:'Spa — Stone soaking bath with mood lighting' },
      { src:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85', caption:'Pool Deck — Teak loungers with custom parasols' }
    ],
    scope: [
      { icon:'bi-layout-text-window', title:'Interior Architecture', detail:'All guest rooms, suites, restaurant, bar, spa, arrival pavilion and public areas.' },
      { icon:'bi-palette2',            title:'Brand Experience',     detail:'Design language, guest journey mapping and sensory experience design from arrival to departure.' },
      { icon:'bi-tools',               title:'FF&E Programme',       detail:'Full furniture, fixtures and equipment specification, procurement and installation for all 45 keys and public areas.' },
      { icon:'bi-globe2',              title:'Global Sourcing',      detail:'Lighting from Bali, textiles from Rajasthan, furniture from Vietnam, decorative objects from Italy.' },
      { icon:'bi-flower1',             title:'Landscape Integration',detail:'Interior-exterior flow design, pool deck furniture, outdoor dining and terrace landscaping.' },
      { icon:'bi-lightbulb',           title:'Lighting Design',      detail:'Hospitality lighting scheme with architectural, decorative and landscape elements across the entire site.' }
    ],
    materials: [
      {
        category: 'Architecture & Surfaces',
        items: ['Goa laterite stone (exterior walls and feature arches)', 'Handmade Athangudi tiles (restaurant floors)', 'Locally quarried black basalt (spa floors)', 'Lime wash plaster (all guest room walls)', 'Reclaimed teak (ceiling beams and feature joinery)']
      },
      {
        category: 'Furniture & Fixtures',
        items: ['Teak and rattan (outdoor furniture — custom)', 'Hand-forged iron (bed frames and light fixtures)', 'Cane weave (headboards and feature panels)', 'Brass and bronze (all hardware)', 'Mango wood (case goods and minibar cabinets)']
      },
      {
        category: 'Textiles & Soft Furnishings',
        items: ['Hand-block printed cotton (guest room bedding)', 'Ikat weave (cushions and throws — sourced in Pochampally)', 'Linen and jute blend (curtains and upholstery)', 'Hand-knotted dhurrie rugs (all guest rooms)', 'Outdoor performance fabrics (Sunbrella — pool and terrace)']
      }
    ],
    highlights: ['45 keys across 32,000 sq ft','14-month full FF&E programme','100% locally inspired material palette','Winner — Hospitality Design Award 2024']
  }
];

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project!: ProjectDetail;
  lightboxOpen = false;
  lightboxIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = PROJECTS.find(p => p.id === id) ?? PROJECTS[0];
  }

  openLightbox(i: number) { this.lightboxIndex = i; this.lightboxOpen = true; }
  closeLightbox()          { this.lightboxOpen = false; }
  prevSlide()              { this.lightboxIndex = (this.lightboxIndex - 1 + this.project.gallery.length) % this.project.gallery.length; }
  nextSlide()              { this.lightboxIndex = (this.lightboxIndex + 1) % this.project.gallery.length; }
}
