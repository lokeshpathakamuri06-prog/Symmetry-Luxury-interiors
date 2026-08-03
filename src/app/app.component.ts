import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header *ngIf="!isAdmin()" />
    <main><router-outlet /></main>
    <app-footer *ngIf="!isAdmin()" />
  `,
  styles: [':host { display: block; min-height: 100vh; }']
})
export class AppComponent {
  readonly isAdmin = signal(false);
  constructor(router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.isAdmin.set(router.url.startsWith('/admin')));
    this.isAdmin.set(router.url.startsWith('/admin'));
  }
}
