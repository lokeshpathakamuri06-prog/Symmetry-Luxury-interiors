import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
export class EnquiriesComponent {
  selected = signal<any>(null);
  enquiries = [
    {name:'Rahul Sharma', service:'Full Home Interiors', phone:'+91 98765 43210', date:'Today, 10:42 AM', status:'New'},
    {name:'Priya Mehta', service:'Custom Furniture', phone:'+91 98452 19822', date:'Today, 09:18 AM', status:'Contacted'},
    {name:'Arjun Reddy', service:'Turnkey Solution', phone:'+91 99887 66112', date:'Yesterday', status:'Follow-up'},
    {name:'Ananya Rao', service:'Residential Interiors', phone:'+91 91234 56789', date:'Aug 11, 2026', status:'Qualified'},
    {name:'Vikram Singh', service:'Commercial Interiors', phone:'+91 90000 12345', date:'Aug 10, 2026', status:'Converted'},
  ];
}
