import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
@Component({selector:'app-checkout',standalone:true,imports:[CommonModule,ReactiveFormsModule,RouterLink],templateUrl:'./checkout.component.html',styleUrl:'./checkout.component.scss'})
export class CheckoutComponent {
  complete = false; orderNumber = '';
  form = this.fb.nonNullable.group({name:['',Validators.required],email:['',[Validators.required,Validators.email]],phone:['',Validators.required],address:['',Validators.required],city:['',Validators.required],pincode:['',Validators.required],payment:['UPI',Validators.required]});
  constructor(private fb:FormBuilder, public cart:CartService) {}
  placeOrder() { if(this.form.invalid || !this.cart.items().length) { this.form.markAllAsTouched(); return; } this.orderNumber = `SYM-${Date.now().toString().slice(-6)}`; this.cart.clear(); this.complete = true; window.scrollTo({top:0,behavior:'smooth'}); }
}
