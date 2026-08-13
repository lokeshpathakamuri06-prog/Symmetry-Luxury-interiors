import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  active = 'General';
  settings = ['General','Website','Communication','Payment','Security'];
  form = new FormGroup({
    company: new FormControl('Symmetry Interiors & Building Solutions Pvt. Ltd.'),
    email: new FormControl('hello@symmetryinteriors.com'),
    phone: new FormControl('+91 98765 43210'),
    address: new FormControl('Hyderabad, Telangana, India'),
    hours: new FormControl('Mon – Sat · 10:00 AM – 7:00 PM')
  });
}
