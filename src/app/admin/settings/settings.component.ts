import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({selector:'app-settings',standalone:true,imports:[FormsModule],templateUrl:'./settings.component.html',styleUrl:'./settings.component.scss'})
export class SettingsComponent { tab='general'; business={name:'Symmetry Interiors & Building Solutions Pvt. Ltd.',email:'info@symmetryinteriors.com',phone:'+91 98765 43210',address:'Hyderabad, Telangana, India'}; social={instagram:'',facebook:'',youtube:'',linkedin:''}; }
