import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-global-sourcing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './global-sourcing.component.html',
  styleUrl: './global-sourcing.component.scss'
})
export class GlobalSourcingComponent {

  sources = [
    {
      id: 'italy',
      country: 'Italy',
      flag: '🇮🇹',
      tagline: 'The birthplace of modern design.',
      description: 'Italy remains the undisputed centre of world furniture design. From the ateliers of Milan to the workshops of Tuscany, Italian makers combine centuries of craft tradition with rigorous contemporary design thinking. We source from established manufacturers as well as independent studios whose work is rarely seen outside the European market.',
      heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80'
      ],
      products: ['Luxury sofas & seating', 'Marble and stone surfaces', 'Brass and bronze fixtures', 'Hand-blown Murano glass', 'Premium leather upholstery', 'Designer lighting (Flos, Artemide)'],
      color: '#C5A55A'
    },
    {
      id: 'china',
      country: 'China',
      flag: '🇨🇳',
      tagline: 'Scale, craft and unmatched manufacturing precision.',
      description: 'China\'s furniture industry has matured enormously over the past two decades. Our carefully selected manufacturing partners in Guangdong, Zhejiang and Shandong offer a combination of technical capability, material breadth and competitive pricing that is simply unmatched. We work exclusively with factories that meet our quality and ethical standards.',
      heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1000&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
        'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80',
        'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80'
      ],
      products: ['Upholstered beds & bedroom furniture', 'Lacquered and veneer case goods', 'Custom dining furniture', 'Office furniture systems', 'Fabric and leather sofas', 'Decorative ceramic and porcelain'],
      color: '#B84040'
    },
    {
      id: 'malaysia',
      country: 'Malaysia',
      flag: '🇲🇾',
      tagline: 'Tropical hardwoods and contemporary craft.',
      description: 'Malaysia is one of Asia\'s most sophisticated furniture manufacturing centres, with a strong tradition in solid wood construction and a growing community of contemporary designers working with tropical materials. We source both factory-produced ranges and artisan-made pieces from studios in Kuala Lumpur, Penang and Johor.',
      heroImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80'
      ],
      products: ['Solid rubber wood and meranti furniture', 'Contemporary teak collections', 'Woven rattan seating', 'Custom joinery and cabinets', 'Outdoor furniture sets', 'Handcrafted wooden accessories'],
      color: '#2D7A45'
    },
    {
      id: 'vietnam',
      country: 'Vietnam',
      flag: '🇻🇳',
      tagline: 'Artisan quality at remarkable value.',
      description: 'Vietnam has emerged as one of the most exciting furniture sourcing destinations in Southeast Asia. An extraordinary pool of skilled craftspeople, combined with abundant natural materials — rattan, bamboo, water hyacinth and tropical hardwoods — produces furniture of genuine character and quality. Ho Chi Minh City and Hanoi are home to both factory producers and independent designers of considerable talent.',
      heroImage: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80'
      ],
      products: ['Rattan and bamboo furniture', 'Water hyacinth baskets & storage', 'Solid acacia dining sets', 'Lacquerware decorative objects', 'Hand-embroidered textiles', 'Contemporary lounge furniture'],
      color: '#D4782A'
    },
    {
      id: 'bali',
      country: 'Bali',
      flag: '🇮🇩',
      tagline: 'Soul, texture and spiritual craft.',
      description: 'Bali occupies a unique position in the world of interior sourcing. The island\'s deep tradition of spiritual craftsmanship produces objects — carved wood, woven textiles, hand-painted ceramics and stone sculpture — that carry an energy and authenticity impossible to replicate industrially. We travel to Bali twice annually to discover makers and source pieces directly from the studios and workshops of Ubud, Seminyak and Kuta.',
      heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
        'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
      ],
      products: ['Hand-carved teak sculptures', 'Woven pendant lighting', 'Batik and ikat textiles', 'Stone garden ornaments', 'Painted terracotta ceramics', 'Tropical outdoor furniture'],
      color: '#7B5EA7'
    }
  ];

  process = [
    { step:'01', title:'Brief & Budget',      desc:'We start by understanding your project needs, product requirements and budget parameters.' },
    { step:'02', title:'Market Research',      desc:'Our team identifies the best-fit suppliers, studios and manufacturers for your specification.' },
    { step:'03', title:'Factory Visits',       desc:'We visit workshops and factories in person to verify quality, capacity and ethical standards.' },
    { step:'04', title:'Sample Approval',      desc:'Physical samples are shipped to Hyderabad for your review and sign-off before orders are placed.' },
    { step:'05', title:'Order & QC',           desc:'We place, track and inspect your order, conducting quality checks before despatch.' },
    { step:'06', title:'Logistics & Delivery', desc:'We manage all import documentation, customs clearance and last-mile delivery to your site.' }
  ];

  stats = [
    { number:'25+', label:'Years Sourcing Globally' },
    { number:'5',   label:'Countries' },
    { number:'200+',label:'Trusted Suppliers' },
    { number:'500+',label:'Projects Furnished' }
  ];
}
