import { Injectable, signal } from '@angular/core';

export interface HeroSlide { image:string; label:string; heading:string; headingEm:string; sub:string; }
const defaults: HeroSlide[] = [
  {image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85',label:'Residential Design',heading:'Where Luxury Meets',headingEm:'Timeless Design',sub:'Transforming spaces into extraordinary experiences through refined design and exceptional craftsmanship.'},
  {image:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1920&q=85',label:'Interior Architecture',heading:'Spaces That',headingEm:'Inspire Living',sub:'Bespoke interiors shaped by your vision, from first sketch to a beautifully finished space.'},
  {image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=85',label:'Bedroom & Private Spaces',heading:'Refined Comfort,',headingEm:'Effortless Elegance',sub:'Every room designed with precision, warmth and the materials that define true luxury.'}
];
@Injectable({providedIn:'root'})
export class WebsiteContentService {
  private readonly key = 'symmetry-home-slides';
  readonly slides = signal<HeroSlide[]>(this.load());
  update(index:number, patch:Partial<HeroSlide>) { this.save(this.slides().map((slide,i) => i === index ? {...slide,...patch} : slide)); }
  add() { this.save([...this.slides(), {image:defaults[0].image,label:'New Collection',heading:'A New Story',headingEm:'Begins Here',sub:'Describe this new collection or experience.'}]); }
  remove(index:number) { if(this.slides().length > 1) this.save(this.slides().filter((_,i) => i !== index)); }
  private load():HeroSlide[] { try { return JSON.parse(localStorage.getItem(this.key) || '') || defaults; } catch { return defaults; } }
  private save(slides:HeroSlide[]) { this.slides.set(slides); localStorage.setItem(this.key,JSON.stringify(slides)); }
}
