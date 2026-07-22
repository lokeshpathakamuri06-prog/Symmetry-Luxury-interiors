import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'dashboard', loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent)},
      {path:'banners', loadComponent:()=>import('./banners/banners.component').then(m=>m.BannersComponent)},
      {path:'products', loadComponent:()=>import('./products/products.component').then(m=>m.ProductsComponent)},
      {path:'categories', loadComponent:()=>import('./categories/categories.component').then(m=>m.CategoriesComponent)},
      {path:'collections', loadComponent:()=>import('./collections/collections.component').then(m=>m.CollectionsComponent)},
      {path:'projects', loadComponent:()=>import('./projects/projects.component').then(m=>m.ProjectsComponent)},
      {path:'blogs', loadComponent:()=>import('./blogs/blogs.component').then(m=>m.BlogsComponent)},
      {path:'testimonials', loadComponent:()=>import('./testimonials/testimonials.component').then(m=>m.TestimonialsComponent)},
      {path:'team', loadComponent:()=>import('./team/team.component').then(m=>m.TeamComponent)},
      {path:'enquiries', loadComponent:()=>import('./enquiries/enquiries.component').then(m=>m.EnquiriesComponent)},
      {path:'orders', loadComponent:()=>import('./orders/orders.component').then(m=>m.OrdersComponent)},
      {path:'media', loadComponent:()=>import('./media/media.component').then(m=>m.MediaComponent)},
      {path:'settings', loadComponent:()=>import('./settings/settings.component').then(m=>m.SettingsComponent)}
    ]
  }
];