import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services = [
    {
      id: 'residential',
      label: '01',
      title: 'Residential Interiors',
      subtitle: 'Your Home, Reimagined',
      description: 'We design homes that are a true reflection of the people who live in them. From intimate apartments to sprawling villas, we bring together architecture, bespoke furniture and curated materials to create living spaces that are as functional as they are beautiful.',
      features: ['Concept Design & Space Planning','Material & Finish Selection','Custom Furniture Design','Lighting Design','Styling & Accessorising'],
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80',
      alt: 'Residential interior design',
      reverse: false
    },
    {
      id: 'commercial',
      label: '02',
      title: 'Commercial Interiors',
      subtitle: 'Workspaces That Inspire',
      description: 'Great workspaces fuel great work. We design offices, retail spaces and corporate environments that communicate brand identity, foster productivity and leave a lasting impression on clients and employees alike.',
      features: ['Office & Workspace Design','Retail & Showroom Interiors','Corporate Branding Through Design','Ergonomic Space Planning','Project Management'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
      alt: 'Commercial interior design',
      reverse: true
    },
    {
      id: 'hospitality',
      label: '03',
      title: 'Hospitality Interiors',
      subtitle: 'Experiences That Endure',
      description: 'Hospitality spaces live or die by the experience they create. We design hotels, resorts, restaurants and spas that deliver atmosphere, comfort and brand story — spaces guests remember long after they leave.',
      features: ['Hotel & Resort Design','Restaurant & Bar Interiors','Spa & Wellness Spaces','Guest Room & Suite Design','Public Area & Lobby Design'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
      alt: 'Hospitality interior design',
      reverse: false
    },
    {
      id: 'turnkey',
      label: '04',
      title: 'Turnkey Projects',
      subtitle: 'One Partner, Complete Solution',
      description: 'From the first sketch to the final installation, we manage every aspect of your interior project. Our turnkey service eliminates the complexity of coordinating multiple contractors — you hand us the keys, we deliver a finished space.',
      features: ['End-to-End Project Management','Contractor & Vendor Coordination','Site Supervision & Quality Control','Timeline & Budget Management','Handover & After-Care'],
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
      alt: 'Turnkey interior project',
      reverse: true
    },
    {
      id: 'furniture',
      label: '05',
      title: 'Customised Furniture',
      subtitle: 'Built For Your Space',
      description: 'When off-the-shelf simply won\'t do, we design and manufacture furniture crafted specifically for your space and lifestyle. Every piece is built to your exact dimensions, finishes and requirements — unique, by design.',
      features: ['Custom Sofa & Seating Design','Bespoke Bedroom Furniture','Dining Tables & Chairs','Storage & Shelving Solutions','Outdoor & Garden Furniture'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      alt: 'Custom furniture design',
      reverse: false
    },
    {
      id: 'sourcing',
      label: '06',
      title: 'Furniture Sourcing',
      subtitle: 'The World\'s Best, Delivered',
      description: 'With 25+ years of relationships across Italy, China, Malaysia, Vietnam and Bali, we give our clients access to exceptional furniture and decorative pieces that are simply unavailable through conventional retail channels.',
      features: ['International Procurement','Factory-Direct Pricing','Quality Inspection','Logistics & Import Handling','Exclusive Designer Pieces'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
      alt: 'Furniture sourcing',
      reverse: true
    },
    {
      id: 'lighting',
      label: '07',
      title: 'Lighting & Decor',
      subtitle: 'Light That Transforms',
      description: 'Lighting is the invisible hand that shapes how a space feels. We design comprehensive lighting schemes that layer ambient, task and accent light to create atmosphere, highlight architecture and elevate every interior. Our decor curation completes the story.',
      features: ['Architectural Lighting Design','Ambient, Task & Accent Layering','Statement Lighting Specification','Art & Accessory Curation','Soft Furnishings & Textiles'],
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=900&q=80',
      alt: 'Lighting and decor design',
      reverse: false
    }
  ];

  process = [
    {step:'01',title:'Consultation',description:'We begin with an in-depth conversation to understand your vision, needs and budget.'},
    {step:'02',title:'Concept Design',description:'Our team develops a design concept with mood boards, layouts and material palettes.'},
    {step:'03',title:'Detailed Design',description:'Full technical drawings, specifications and sourcing plans are prepared and approved.'},
    {step:'04',title:'Execution',description:'We manage every contractor, supplier and installer to deliver your project flawlessly.'},
    {step:'05',title:'Handover',description:'We style, inspect and hand over your completed space — ready to live or work in.'}
  ];
}
