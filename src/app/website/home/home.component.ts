import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { label: 'Residential Design', heading: 'Where Luxury Meets', headingEm: 'Timeless Design', sub: 'Transforming spaces into extraordinary experiences through refined design and exceptional craftsmanship.' },
    { label: 'Interior Architecture', heading: 'Spaces That', headingEm: 'Inspire Living', sub: 'Bespoke interiors shaped by your vision — from first sketch to a beautifully finished space.' },
    { label: 'Bedroom & Private Spaces', heading: 'Refined Comfort,', headingEm: 'Effortless Elegance', sub: 'Every room designed with precision, warmth and the materials that define true luxury.' },
    { label: 'Dining & Entertaining', heading: 'Curated Spaces', headingEm: 'For Every Moment', sub: 'Dining and gathering rooms crafted to bring people together beautifully.' },
  ];
  heroImages = [
    'assets/images/HAJ0002-1.jpeg',
    'assets/images/HAJ0002-2.jpeg',
    'assets/images/HAJ0002-3.jpeg',
    'assets/images/HAJ0002-4.jpeg',
    'assets/images/HAJ0008-1.jpeg'
  ];
  activeSlide = 0;
  prevSlide = -1;
  animating = false;
  private autoTimer: ReturnType<typeof setInterval> | null = null;
  readonly autoInterval = 5000;

  collections = [
    { number: '01', name: 'Living', eyebrow: 'A considered welcome', description: 'Layered seating, sculptural tables and beautifully balanced spaces designed for everyday living.', image: 'assets/images/HT0008-2.jpeg' },
    { number: '02', name: 'Dining', eyebrow: 'Made for gathering', description: 'Statement tables, tactile finishes and thoughtful lighting that turn every meal into an occasion.', image: 'assets/images/HAJ0002-2.jpeg' },
    { number: '03', name: 'Bedroom', eyebrow: 'Private sanctuary', description: 'Restful palettes, tailored joinery and the quiet details that make a room feel entirely yours.', image: 'assets/images/HAJ0002-3.jpeg' },
    { number: '04', name: 'Lounge', eyebrow: 'Comfort with character', description: 'Inviting forms and rich materials arranged for effortless conversation and slow moments.', image: 'assets/images/HAJ0003-1.jpeg' },
    { number: '05', name: 'Outdoor', eyebrow: 'Open-air living', description: 'Refined outdoor pieces that connect comfort, craftsmanship and the natural surroundings.', image: 'assets/images/HAJ0003-2.jpeg' },
    { number: '06', name: 'Lighting & Decor', eyebrow: 'The finishing layer', description: 'Expressive lighting and distinctive objects that bring depth, warmth and personality to a space.', image: 'assets/images/HAJ0003-3.jpeg' }
  ];
  activeCollection = 0;
  setCollection(index: number) { this.activeCollection = index; }
  categories = [
    { name: 'Luxury Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' },
    { name: 'Lounge Chairs', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
    { name: 'Dining Furniture', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80' },
    { name: 'Bedroom Furniture', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80' },
    { name: 'Coffee Tables', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80' },
    { name: 'Lighting', image: 'assets/images/HAJ0003-3.jpeg' }
  ];
  products = [
    { name: 'Luna Lounge Chair', category: 'Lounge Chairs', price: 85000,  image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { name: 'Arco Dining Table', category: 'Dining',        price: 145000, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
    { name: 'Linea Sofa',        category: 'Sofas',         price: 195000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { name: 'Forma Side Table',  category: 'Tables',        price: 45000,  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' }
  ];
  projects = [
    { name: 'The Modern Residence', category: 'Residential', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80' },
    { name: 'The Executive Office', category: 'Commercial',  location: 'Bengaluru', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
    { name: 'The Grand Retreat',    category: 'Hospitality', location: 'Goa',       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80' }
  ];
  sourcingSlides = [
    { country: 'Italy',    flag: '🇮🇹', tagline: 'The Art of Fine Living',       desc: 'Premium sofas, marble surfaces, designer lighting and hand-crafted leather from Italian ateliers.',           image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80' },
    { country: 'China',    flag: '🇨🇳', tagline: 'Scale, Craft & Precision',     desc: 'Custom case goods, lacquered furniture and upholstered beds from top-tier Chinese manufacturers.',          image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80' },
    { country: 'Malaysia', flag: '🇲🇾', tagline: 'Tropical Hardwood Excellence', desc: 'Solid teak, rattan seating, contemporary joinery and outdoor furniture from Kuala Lumpur studios.',          image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80' },
    { country: 'Vietnam',  flag: '🇻🇳', tagline: 'Artisan Quality & Value',      desc: 'Bamboo, water hyacinth, lacquerware and solid acacia dining sets hand-crafted in Vietnamese workshops.',     image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=700&q=80' },
    { country: 'Bali',     flag: '🇮🇩', tagline: 'Soul, Texture & Spirit',       desc: 'Hand-carved teak, batik textiles, woven pendants and terracotta ceramics from Ubud artisan studios.',       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80' }
  ];
  activeSourcing = 2;
  showcaseSlides = [
    { label: 'Luxury Living',    sub: 'Bespoke sofas, marble tables, curated lighting',  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85' },
    { label: 'Serene Bedroom',   sub: 'Handcrafted beds, premium textiles, warm tones',   image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85' },
    { label: 'Refined Dining',   sub: 'Statement tables, artisan chairs, ambient light',  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85' },
    { label: 'Executive Office', sub: 'Prestigious desks, ergonomic chairs, prestige',   image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85' },
    { label: 'Resort & Spa',     sub: 'Teak loungers, natural stone, coastal calm',       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85' }
  ];
  activeShowcase = 2;
  reasons = [
    { title: 'Global Expertise', description: 'Access to exceptional furniture and design from around the world.', icon: 'bi-globe2' },
    { title: 'Bespoke Design', description: 'Furniture and interiors thoughtfully tailored to your vision.', icon: 'bi-rulers' },
    { title: 'Exceptional Quality', description: 'Carefully selected materials and superior craftsmanship.', icon: 'bi-gem' },
    { title: 'Turnkey Solutions', description: 'Complete interior solutions from concept to completion.', icon: 'bi-house-heart' }
  ];
  testimonials = [
    { quote: 'Symmetry transformed our vision into a space that feels timeless, elegant and truly ours.', author: 'Priya & Arjun Mehta', project: 'Residential — Hyderabad' },
    { quote: 'Their global sourcing expertise brought pieces into our office we couldn\'t have found anywhere else.', author: 'Rahul Sinha', project: 'Commercial — Bengaluru' },
    { quote: 'Every detail was considered. The result is a home that feels both luxurious and deeply personal.', author: 'Neha Kapoor', project: 'Residential — Mumbai' }
  ];
  activeTestimonial = 0;
  blogPosts = [
    { id: 1, title: 'The Art of Timeless Interiors', category: 'Interior Design', date: 'June 2026',  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', excerpt: 'How proportion, materiality and restraint create spaces that remain beautiful for decades.' },
    { id: 2, title: 'How to Choose the Right Sofa',  category: 'Buying Guide',    date: 'May 2026',   image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',      excerpt: 'A practical guide to selecting a sofa that balances comfort, scale and lasting style.' },
    { id: 3, title: 'Materials That Define Luxury',  category: 'Material Guide',  date: 'April 2026', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80',    excerpt: 'From Italian marble to hand-woven textiles — the materials that elevate an interior.' }
  ];

  ngOnInit() {
    this.slides.push({ label: 'Global Sourcing', heading: 'Globally Sourced,', headingEm: 'Locally Realised', sub: 'Exceptional furniture and materials sourced from Italy, Asia and beyond.' });
    this.startAuto();
  }
  ngOnDestroy() { this.stopAuto(); }
  setTestimonial(i: number) { this.activeTestimonial = i; }
  private startAuto() { this.autoTimer = setInterval(() => this.goTo(this.activeSlide + 1), this.autoInterval); }
  private stopAuto() { if (this.autoTimer) { clearInterval(this.autoTimer); this.autoTimer = null; } }
  goTo(index: number) { if (this.animating) return; this.prevSlide = this.activeSlide; this.activeSlide = (index + this.slides.length) % this.slides.length; this.animating = true; setTimeout(() => { this.animating = false; this.prevSlide = -1; }, 900); }
  next() { this.stopAuto(); this.goTo(this.activeSlide + 1); this.startAuto(); }
  prev() { this.stopAuto(); this.goTo(this.activeSlide - 1); this.startAuto(); }
  dotClick(i: number) { if (i !== this.activeSlide) { this.stopAuto(); this.goTo(i); this.startAuto(); } }
  sourcingNext() { this.activeSourcing = (this.activeSourcing + 1) % this.sourcingSlides.length; }
  sourcingPrev() { this.activeSourcing = (this.activeSourcing - 1 + this.sourcingSlides.length) % this.sourcingSlides.length; }
  showcaseNext() { this.activeShowcase = (this.activeShowcase + 1) % this.showcaseSlides.length; }
  showcasePrev() { this.activeShowcase = (this.activeShowcase - 1 + this.showcaseSlides.length) % this.showcaseSlides.length; }
  getSourcePos(i: number): string { return this.getPosition(i, this.activeSourcing, 'pos'); }
  getShowcasePos(i: number): string { return this.getPosition(i, this.activeShowcase, 'sc'); }
  private getPosition(i: number, active: number, prefix: string): string { const total = 5; let distance = ((i - active) % total + total) % total; if (distance > total / 2) distance -= total; if (distance === 0) return `${prefix}-center`; if (distance === -1) return `${prefix}-left1`; if (distance === -2) return `${prefix}-left2`; if (distance === 1) return `${prefix}-right1`; if (distance === 2) return `${prefix}-right2`; return `${prefix}-hidden`; }
}
