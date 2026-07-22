import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'app-faq', standalone:true, imports:[CommonModule],
  templateUrl:'./faq.component.html', styleUrl:'./faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {q:'Do you provide turnkey interior solutions?',a:'Yes. Our turnkey services cover design coordination, furniture, sourcing and project execution.'},
    {q:'Can furniture be customized?',a:'Yes. Selected furniture can be customized based on dimensions, materials, finishes and colours.'},
    {q:'Do you source internationally?',a:'Yes. We work with global sourcing destinations including Italy, China, Malaysia, Vietnam and Bali.'},
    {q:'How can I start a project?',a:'Contact our team through the enquiry form and share your project requirements.'}
  ];
}