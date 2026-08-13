import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ProductsComponent } from './features/products/products.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { BlogComponent } from './features/blog/blog.component';
import { EnquiriesComponent } from './features/enquiries/enquiries.component';
import { MediaComponent } from './features/media/media.component';
import { SettingsComponent } from './features/settings/settings.component';
import { SimpleModuleComponent } from './shared/simple-module.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'about', component: SimpleModuleComponent, data: { title: 'About Us', description: 'Manage company story, values and brand information.' } },
      { path: 'services', component: SimpleModuleComponent, data: { title: 'Services', description: 'Manage interior design and turnkey service offerings.' } },
      { path: 'categories', component: SimpleModuleComponent, data: { title: 'Categories', description: 'Organize products into website categories.' } },
      { path: 'collections', component: SimpleModuleComponent, data: { title: 'Collections', description: 'Manage curated furniture collections.' } },
      { path: 'products', component: ProductsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'testimonials', component: SimpleModuleComponent, data: { title: 'Testimonials', description: 'Manage client reviews and featured testimonials.' } },
      { path: 'team', component: SimpleModuleComponent, data: { title: 'Team', description: 'Manage designers, consultants and team profiles.' } },
      { path: 'blog', component: BlogComponent },
      { path: 'enquiries', component: EnquiriesComponent },
      { path: 'customers', component: SimpleModuleComponent, data: { title: 'Customers', description: 'Manage customer profiles and engagement history.' } },
      { path: 'orders', component: SimpleModuleComponent, data: { title: 'Orders', description: 'Manage orders, payments and fulfilment status.' } },
      { path: 'media', component: MediaComponent },
      { path: 'seo', component: SimpleModuleComponent, data: { title: 'SEO', description: 'Manage page metadata, social previews and indexing settings.' } },
      { path: 'users', component: SimpleModuleComponent, data: { title: 'Users', description: 'Manage administrator accounts.' } },
      { path: 'roles', component: SimpleModuleComponent, data: { title: 'Roles & Permissions', description: 'Control access using role-based permissions.' } },
      { path: 'settings', component: SettingsComponent },
      { path: 'activity-logs', component: SimpleModuleComponent, data: { title: 'Activity Logs', description: 'Review administrator activity across the CMS.' } },
    ]
  }
];
