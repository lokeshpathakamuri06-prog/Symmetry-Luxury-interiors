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
    <div class="site-loader" *ngIf="isLoading()" aria-live="polite" aria-label="Loading website">
      <div class="loader-inner">
        <img src="assets/images/logo2.svg" alt="Symmetry Interiors logo" class="loader-logo" />
        <div class="loader-bar">
          <span></span>
        </div>
        <p>Symmetry Interiors</p>
      </div>
    </div>

    <app-header *ngIf="showSiteChrome()" />
    <main><router-outlet /></main>
    <app-footer *ngIf="showSiteChrome()" />
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: #f7f3ee;
    }

    .site-loader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top, rgba(179, 154, 112, 0.18), rgba(15, 12, 9, 0.95) 45%, rgba(10, 8, 6, 1));
      backdrop-filter: blur(8px);
    }

    .loader-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      text-align: center;
      animation: fadeInUp 0.7s ease both;
    }

    .loader-logo {
      width: clamp(160px, 20vw, 240px);
      height: auto;
      filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.25));
      animation: pulseLogo 1.8s ease-in-out infinite;
    }

    .loader-bar {
      width: min(280px, 62vw);
      height: 2px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }

    .loader-bar span {
      position: absolute;
      inset: 0 auto 0 0;
      width: 40%;
      border-radius: inherit;
      background: linear-gradient(90deg, rgba(212, 175, 107, 0.5), rgba(255, 255, 255, 0.9), rgba(212, 175, 107, 0.5));
      animation: loadingBar 1.5s ease-in-out infinite;
    }

    .loader-inner p {
      margin: 0;
      color: rgba(255, 255, 255, 0.82);
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 10px;
    }

    @keyframes loadingBar {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(180%); }
      100% { transform: translateX(320%); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(14px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulseLogo {
      0%, 100% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(1.06); opacity: 1; }
    }
  `]
})
export class AppComponent {
  readonly isAdmin = signal(false);
  readonly isLogin = signal(false);
  readonly isLoading = signal(true);
  showSiteChrome = () => !this.isAdmin() && !this.isLogin();

  constructor(router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.setRouteState(router.url));
    this.setRouteState(router.url);

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1400);
  }

  private setRouteState(url: string): void {
    this.isAdmin.set(url.startsWith('/admin'));
    this.isLogin.set(url.startsWith('/login'));
  }
}
