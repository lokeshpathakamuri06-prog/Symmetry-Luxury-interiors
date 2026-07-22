import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterCategoryPipe } from '../../shared/pipes/filter-category.pipe';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, FilterCategoryPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  search = signal('');
  activeCategory = signal('All');
  sortBy = signal('popular');
  currentPage = signal(1);
  readonly pageSize = 12;
  sidebarOpen = false;

  categories = [
    'All',
    'Luxury Sofas',
    'Lounge Chairs',
    'Dining Furniture',
    'Bedroom Furniture',
    'Coffee Tables',
    'Side Tables',
    'Office Furniture',
    'Outdoor Furniture',
    'Lighting',
    'Rugs',
    'Decorative Accessories',
    'Sculptures & Artifacts'
  ];

  sortOptions = [
    { value: 'popular',  label: 'Most Popular' },
    { value: 'latest',   label: 'Latest Arrivals' },
    { value: 'price-asc',  label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' }
  ];

  allProducts: Product[] = [
    { id:1,  name:'Linea Sofa',            category:'Luxury Sofas',           price:195000, image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80', badge:'Bestseller', rating:5, reviews:24, isNew:false },
    { id:2,  name:'Aria Modular Sofa',     category:'Luxury Sofas',           price:285000, originalPrice:310000, image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', rating:5, reviews:18, isNew:false },
    { id:3,  name:'Curve Velvet Sofa',     category:'Luxury Sofas',           price:245000, image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', badge:'New', rating:4, reviews:7, isNew:true },
    { id:4,  name:'Luna Lounge Chair',     category:'Lounge Chairs',          price:85000,  image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', badge:'Bestseller', rating:5, reviews:31, isNew:false },
    { id:5,  name:'Noir Accent Chair',     category:'Lounge Chairs',          price:92000,  image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', rating:4, reviews:15, isNew:false },
    { id:6,  name:'Arca Reading Chair',    category:'Lounge Chairs',          price:110000, image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', badge:'New', rating:5, reviews:9, isNew:true },
    { id:7,  name:'Arco Dining Table',     category:'Dining Furniture',       price:145000, image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', badge:'Bestseller', rating:5, reviews:22, isNew:false },
    { id:8,  name:'Terra Dining Set',      category:'Dining Furniture',       price:195000, originalPrice:225000, image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', rating:4, reviews:12, isNew:false },
    { id:9,  name:'Sella Dining Chair',    category:'Dining Furniture',       price:38000,  image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', rating:4, reviews:19, isNew:false },
    { id:10, name:'Nido Bed Frame',        category:'Bedroom Furniture',      price:185000, image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', badge:'New', rating:5, reviews:8, isNew:true },
    { id:11, name:'Sera Wardrobe',         category:'Bedroom Furniture',      price:265000, image:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80', rating:4, reviews:11, isNew:false },
    { id:12, name:'Drift Bedside Table',   category:'Bedroom Furniture',      price:32000,  image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', rating:4, reviews:14, isNew:false },
    { id:13, name:'Forma Coffee Table',    category:'Coffee Tables',          price:65000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge:'Bestseller', rating:5, reviews:27, isNew:false },
    { id:14, name:'Oval Travertine Table', category:'Coffee Tables',          price:95000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge:'New', rating:5, reviews:6, isNew:true },
    { id:15, name:'Lento Side Table',      category:'Side Tables',            price:28000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', rating:4, reviews:20, isNew:false },
    { id:16, name:'Stack Nesting Tables',  category:'Side Tables',            price:42000,  image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', badge:'New', rating:4, reviews:5, isNew:true },
    { id:17, name:'Palazzo Desk',          category:'Office Furniture',       price:125000, image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', rating:5, reviews:16, isNew:false },
    { id:18, name:'Alto Bookshelf',        category:'Office Furniture',       price:88000,  image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', badge:'New', rating:4, reviews:9, isNew:true },
    { id:19, name:'Costal Outdoor Sofa',   category:'Outdoor Furniture',      price:145000, image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', rating:4, reviews:13, isNew:false },
    { id:20, name:'Terra Outdoor Set',     category:'Outdoor Furniture',      price:210000, image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', badge:'New', rating:5, reviews:4, isNew:true },
    { id:21, name:'Halo Pendant Light',    category:'Lighting',               price:38000,  image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80', badge:'Bestseller', rating:5, reviews:33, isNew:false },
    { id:22, name:'Arc Floor Lamp',        category:'Lighting',               price:52000,  image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80', rating:4, reviews:21, isNew:false },
    { id:23, name:'Wabi Wool Rug',         category:'Rugs',                   price:48000,  image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'Bestseller', rating:5, reviews:29, isNew:false },
    { id:24, name:'Silk Hand-Knotted Rug', category:'Rugs',                   price:185000, image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'New', rating:5, reviews:7, isNew:true },
    { id:25, name:'Murano Glass Vase',     category:'Decorative Accessories', price:22000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:4, reviews:18, isNew:false },
    { id:26, name:'Linen Throw Cushion',   category:'Decorative Accessories', price:4500,   image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', rating:4, reviews:42, isNew:false },
    { id:27, name:'Teak Bowl Set',         category:'Decorative Accessories', price:12000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', badge:'New', rating:5, reviews:11, isNew:true },
    { id:28, name:'Bronze Figurine',       category:'Sculptures & Artifacts', price:35000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:5, reviews:9, isNew:false },
    { id:29, name:'Marble Abstract',       category:'Sculptures & Artifacts', price:78000,  image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'New', rating:5, reviews:4, isNew:true },
    { id:30, name:'Terracotta Vessel',     category:'Sculptures & Artifacts', price:18000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:4, reviews:15, isNew:false }
  ];

  filtered = computed(() => {
    let list = this.allProducts.filter(p =>
      (this.activeCategory() === 'All' || p.category === this.activeCategory()) &&
      p.name.toLowerCase().includes(this.search().toLowerCase())
    );
    switch (this.sortBy()) {
      case 'latest':     list = list.slice().sort((a,b) => b.id - a.id); break;
      case 'price-asc':  list = list.slice().sort((a,b) => a.price - b.price); break;
      case 'price-desc': list = list.slice().sort((a,b) => b.price - a.price); break;
      default:           list = list.slice().sort((a,b) => b.reviews - a.reviews);
    }
    return list;
  });

  paginated = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.ceil(this.filtered().length / this.pageSize));

  pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  setCategory(cat: string) {
    this.activeCategory.set(cat);
    this.currentPage.set(1);
  }

  setSearch(val: string) {
    this.search.set(val);
    this.currentPage.set(1);
  }

  setSort(val: string) {
    this.sortBy.set(val);
    this.currentPage.set(1);
  }

  goToPage(p: number) {
    this.currentPage.set(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  stars(n: number) { return Array(n).fill(0); }
}
