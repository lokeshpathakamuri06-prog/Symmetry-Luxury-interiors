import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  preview = signal(false);
  search = new FormControl('');

  sections = signal([
    { title:'Hero Banner', description:'Main visual, heading and primary CTA', type:'Hero', enabled:true, updated:'Today', icon:'✦' },
    { title:'About Symmetry', description:'Brand story and company introduction', type:'Content', enabled:true, updated:'Yesterday', icon:'◌' },
    { title:'Services', description:'Interior design and turnkey solutions', type:'Cards', enabled:true, updated:'Yesterday', icon:'◇' },
    { title:'Featured Collections', description:'Curated furniture and decor collections', type:'Products', enabled:true, updated:'2 days ago', icon:'◈' },
    { title:'Featured Projects', description:'Selected luxury residential and commercial work', type:'Projects', enabled:true, updated:'3 days ago', icon:'▧' },
    { title:'Global Sourcing', description:'International sourcing expertise section', type:'Content', enabled:false, updated:'5 days ago', icon:'◎' },
    { title:'Why Choose Us', description:'Brand differentiators and trust points', type:'Features', enabled:true, updated:'6 days ago', icon:'◆' },
    { title:'Testimonials', description:'Client reviews and social proof', type:'Testimonials', enabled:true, updated:'1 week ago', icon:'❝' },
    { title:'Blog Highlights', description:'Latest insights and interior trends', type:'Blog', enabled:true, updated:'1 week ago', icon:'✎' },
    { title:'CTA Section', description:'Final conversion section and contact CTA', type:'CTA', enabled:true, updated:'1 week ago', icon:'↗' },
  ]);

  toggle(section: any) {
    section.enabled = !section.enabled;
    this.sections.update(items => [...items]);
  }
}
