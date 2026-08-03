import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  // ── Hero Slider ───────────────────────────────────────────────
  slides = [
    { image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85', label:'Residential Design',      heading:'Where Luxury Meets',  headingEm:'Timeless Design',    sub:'Transforming spaces into extraordinary experiences through refined design and exceptional craftsmanship.' },
    { image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1920&q=85', label:'Interior Architecture',    heading:'Spaces That',         headingEm:'Inspire Living',     sub:'Bespoke interiors shaped by your vision — from first sketch to a beautifully finished space.' },
    { image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85', label:'Bedroom & Private Spaces', heading:'Refined Comfort,',    headingEm:'Effortless Elegance',sub:'Every room designed with precision, warmth and the materials that define true luxury.' },
    { image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=85', label:'Dining & Entertaining',    heading:'Curated Spaces',      headingEm:'For Every Moment',   sub:'Dining and gathering rooms crafted to bring people together beautifully.' },
    { image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=85', label:'Global Sourcing',          heading:'Globally Sourced,',   headingEm:'Locally Realised',   sub:'Exceptional furniture and materials sourced from Italy, Asia and beyond.' }
  ];
  activeSlide = 0; prevSlide = -1; animating = false;
  private autoTimer: ReturnType<typeof setInterval> | null = null;
  readonly autoInterval = 5000;

  // ── Collections ──────────────────────────────────────────────
  collections = [
    { name:'Living',           image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { name:'Dining',           image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
    { name:'Bedroom',          image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
    { name:'Lounge',           image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80' },
    { name:'Outdoor',          image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80' },
    { name:'Lighting & Decor', image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80' }
  ];

  categories = [
    { name:'Luxury Sofas',      image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80' },
    { name:'Lounge Chairs',     image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' },
    { name:'Dining Furniture',  image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80' },
    { name:'Bedroom Furniture', image:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80' },
    { name:'Coffee Tables',     image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
    { name:'Lighting',          image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=400&q=80' }
  ];

  products = [
    { name:'Luna Lounge Chair', category:'Lounge Chairs', price:85000,  image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80' },
    { name:'Arco Dining Table', category:'Dining',        price:145000, image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80' },
    { name:'Linea Sofa',        category:'Sofas',         price:195000, image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80' },
    { name:'Forma Side Table',  category:'Tables',        price:45000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' }
  ];

  projects = [
    { name:'The Modern Residence', category:'Residential', location:'Hyderabad', image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80' },
    { name:'The Executive Office', category:'Commercial',  location:'Bengaluru', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
    { name:'The Grand Retreat',    category:'Hospitality', location:'Goa',       image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80' }
  ];

  // ── Global Sourcing 3D Fan Carousel ──────────────────────────
  sourcingSlides = [
    { country:'Italy',    flag:'🇮🇹', tagline:'The Art of Fine Living',       desc:'Premium sofas, marble surfaces, designer lighting and hand-crafted leather from Italian ateliers.',            image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85' },
    { country:'China',    flag:'🇨🇳', tagline:'Scale, Craft & Precision',     desc:'Custom case goods, lacquered furniture and upholstered beds from top-tier Chinese manufacturers.',            image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=85' },
    { country:'Malaysia', flag:'🇲🇾', tagline:'Tropical Hardwood Excellence', desc:'Solid teak, rattan seating, contemporary joinery and outdoor furniture from Kuala Lumpur studios.',           image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=85' },
    { country:'Vietnam',  flag:'🇻🇳', tagline:'Artisan Quality & Value',      desc:'Bamboo, water hyacinth, lacquerware and solid acacia dining sets hand-crafted in Vietnamese workshops.',       image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=700&q=85' },
    { country:'Bali',     flag:'🇮🇩', tagline:'Soul, Texture & Spirit',       desc:'Hand-carved teak, batik textiles, woven pendants and terracotta ceramics from Ubud artisan studios.',         image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=85' }
  ];
  activeSourcing = 2;

  // ── Interior Showcase Fan Carousel ───────────────────────────
  showcaseSlides = [
    { label:'Luxury Living',    sub:'Bespoke sofas, marble tables, curated lighting',  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85' },
    { label:'Serene Bedroom',   sub:'Handcrafted beds, premium textiles, warm tones',   image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85' },
    { label:'Refined Dining',   sub:'Statement tables, artisan chairs, ambient light',  image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85' },
    { label:'Executive Office', sub:'Prestigious desks, ergonomic chairs, prestige',   image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85' },
    { label:'Resort & Spa',     sub:'Teak loungers, natural stone, coastal calm',       image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85' }
  ];
  activeShowcase = 2;

  countries = ['Italy', 'China', 'Malaysia', 'Vietnam', 'Bali'];

  reasons = [
    { title:'Global Expertise',    description:'Access to exceptional furniture and design from around the world.',  icon:'bi-globe2' },
    { title:'Bespoke Design',      description:'Furniture and interiors thoughtfully tailored to your vision.',       icon:'bi-rulers' },
    { title:'Exceptional Quality', description:'Carefully selected materials and superior craftsmanship.',            icon:'bi-gem' },
    { title:'Turnkey Solutions',   description:'Complete interior solutions from concept to completion.',             icon:'bi-house-heart' }
  ];

  testimonials = [
    { quote:'Symmetry transformed our vision into a space that feels timeless, elegant and truly ours.',            author:'Priya & Arjun Mehta', project:'Residential — Hyderabad' },
    { quote:'Their global sourcing expertise brought pieces into our office we couldn\'t have found anywhere else.', author:'Rahul Sinha',         project:'Commercial — Bengaluru' },
    { quote:'Every detail was considered. The result is a home that feels both luxurious and deeply personal.',      author:'Neha Kapoor',         project:'Residential — Mumbai' }
  ];
  activeTestimonial = 0;
  setTestimonial(i: number) { this.activeTestimonial = i; }

  blogPosts = [
    { id:1, title:'The Art of Timeless Interiors', category:'Interior Design', date:'June 2026',  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', excerpt:'How proportion, materiality and restraint create spaces that remain beautiful for decades.' },
    { id:2, title:'How to Choose the Right Sofa',  category:'Buying Guide',    date:'May 2026',   image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80', excerpt:'A practical guide to selecting a sofa that balances comfort, scale and lasting style.' },
    { id:3, title:'Materials That Define Luxury',  category:'Material Guide',  date:'April 2026', image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', excerpt:'From Italian marble to hand-woven textiles — the materials that elevate an interior.' }
  ];

  instagramPosts = [
    { image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80', alt:'Elegant living room' },
    { image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', alt:'Serene bedroom' },
    { image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80', alt:'Refined dining' },
    { image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80', alt:'Modern lounge' },
    { image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80', alt:'Outdoor living' },
    { image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=400&q=80', alt:'Statement lighting' }
  ];

  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit()  { this.startAuto(); }
  ngOnDestroy(){ this.stopAuto(); }

  private startAuto(){ this.autoTimer = setInterval(() => this.goTo(this.activeSlide + 1), this.autoInterval); }
  private stopAuto() { if (this.autoTimer){ clearInterval(this.autoTimer); this.autoTimer = null; } }

  goTo(index: number){
    if (this.animating) return;
    this.prevSlide   = this.activeSlide;
    this.activeSlide = (index + this.slides.length) % this.slides.length;
    this.animating   = true;
    setTimeout(() => { this.animating = false; this.prevSlide = -1; }, 900);
  }
  next()     { this.stopAuto(); this.goTo(this.activeSlide + 1); this.startAuto(); }
  prev()     { this.stopAuto(); this.goTo(this.activeSlide - 1); this.startAuto(); }
  dotClick(i: number){ if (i !== this.activeSlide){ this.stopAuto(); this.goTo(i); this.startAuto(); } }

  // ── Sourcing fan carousel ─────────────────────────────────────
  sourcingNext(){ this.activeSourcing = (this.activeSourcing + 1) % this.sourcingSlides.length; }
  sourcingPrev(){ this.activeSourcing = (this.activeSourcing - 1 + this.sourcingSlides.length) % this.sourcingSlides.length; }
  getSourcePos(i: number): string {
    const t = this.sourcingSlides.length;
    let d = ((i - this.activeSourcing) % t + t) % t;
    if (d > t / 2) d -= t;
    if (d === 0)  return 'pos-center';
    if (d === -1) return 'pos-left1';
    if (d === -2) return 'pos-left2';
    if (d === 1)  return 'pos-right1';
    if (d === 2)  return 'pos-right2';
    return 'pos-hidden';
  }

  // ── Showcase fan carousel ─────────────────────────────────────
  showcaseNext(){ this.activeShowcase = (this.activeShowcase + 1) % this.showcaseSlides.length; }
  showcasePrev(){ this.activeShowcase = (this.activeShowcase - 1 + this.showcaseSlides.length) % this.showcaseSlides.length; }
  getShowcasePos(i: number): string {
    const t = this.showcaseSlides.length;
    let d = ((i - this.activeShowcase) % t + t) % t;
    if (d > t / 2) d -= t;
    if (d === 0)  return 'sc-center';
    if (d === -1) return 'sc-left1';
    if (d === -2) return 'sc-left2';
    if (d === 1)  return 'sc-right1';
    if (d === 2)  return 'sc-right2';
    return 'sc-hidden';
  }
}
