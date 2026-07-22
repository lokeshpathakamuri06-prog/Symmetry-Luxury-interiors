import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  collections = [
    {name:'Living',image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'},
    {name:'Dining',image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80'},
    {name:'Bedroom',image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80'},
    {name:'Lounge',image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80'},
    {name:'Outdoor',image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80'},
    {name:'Lighting & Decor',image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80'}
  ];

  categories = [
    {name:'Luxury Sofas',image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80'},
    {name:'Lounge Chairs',image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80'},
    {name:'Dining Furniture',image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80'},
    {name:'Bedroom Furniture',image:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80'},
    {name:'Coffee Tables',image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80'},
    {name:'Lighting',image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=400&q=80'}
  ];

  products = [
    {name:'Luna Lounge Chair',category:'Lounge Chairs',price:85000,image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80'},
    {name:'Arco Dining Table',category:'Dining',price:145000,image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80'},
    {name:'Linea Sofa',category:'Sofas',price:195000,image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80'},
    {name:'Forma Side Table',category:'Tables',price:45000,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80'}
  ];

  projects = [
    {name:'The Modern Residence',category:'Residential',location:'Hyderabad',image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'},
    {name:'The Executive Office',category:'Commercial',location:'Bengaluru',image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'},
    {name:'The Grand Retreat',category:'Hospitality',location:'Goa',image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80'}
  ];

  countries = ['Italy','China','Malaysia','Vietnam','Bali'];

  reasons = [
    {title:'Global Expertise',description:'Access to exceptional furniture and design from around the world.',icon:'bi-globe2'},
    {title:'Bespoke Design',description:'Furniture and interiors thoughtfully tailored to your vision.',icon:'bi-rulers'},
    {title:'Exceptional Quality',description:'Carefully selected materials and superior craftsmanship.',icon:'bi-gem'},
    {title:'Turnkey Solutions',description:'Complete interior solutions from concept to completion.',icon:'bi-house-heart'}
  ];

  testimonials = [
    {quote:'Symmetry transformed our vision into a space that feels timeless, elegant and truly ours.',author:'Priya & Arjun Mehta',project:'Residential — Hyderabad'},
    {quote:'Their global sourcing expertise brought pieces into our office we couldn\'t have found anywhere else.',author:'Rahul Sinha',project:'Commercial — Bengaluru'},
    {quote:'Every detail was considered. The result is a home that feels both luxurious and deeply personal.',author:'Neha Kapoor',project:'Residential — Mumbai'}
  ];
  activeTestimonial = 0;
  setTestimonial(i: number) { this.activeTestimonial = i; }

  blogPosts = [
    {id:1,title:'The Art of Timeless Interiors',category:'Interior Design',date:'June 2026',image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',excerpt:'How proportion, materiality and restraint create spaces that remain beautiful for decades.'},
    {id:2,title:'How to Choose the Right Sofa',category:'Buying Guide',date:'May 2026',image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80',excerpt:'A practical guide to selecting a sofa that balances comfort, scale and lasting style.'},
    {id:3,title:'Materials That Define Luxury',category:'Material Guide',date:'April 2026',image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80',excerpt:'From Italian marble to hand-woven textiles — the materials that elevate an interior.'}
  ];

  instagramPosts = [
    {image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80',alt:'Elegant living room interior'},
    {image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',alt:'Serene bedroom design'},
    {image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80',alt:'Refined dining space'},
    {image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80',alt:'Modern lounge area'},
    {image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80',alt:'Outdoor living space'},
    {image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=400&q=80',alt:'Statement lighting design'}
  ];
}
