import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Project {
  id: number;
  name: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  year: number;
  area: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  activeCategory = signal<string>('All');

  categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  allProjects: Project[] = [
    // Residential
    { id:1,  name:'The Banjara Residence',      category:'Residential',  location:'Hyderabad',  year:2024, area:'6,200 sq ft', image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80', featured:true },
    { id:2,  name:'The Jubilee Penthouse',       category:'Residential',  location:'Hyderabad',  year:2023, area:'4,800 sq ft', image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80', featured:true },
    { id:3,  name:'The Koramangala Villa',       category:'Residential',  location:'Bengaluru',  year:2023, area:'8,500 sq ft', image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80' },
    { id:4,  name:'The Boat Club Apartment',     category:'Residential',  location:'Chennai',    year:2022, area:'3,200 sq ft', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80' },
    { id:5,  name:'The Whitefield Farmhouse',    category:'Residential',  location:'Bengaluru',  year:2022, area:'12,000 sq ft',image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=80' },
    // Commercial
    { id:6,  name:'The Executive HQ',            category:'Commercial',   location:'Bengaluru',  year:2024, area:'18,000 sq ft',image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80', featured:true },
    { id:7,  name:'The Fintech Campus',          category:'Commercial',   location:'Hyderabad',  year:2023, area:'24,000 sq ft',image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80' },
    { id:8,  name:'The Design Studio',           category:'Commercial',   location:'Mumbai',     year:2023, area:'5,400 sq ft', image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80' },
    { id:9,  name:'The Retail Flagship',         category:'Commercial',   location:'Delhi',      year:2022, area:'3,800 sq ft', image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80' },
    // Hospitality
    { id:10, name:'The Grand Retreat',           category:'Hospitality',  location:'Goa',        year:2024, area:'32,000 sq ft',image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80', featured:true },
    { id:11, name:'The Nilgiri Boutique Hotel',  category:'Hospitality',  location:'Ooty',       year:2023, area:'9,500 sq ft', image:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80' },
    { id:12, name:'The Coastal Spa & Resort',    category:'Hospitality',  location:'Pondicherry',year:2022, area:'14,000 sq ft',image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80' },
  ];

  filtered = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === cat);
  });

  stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '25+',  label: 'Years Experience' },
    { number: '12',   label: 'Cities Across India' },
    { number: '3',    label: 'Project Categories' }
  ];

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }

  count(cat: string) {
    return cat === 'All'
      ? this.allProjects.length
      : this.allProjects.filter(p => p.category === cat).length;
  }
}
