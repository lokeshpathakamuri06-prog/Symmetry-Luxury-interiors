import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
@Component({selector:'app-cart',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./cart.component.html',styleUrl:'./cart.component.scss'})
export class CartComponent { constructor(public cart: CartService) {} update(id:number, quantity:number) { this.cart.update(id,quantity); } }
