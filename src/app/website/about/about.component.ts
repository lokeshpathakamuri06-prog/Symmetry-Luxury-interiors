import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  milestones = [
    {year:'1998',title:'Founded',description:'Started as a small design studio in Hyderabad with a vision for timeless interiors.'},
    {year:'2005',title:'Global Expansion',description:'Established partnerships with suppliers in Italy, China and Southeast Asia.'},
    {year:'2012',title:'Award Recognition',description:'Received the National Interior Design Excellence Award.'},
    {year:'2018',title:'500+ Projects',description:'Completed over 500 residential, commercial and hospitality projects.'},
    {year:'2024',title:'Industry Leader',description:'Recognized as one of India\'s premier interior design and sourcing firms.'}
  ];

  team = [
    {name:'Anand Kumar',role:'Founder & Principal Designer',image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',bio:'25+ years of experience in luxury interiors and architectural design.'},
    {name:'Priya Sharma',role:'Design Director',image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',bio:'Specialized in residential design and bespoke furniture curation.'},
    {name:'Ravi Mehta',role:'Global Sourcing Head',image:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',bio:'Expert in international furniture sourcing and supply chain management.'},
    {name:'Neha Reddy',role:'Project Manager',image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',bio:'Ensures every project is delivered with precision and excellence.'}
  ];

  reasons = [
    {icon:'bi-award',title:'Award-Winning Design',description:'Recognized nationally for excellence in interior design and execution.'},
    {icon:'bi-globe2',title:'Global Network',description:'Direct access to manufacturers across Italy, China, Malaysia, Vietnam and Bali.'},
    {icon:'bi-heart',title:'Client-Centric',description:'Every project begins with understanding your vision, lifestyle and aspirations.'},
    {icon:'bi-tools',title:'End-to-End Service',description:'From concept and design to sourcing, execution and installation.'},
    {icon:'bi-gem',title:'Quality Assured',description:'Rigorous quality checks at every stage ensure lasting craftsmanship.'},
    {icon:'bi-lightbulb',title:'Timeless Design',description:'We create spaces that remain beautiful, relevant and personal for years.'}
  ];

  stats = [
    {number:'25+',label:'Years Experience'},
    {number:'500+',label:'Projects Completed'},
    {number:'50+',label:'Team Members'},
    {number:'5',label:'Global Sources'}
  ];
}