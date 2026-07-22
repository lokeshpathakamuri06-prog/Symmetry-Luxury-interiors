import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  activeCategory = signal('All');

  categories = [
    'All',
    'Interior Design',
    'Furniture Trends',
    'Buying Guides',
    'Material Guides',
    'Project Highlights'
  ];

  allPosts: BlogPost[] = [
    // Interior Design
    { id:1,  title:'The Art of Timeless Interiors',              category:'Interior Design',    date:'12 June 2026',   readTime:'6 min read', excerpt:'How proportion, materiality and restraint create spaces that remain beautiful, relevant and personal for decades.', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', featured:true },
    { id:2,  title:'10 Principles of Luxury Residential Design', category:'Interior Design',    date:'28 May 2026',    readTime:'8 min read', excerpt:'The principles that distinguish a truly luxurious home from one that merely looks expensive.', image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80' },
    { id:3,  title:'Designing for Wellbeing at Home',            category:'Interior Design',    date:'10 Apr 2026',    readTime:'5 min read', excerpt:'How biophilic design, lighting and spatial flow can transform how a home feels and functions.', image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80' },
    // Furniture Trends
    { id:4,  title:'Top Furniture Trends for 2026',              category:'Furniture Trends',   date:'5 June 2026',    readTime:'5 min read', excerpt:'Curved forms, warm woods and considered materiality dominate the global furniture landscape this year.', image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', featured:true },
    { id:5,  title:'The Return of the Lounge Chair',             category:'Furniture Trends',   date:'18 May 2026',    readTime:'4 min read', excerpt:'Seating that makes a statement — why the iconic lounge chair is back at the centre of interior thinking.', image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
    { id:6,  title:'Natural Stone in Contemporary Interiors',    category:'Furniture Trends',   date:'2 Apr 2026',     readTime:'5 min read', excerpt:'Travertine, marble and basalt are redefining surface design in homes and hospitality spaces.', image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80' },
    // Buying Guides
    { id:7,  title:'How to Choose the Right Sofa',               category:'Buying Guides',      date:'20 May 2026',    readTime:'7 min read', excerpt:'A practical guide to selecting a sofa that balances comfort, scale and lasting style for your living room.', image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80', featured:true },
    { id:8,  title:'Dining Table Buying Guide',                  category:'Buying Guides',      date:'14 Apr 2026',    readTime:'6 min read', excerpt:'Size, shape, material and finish — everything you need to know before investing in a dining table.', image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80' },
    { id:9,  title:'Bedroom Furniture: What to Prioritise',      category:'Buying Guides',      date:'25 Mar 2026',    readTime:'5 min read', excerpt:'The pieces that matter most and why investing in a quality bed frame pays dividends for years.', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' },
    // Material Guides
    { id:10, title:'Materials That Define Luxury',               category:'Material Guides',    date:'8 May 2026',     readTime:'6 min read', excerpt:'From Italian marble to hand-woven textiles — the materials that consistently elevate an interior.', image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80' },
    { id:11, title:'A Guide to Upholstery Fabrics',              category:'Material Guides',    date:'22 Mar 2026',    readTime:'7 min read', excerpt:'Linen, velvet, boucle, leather — understanding which fabric works for which application.', image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80' },
    { id:12, title:'Understanding Wood Species for Furniture',   category:'Material Guides',    date:'5 Mar 2026',     readTime:'8 min read', excerpt:'Walnut, oak, teak, mango — a practical guide to the character, durability and aesthetics of key furniture woods.', image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' },
    // Project Highlights
    { id:13, title:'Inside the Banjara Residence',               category:'Project Highlights', date:'1 June 2026',    readTime:'5 min read', excerpt:'A walkthrough of our latest residential project — 6,200 sq ft of considered luxury in Hyderabad.', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', featured:true },
    { id:14, title:'The Grand Retreat: Designing a Goa Resort',  category:'Project Highlights', date:'15 Apr 2026',    readTime:'6 min read', excerpt:'How we translated the soul of coastal Goa into a 45-key boutique resort experience.', image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80' },
    { id:15, title:'The Executive HQ: Redefining Office Design', category:'Project Highlights', date:'10 Mar 2026',    readTime:'5 min read', excerpt:'Designing an 18,000 sq ft headquarters that feels more like a hotel than a workplace.', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' }
  ];

  filtered = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.allPosts : this.allPosts.filter(p => p.category === cat);
  });

  featured = computed(() => this.allPosts.filter(p => p.featured).slice(0, 4));

  setCategory(cat: string) { this.activeCategory.set(cat); }

  count(cat: string) {
    return cat === 'All' ? this.allPosts.length : this.allPosts.filter(p => p.category === cat).length;
  }
}
