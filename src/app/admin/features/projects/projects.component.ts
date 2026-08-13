import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {name:'Modern Villa, Hyderabad', type:'Residential', date:'Jul 2026', image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', status:'Published'},
    {name:'The Atelier Office', type:'Commercial', date:'Jun 2026', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', status:'Published'},
    {name:'Palm Court Residence', type:'Luxury Interior', date:'May 2026', image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80', status:'Featured'},
    {name:'Casa Verde', type:'Residential', date:'Apr 2026', image:'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80', status:'Published'},
    {name:'Urban House', type:'Turnkey Project', date:'Mar 2026', image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80', status:'Draft'},
    {name:'The Courtyard', type:'Hospitality', date:'Feb 2026', image:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80', status:'Published'},
  ];
}
