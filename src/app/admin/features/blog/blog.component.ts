import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts = [
    {title:'5 Luxury Interior Trends Defining 2026', category:'Interior Trends', date:'Aug 12, 2026', status:'Published', views:'2.8K', image:'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80'},
    {title:'How Global Sourcing Elevates Indian Homes', category:'Design', date:'Aug 08, 2026', status:'Published', views:'1.9K', image:'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=600&q=80'},
    {title:'Choosing the Right Furniture for a Modern Villa', category:'Furniture', date:'Aug 01, 2026', status:'Draft', views:'—', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'},
  ];
}
