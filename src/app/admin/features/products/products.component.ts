import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  query = signal('');
  products = [
    {name:'Luna Lounge Chair', category:'Seating', collection:'Luna', price:'₹48,500', stock:12, status:'Published', image:'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=300&q=80'},
    {name:'Arco Console', category:'Console', collection:'Arco', price:'₹72,000', stock:7, status:'Published', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80'},
    {name:'Noma Accent Sofa', category:'Sofas', collection:'Noma', price:'₹1,28,000', stock:4, status:'Published', image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80'},
    {name:'Linea Dining Table', category:'Dining', collection:'Linea', price:'₹96,000', stock:9, status:'Draft', image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80'},
    {name:'Aurelia Side Table', category:'Tables', collection:'Aurelia', price:'₹35,500', stock:16, status:'Published', image:'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=300&q=80'},
  ];
}
