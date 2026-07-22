import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({selector:'app-media',standalone:true,imports:[CommonModule,],templateUrl:'./media.component.html',styleUrl:'./media.component.scss'})
export class MediaComponent { row=['hero-interior.svg', 'SVG', 'Today', 'Ready']; }
