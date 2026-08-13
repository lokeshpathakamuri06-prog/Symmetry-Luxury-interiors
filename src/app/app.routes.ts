import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./website/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./website/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./website/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'shop',
    loadComponent: () => import('./website/shop/shop.component').then(m => m.ShopComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./website/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./website/product-details/product-details.component').then(m => m.ProductDetailsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./website/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./website/projects/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'global-sourcing',
    loadComponent: () => import('./website/global-sourcing/global-sourcing.component').then(m => m.GlobalSourcingComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./website/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./website/blog/blog-detail.component').then(m => m.BlogDetailComponent)
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./website/testimonials/testimonials.component').then(m => m.TestimonialsComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./website/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./website/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./website/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./website/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./website/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./website/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
