import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="padding:100px 40px;text-align:center">
      <h1>Admin Dashboard</h1>
      <p>Admin panel coming soon.</p>
      <a routerLink="/">← Back to Website</a>
    </div>
  `
})
export class DashboardComponent {}
