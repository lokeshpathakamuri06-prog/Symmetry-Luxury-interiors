import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ProductDetail {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: string;
  stockCount: number;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  dimensions: { label: string; value: string }[];
  materials: string[];
  finishes: string[];
  colours: { name: string; hex: string }[];
  care: string[];
  images: string[];
  sku: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  activeImage = '';
  activeImageIndex = 0;
  quantity = 1;
  activeTab = 'description';
  selectedFinish = '';
  selectedColour = '';
  zoomActive = false;
  zoomStyle = {};
  addedToCart = false;

  product: ProductDetail = {
    id: 1,
    name: 'Luna Lounge Chair',
    category: 'Lounge Chairs',
    price: 85000,
    originalPrice: 95000,
    stock: 'In Stock',
    stockCount: 4,
    badge: 'Bestseller',
    rating: 5,
    reviews: 31,
    sku: 'SYM-LC-001',
    description: 'The Luna Lounge Chair is a study in refined comfort. Its sculptural form, inspired by the gentle arc of a crescent moon, wraps the body in softness while commanding attention in any interior.',
    longDescription: 'Conceived for those who believe that luxury and comfort are not mutually exclusive, the Luna Lounge Chair brings together an organically shaped solid walnut frame with hand-stitched full-grain leather upholstery. The gentle recline, deep seat and padded armrests create a seating experience that is equally suited to reading, conversation or quiet reflection.\n\nEach chair is handcrafted to order at our partner workshop in Hyderabad, with a lead time of 4–6 weeks. Custom dimensions, leather grades and frame finishes are available on request.',
    dimensions: [
      { label: 'Width',       value: '82 cm' },
      { label: 'Depth',       value: '88 cm' },
      { label: 'Height',      value: '76 cm' },
      { label: 'Seat Height', value: '42 cm' },
      { label: 'Seat Depth',  value: '58 cm' },
      { label: 'Weight',      value: '18 kg' }
    ],
    materials: [
      'Frame: Solid FSC-certified American Walnut',
      'Upholstery: Full-grain Italian leather (Pelle Frau)',
      'Legs: Hand-turned solid walnut with brass ferrules',
      'Filling: High-density HR foam with Dacron wrap',
      'Webbing: Elastic sinuous spring base'
    ],
    finishes: ['Natural Walnut', 'Smoked Oak', 'Ebonised Walnut', 'Painted White'],
    colours: [
      { name: 'Cognac',    hex: '#8B4513' },
      { name: 'Ivory',     hex: '#FFFFF0' },
      { name: 'Slate',     hex: '#708090' },
      { name: 'Forest',    hex: '#355E3B' },
      { name: 'Midnight',  hex: '#191970' },
      { name: 'Caramel',   hex: '#C68642' }
    ],
    care: [
      'Dust regularly with a soft, dry cloth',
      'Clean spills immediately with a slightly damp cloth',
      'Condition leather every 6 months with a quality leather conditioner',
      'Keep away from direct sunlight and heat sources to prevent fading',
      'Professional cleaning recommended annually',
      'Avoid harsh chemical cleaners or abrasive materials'
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=85',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=85'
    ]
  };

  relatedProducts = [
    { id:4,  name:'Noir Accent Chair',   category:'Lounge Chairs', price:92000,  image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&q=80' },
    { id:6,  name:'Arca Reading Chair',  category:'Lounge Chairs', price:110000, image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80' },
    { id:1,  name:'Linea Sofa',          category:'Luxury Sofas',  price:195000, image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80' },
    { id:13, name:'Forma Coffee Table',  category:'Coffee Tables', price:65000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activeImage = this.product.images[0];
    this.selectedFinish = this.product.finishes[0];
    this.selectedColour = this.product.colours[0].name;
  }

  setImage(img: string, i: number) {
    this.activeImage = img;
    this.activeImageIndex = i;
  }

  prevImage() {
    const i = (this.activeImageIndex - 1 + this.product.images.length) % this.product.images.length;
    this.setImage(this.product.images[i], i);
  }

  nextImage() {
    const i = (this.activeImageIndex + 1) % this.product.images.length;
    this.setImage(this.product.images[i], i);
  }

  onMouseMove(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomStyle = { 'transform-origin': `${x}% ${y}%`, 'transform': 'scale(2)' };
  }

  addToCart() {
    this.addedToCart = true;
    setTimeout(() => this.addedToCart = false, 2500);
  }

  stars(n: number) { return Array(n).fill(0); }
}
