import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  period = signal('30 Days');

  stats = [
    { label: 'Products', value: '128', change: '+12.4%', icon: '□', positive: true },
    { label: 'Projects', value: '46', change: '+8.2%', icon: '▧', positive: true },
    { label: 'New Enquiries', value: '34', change: '+18.6%', icon: '↗', positive: true },
    { label: 'Orders', value: '18', change: '-2.4%', icon: '◫', positive: false },
    { label: 'Blog Posts', value: '24', change: '+4.8%', icon: '✎', positive: true },
    { label: 'Visitors', value: '12.8K', change: '+22.1%', icon: '◉', positive: true },
  ];

  activities = [
    ['Admin updated Homepage', '8 min ago', 'Homepage'],
    ['Product “Luna Lounge Chair” added', '32 min ago', 'Product'],
    ['New enquiry received from Rahul', '1 hr ago', 'Enquiry'],
    ['Project “Modern Villa” published', '2 hrs ago', 'Project'],
    ['“5 Luxury Interior Trends” published', '4 hrs ago', 'Blog'],
  ];

  traffic = [38, 46, 42, 58, 52, 65, 61, 74, 69, 82, 78, 91];
}
