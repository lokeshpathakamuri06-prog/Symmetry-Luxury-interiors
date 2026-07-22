import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({selector:'app-cart',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./cart.component.html',styleUrl:'./cart.component.scss'})
export class CartComponent { quantity=1; price=85000; get total(){return this.quantity*this.price;} }