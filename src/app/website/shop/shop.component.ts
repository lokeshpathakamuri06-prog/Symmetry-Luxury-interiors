import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterCategoryPipe } from '../../shared/pipes/filter-category.pipe';
import { CartService, StoreProduct } from '../../shared/services/cart.service';

interface Product extends StoreProduct { originalPrice?: number; badge?: string; rating: number; reviews: number; }

@Component({ selector: 'app-shop', standalone: true, imports: [CommonModule, RouterLink, FormsModule, FilterCategoryPipe], templateUrl: './shop.component.html', styleUrl: './shop.component.scss' })
export class ShopComponent {
  search = signal(''); activeCategory = signal('All'); sortBy = signal('popular'); currentPage = signal(1);
  readonly pageSize = 12; sidebarOpen = false; cartToast: string | null = null; wishlistToast: string | null = null;
  wishlistIds = new Set<number>(); private toastTimer?: ReturnType<typeof setTimeout>;
  categories = ['All','Luxury Sofas','Lounge Chairs','Dining Furniture','Bedroom Furniture','Coffee Tables','Side Tables','Office Furniture','Outdoor Furniture','Lighting','Rugs','Decorative Accessories','Sculptures & Artifacts'];
  sortOptions = [{value:'popular',label:'Most Popular'},{value:'latest',label:'Latest Arrivals'},{value:'price-asc',label:'Price: Low to High'},{value:'price-desc',label:'Price: High to Low'}];
  allProducts: Product[] = [
    {id:1,name:'Linea Sofa',category:'Luxury Sofas',price:195000,image:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80',badge:'Bestseller',rating:5,reviews:24},
    {id:2,name:'Aria Modular Sofa',category:'Luxury Sofas',price:285000,originalPrice:310000,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',rating:5,reviews:18},
    {id:3,name:'Curve Velvet Sofa',category:'Luxury Sofas',price:245000,image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',badge:'New',rating:4,reviews:7},
    {id:4,name:'Luna Lounge Chair',category:'Lounge Chairs',price:85000,image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',badge:'Bestseller',rating:5,reviews:31},
    {id:5,name:'Noir Accent Chair',category:'Lounge Chairs',price:92000,image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',rating:4,reviews:15},
    {id:6,name:'Arca Reading Chair',category:'Lounge Chairs',price:110000,image:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',badge:'New',rating:5,reviews:9},
    {id:7,name:'Arco Dining Table',category:'Dining Furniture',price:145000,image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',badge:'Bestseller',rating:5,reviews:22},
    {id:8,name:'Terra Dining Set',category:'Dining Furniture',price:195000,originalPrice:225000,image:'https://images.unsplash.com/photo-1616486338812-3dadae4bace?w=600&q=80',rating:4,reviews:12},
    {id:9,name:'Nido Bed Frame',category:'Bedroom Furniture',price:185000,image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',badge:'New',rating:5,reviews:8},
    {id:10,name:'Forma Coffee Table',category:'Coffee Tables',price:65000,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',badge:'Bestseller',rating:5,reviews:27},
    {id:11,name:'Palazzo Desk',category:'Office Furniture',price:125000,image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',rating:5,reviews:16},
    {id:12,name:'Halo Pendant Light',category:'Lighting',price:38000,image:'https://images.unsplash.com/photo-1513506003901-1e6a35073c5f?w=600&q=80',badge:'Bestseller',rating:5,reviews:33}
  ];
  filtered = computed(() => { let list = this.allProducts.filter(p => (this.activeCategory() === 'All' || p.category === this.activeCategory()) && p.name.toLowerCase().includes(this.search().toLowerCase())); const sort = this.sortBy(); return list.slice().sort((a,b) => sort === 'price-asc' ? a.price-b.price : sort === 'price-desc' ? b.price-a.price : sort === 'latest' ? b.id-a.id : b.reviews-a.reviews); });
  paginated = computed(() => this.filtered().slice((this.currentPage()-1)*this.pageSize, this.currentPage()*this.pageSize));
  totalPages = computed(() => Math.ceil(this.filtered().length / this.pageSize)); pages = computed(() => Array.from({length:this.totalPages()},(_,i)=>i+1));
  constructor(private cart: CartService) {}
  setCategory(cat: string) { this.activeCategory.set(cat); this.currentPage.set(1); }
  setSearch(value: string) { this.search.set(value); this.currentPage.set(1); }
  setSort(value: string) { this.sortBy.set(value); this.currentPage.set(1); }
  goToPage(page: number) { if(page >= 1 && page <= this.totalPages()) { this.currentPage.set(page); window.scrollTo({top:0,behavior:'smooth'}); } }
  stars(n: number) { return Array(n).fill(0); }
  isWishlisted(id: number) { return this.wishlistIds.has(id); }
  toggleWishlist(product: Product, event: Event) { event.preventDefault(); event.stopPropagation(); this.wishlistIds.has(product.id) ? this.wishlistIds.delete(product.id) : this.wishlistIds.add(product.id); this.wishlistIds = new Set(this.wishlistIds); this.show('wishlist', this.wishlistIds.has(product.id) ? `Added ${product.name} to your wishlist` : 'Removed from wishlist'); }
  addToCart(product: Product, event: Event) { event.preventDefault(); event.stopPropagation(); this.cart.add(product); this.show('cart', `${product.name} added to your cart`); }
  private show(type: 'cart'|'wishlist', message: string) { if(this.toastTimer) clearTimeout(this.toastTimer); this.cartToast = type === 'cart' ? message : null; this.wishlistToast = type === 'wishlist' ? message : null; this.toastTimer = setTimeout(() => { this.cartToast = null; this.wishlistToast = null; }, 2500); }
}
