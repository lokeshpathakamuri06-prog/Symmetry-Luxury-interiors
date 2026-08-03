import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen   = false;
  isScrolled = false;
  searchOpen = false;
  constructor(public cart: CartService) {}

  @HostListener('window:scroll')
  onScroll(): void { this.isScrolled = window.scrollY > 50; }

  toggleMenu():  void { this.menuOpen   = !this.menuOpen;   }
  closeMenu():   void { this.menuOpen   = false;            }
  toggleSearch():void { this.searchOpen = !this.searchOpen; }
}
