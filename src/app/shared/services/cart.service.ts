import { Injectable, computed, signal } from '@angular/core';

export interface StoreProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface CartItem { product: StoreProduct; quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly storageKey = 'symmetry-cart';
  readonly items = signal<CartItem[]>(this.read());
  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((total, item) => total + item.product.price * item.quantity, 0));

  add(product: StoreProduct, quantity = 1): void {
    const items = this.items();
    const found = items.find(item => item.product.id === product.id);
    this.save(found
      ? items.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      : [...items, { product, quantity }]);
  }

  update(productId: number, quantity: number): void {
    this.save(quantity < 1 ? this.items().filter(item => item.product.id !== productId) : this.items().map(item => item.product.id === productId ? { ...item, quantity } : item));
  }

  remove(productId: number): void { this.save(this.items().filter(item => item.product.id !== productId)); }
  clear(): void { this.save([]); }

  private read(): CartItem[] {
    try { return JSON.parse(localStorage.getItem(this.storageKey) || '[]'); } catch { return []; }
  }

  private save(items: CartItem[]): void {
    this.items.set(items);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
