import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  submitting = false;

  form;

  contactDetails = [
    { icon:'bi-telephone-fill',    label:'Phone',   value:'+91 99999 88888', href:'tel:+919999988888' },
    { icon:'bi-whatsapp',          label:'WhatsApp',value:'+91 99999 88888', href:'https://wa.me/919999988888?text=Hello%2C%20I%27m%20interested%20in%20your%20interior%20services.' },
    { icon:'bi-envelope-fill',     label:'Email',   value:'info@symmetryinteriors.com', href:'mailto:info@symmetryinteriors.com' },
    { icon:'bi-geo-alt-fill',      label:'Office',  value:'Banjara Hills, Hyderabad, Telangana — 500034', href:'https://maps.google.com/?q=Banjara+Hills+Hyderabad' }
  ];

  officeHours = [
    { day:'Monday – Friday', hours:'10:00 AM – 7:00 PM' },
    { day:'Saturday',         hours:'10:00 AM – 5:00 PM' },
    { day:'Sunday',           hours:'By Appointment Only' }
  ];

  socialLinks = [
    { icon:'bi-instagram', label:'Instagram', href:'https://instagram.com/symmetryinteriors' },
    { icon:'bi-facebook',  label:'Facebook',  href:'https://facebook.com/symmetryinteriors' },
    { icon:'bi-linkedin',  label:'LinkedIn',  href:'https://linkedin.com/company/symmetryinteriors' },
    { icon:'bi-pinterest', label:'Pinterest', href:'https://pinterest.com/symmetryinteriors' }
  ];

  services = [
    'Residential Interiors',
    'Commercial Interiors',
    'Hospitality Interiors',
    'Turnkey Projects',
    'Custom Furniture',
    'Furniture Sourcing',
    'Lighting & Decor',
    'Global Sourcing'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      phone:   ['', Validators.required],
      service: ['Residential Interiors', Validators.required],
      budget:  [''],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        this.submitted = true;
        this.form.reset({ name:'', email:'', phone:'', service:'Residential Interiors', budget:'', message:'' });
      }, 1200);
    } else {
      this.form.markAllAsTouched();
    }
  }

  isInvalid(field: string) {
    const ctrl = this.form.get(field);
    return ctrl?.invalid && ctrl?.touched;
  }
}
