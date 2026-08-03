import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type Section = 'preview' | 'analytics' | 'blogs' | 'seo' | 'menu' | 'settings';
@Component({ selector:'app-admin-dashboard', standalone:true, imports:[CommonModule, RouterLink], templateUrl:'./dashboard.component.html', styleUrl:'./dashboard.component.scss' })
export class DashboardComponent {
  activeSection = signal<Section>('preview'); sidebarOpen = false; notice = signal(''); device = signal<'desktop'|'tablet'|'mobile'>('desktop');
  websiteSections: {id:Section; label:string; icon:string}[] = [{id:'preview',label:'Preview',icon:'bi-display'}, {id:'analytics',label:'Analytics',icon:'bi-bar-chart-line'}, {id:'blogs',label:'Blogs',icon:'bi-journal-richtext'}, {id:'seo',label:'SEO',icon:'bi-compass'}, {id:'menu',label:'Menu',icon:'bi-grid'}, {id:'settings',label:'Settings',icon:'bi-gear'}];
  apps = [{label:'Home',icon:'bi-grid-1x2'}, {label:'Website',icon:'bi-globe2',active:true}, {label:'Quotations',icon:'bi-receipt'}, {label:'Products',icon:'bi-box-seam'}, {label:'Customers',icon:'bi-people'}, {label:'Campaigns',icon:'bi-megaphone'}, {label:'Orders',icon:'bi-card-list'}, {label:'Dashboard',icon:'bi-speedometer2'}, {label:'Discounts',icon:'bi-percent'}, {label:'Appointments',icon:'bi-calendar2-check'}, {label:'Store Listing',icon:'bi-shop'}];
  select(section:Section) { this.activeSection.set(section); this.sidebarOpen=false; }
  flash(message:string) { this.notice.set(message); setTimeout(()=>this.notice.set(''),3000); }
}
