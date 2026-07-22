import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({selector:'app-checkout',standalone:true,imports:[ReactiveFormsModule],templateUrl:'./checkout.component.html',styleUrl:'./checkout.component.scss'})
export class CheckoutComponent {
  form;
  constructor(private fb:FormBuilder){this.form=this.fb.nonNullable.group({name:['',Validators.required],email:['',[Validators.required,Validators.email]],phone:['',Validators.required],address:['',Validators.required],city:['',Validators.required],pincode:['',Validators.required],payment:['Card',Validators.required]});}
  placeOrder(){if(this.form.valid)alert('Demo order placed. Connect your payment gateway and backend here.');}
}