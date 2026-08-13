import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterCategoryPipe } from '../../shared/pipes/filter-category.pipe';
import { CartService, StoreProduct } from '../../shared/services/cart.service';

export interface Product extends StoreProduct {
  originalPrice?: number;
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
  search        = signal('');
  activeCategory = signal('All');
  sortBy        = signal('popular');
  currentPage   = signal(1);
  readonly pageSize = 12;
  sidebarOpen   = false;

  // Wishlist (local state) & Cart toast
  wishlistIds   = new Set<number>();
  cartToast:     string | null = null;
  wishlistToast: string | null = null;
  private toastTimer?: ReturnType<typeof setTimeout>;

  constructor(public cart: CartService) {}

  categories = [
    'All', 'Luxury Sofas', 'Lounge Chairs', 'Dining Furniture', 'Bedroom Furniture',
    'Coffee Tables', 'Side Tables', 'Office Furniture', 'Outdoor Furniture',
    'Lighting', 'Rugs', 'Decorative Accessories', 'Sculptures & Artifacts'
  ];

  sortOptions = [
    { value: 'popular',   label: 'Most Popular' },
    { value: 'latest',    label: 'Latest Arrivals' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc',label: 'Price: High to Low' }
  ];

  allProducts: Product[] = [
    { id:1,  name:'Linea Sofa',            category:'Luxury Sofas',           price:195000, image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80', badge:'Bestseller', rating:5, reviews:24 },
    { id:2,  name:'Aria Modular Sofa',     category:'Luxury Sofas',           price:285000, originalPrice:310000, image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', rating:5, reviews:18 },
    { id:3,  name:'Curve Velvet Sofa',     category:'Luxury Sofas',           price:245000, image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', badge:'New', rating:4, reviews:7, isNew:true },
    { id:4,  name:'Luna Lounge Chair',     category:'Lounge Chairs',          price:85000,  image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', badge:'Bestseller', rating:5, reviews:31 },
    { id:5,  name:'Noir Accent Chair',     category:'Lounge Chairs',          price:92000,  image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', rating:4, reviews:15 },
    { id:6,  name:'Arca Reading Chair',    category:'Lounge Chairs',          price:110000, image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', badge:'New', rating:5, reviews:9, isNew:true },
    { id:7,  name:'Arco Dining Table',     category:'Dining Furniture',       price:145000, image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', badge:'Bestseller', rating:5, reviews:22 },
    { id:8,  name:'Terra Dining Set',      category:'Dining Furniture',       price:195000, originalPrice:225000, image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', rating:4, reviews:12 },
    { id:9,  name:'Sella Dining Chair',    category:'Dining Furniture',       price:38000,  image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', rating:4, reviews:19 },
    { id:10, name:'Nido Bed Frame',        category:'Bedroom Furniture',      price:185000, image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', badge:'New', rating:5, reviews:8, isNew:true },
    { id:11, name:'Sera Wardrobe',         category:'Bedroom Furniture',      price:265000, image:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80', rating:4, reviews:11 },
    { id:12, name:'Drift Bedside Table',   category:'Bedroom Furniture',      price:32000,  image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', rating:4, reviews:14 },
    { id:13, name:'Forma Coffee Table',    category:'Coffee Tables',          price:65000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge:'Bestseller', rating:5, reviews:27 },
    { id:14, name:'Oval Travertine Table', category:'Coffee Tables',          price:95000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge:'New', rating:5, reviews:6, isNew:true },
    { id:15, name:'Lento Side Table',      category:'Side Tables',            price:28000,  image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', rating:4, reviews:20 },
    { id:16, name:'Stack Nesting Tables',  category:'Side Tables',            price:42000,  image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', badge:'New', rating:4, reviews:5, isNew:true },
    { id:17, name:'Palazzo Desk',          category:'Office Furniture',       price:125000, image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', rating:5, reviews:16 },
    { id:18, name:'Alto Bookshelf',        category:'Office Furniture',       price:88000,  image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', badge:'New', rating:4, reviews:9, isNew:true },
    { id:19, name:'Costal Outdoor Sofa',   category:'Outdoor Furniture',      price:145000, image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', rating:4, reviews:13 },
    { id:20, name:'Terra Outdoor Set',     category:'Outdoor Furniture',      price:210000, image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', badge:'New', rating:5, reviews:4, isNew:true },
    { id:21, name:'Halo Pendant Light',    category:'Lighting',               price:38000,  image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80', badge:'Bestseller', rating:5, reviews:33 },
    { id:22, name:'Arc Floor Lamp',        category:'Lighting',               price:52000,  image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80', rating:4, reviews:21 },
    { id:23, name:'Wabi Wool Rug',         category:'Rugs',                   price:48000,  image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'Bestseller', rating:5, reviews:29 },
    { id:24, name:'Silk Hand-Knotted Rug', category:'Rugs',                   price:185000, image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'New', rating:5, reviews:7, isNew:true },
    { id:25, name:'Murano Glass Vase',     category:'Decorative Accessories', price:22000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:4, reviews:18 },
    { id:26, name:'Linen Throw Cushion',   category:'Decorative Accessories', price:4500,   image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80', rating:4, reviews:42 },
    { id:27, name:'Teak Bowl Set',         category:'Decorative Accessories', price:12000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', badge:'New', rating:5, reviews:11, isNew:true },
    { id:28, name:'Bronze Figurine',       category:'Sculptures & Artifacts', price:35000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:5, reviews:9 },
    { id:29, name:'Marble Abstract',       category:'Sculptures & Artifacts', price:78000,  image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', badge:'New', rating:5, reviews:4, isNew:true },
    { id:30, name:'Terracotta Vessel',     category:'Sculptures & Artifacts', price:18000,  image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', rating:4, reviews:15 }
  ];

  filtered = computed(() => {
    let list = this.allProducts.filter(p =>
      (this.activeCategory() === 'All' || p.category === this.activeCategory()) &&
      p.name.toLowerCase().includes(this.search().toLowerCase())
    );
    const s = this.sortBy();
    return list.slice().sort((a, b) =>
      s === 'price-asc'  ? a.price - b.price :
      s === 'price-desc' ? b.price - a.price :
      s === 'latest'     ? b.id - a.id :
      b.reviews - a.reviews
    );
  });

  paginated   = computed(() => this.filtered().slice((this.currentPage() - 1) * this.pageSize, this.currentPage() * this.pageSize));
  totalPages  = computed(() => Math.ceil(this.filtered().length / this.pageSize));
  pages       = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  setCategory(cat: string) { this.activeCategory.set(cat); this.currentPage.set(1); }
  setSearch(val: string)   { this.search.set(val);          this.currentPage.set(1); }
  setSort(val: string)     { this.sortBy.set(val);          this.currentPage.set(1); }
  goToPage(p: number)      { if (p >= 1 && p <= this.totalPages()) { this.currentPage.set(p); window.scrollTo({ top: 0, behavior: 'smooth' }); } }
  stars(n: number)         { return Array(n).fill(0); }

  // ── Wishlist ─────────────────────────────────────────────────
  isWishlisted(id: number): boolean { return this.wishlistIds.has(id); }

  toggleWishlist(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.wishlistIds.has(product.id)) {
      this.wishlistIds.delete(product.id);
      this.showToast('wishlist', `Removed from Wishlist`);
    } else {
      this.wishlistIds.add(product.id);
      this.showToast('wishlist', `♥  ${product.name} saved to Wishlist`);
    }
    this.wishlistIds = new Set(this.wishlistIds); // trigger change detection
  }

  // ── Add to Cart ───────────────────────────────────────────────
  addToCart(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cart.add({ id: product.id, name: product.name, category: product.category, price: product.price, image: product.image });
    this.showToast('cart', `🛒  ${product.name} added to cart`);
  }

  private showToast(type: 'cart' | 'wishlist', message: string): void {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    if (type === 'cart')     { this.cartToast = message;     this.wishlistToast = null; }
    if (type === 'wishlist') { this.wishlistToast = message; this.cartToast = null; }
    this.toastTimer = setTimeout(() => { this.cartToast = null; this.wishlistToast = null; }, 3000);
  }
}
