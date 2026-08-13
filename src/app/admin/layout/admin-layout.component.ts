import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  sidebarOpen = signal(true);
  mobileMenuOpen = signal(false);
  searchOpen = signal(false);

  sections = [
    {
      title: 'Overview',
      items: [{ label: 'Dashboard', icon: '⌂', route: '/admin/dashboard' }]
    },
    {
      title: 'Website',
      items: [
        { label: 'Homepage', icon: '✦', route: '/admin/homepage' },
        { label: 'About Us', icon: '◌', route: '/admin/about' },
        { label: 'Services', icon: '◇', route: '/admin/services' },
        { label: 'Categories', icon: '▦', route: '/admin/categories' },
        { label: 'Collections', icon: '◈', route: '/admin/collections' },
        { label: 'Products', icon: '□', route: '/admin/products' },
        { label: 'Projects', icon: '▧', route: '/admin/projects' },
        { label: 'Testimonials', icon: '❝', route: '/admin/testimonials' },
        { label: 'Team', icon: '◎', route: '/admin/team' },
        { label: 'Blog', icon: '✎', route: '/admin/blog' },
        { label: 'Media Library', icon: '▣', route: '/admin/media' },
      ]
    },
    {
      title: 'Business',
      items: [
        { label: 'Enquiries', icon: '↗', route: '/admin/enquiries' },
        { label: 'Customers', icon: '○', route: '/admin/customers' },
        { label: 'Orders', icon: '◫', route: '/admin/orders' },
      ]
    },
    {
      title: 'Marketing',
      items: [
        { label: 'SEO', icon: '⌁', route: '/admin/seo' },
      ]
    },
    {
      title: 'System',
      items: [
        { label: 'Users', icon: '♙', route: '/admin/users' },
        { label: 'Roles & Permissions', icon: '⚿', route: '/admin/roles' },
        { label: 'Settings', icon: '⚙', route: '/admin/settings' },
        { label: 'Activity Logs', icon: '◷', route: '/admin/activity-logs' },
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileMenuOpen.set(false);
  }
}
