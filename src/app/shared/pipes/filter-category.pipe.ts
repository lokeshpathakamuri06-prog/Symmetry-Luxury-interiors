import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterCategory', standalone: true })
export class FilterCategoryPipe implements PipeTransform {
  transform(products: any[], category: string): number {
    return products.filter(p => p.category === category).length;
  }
}
