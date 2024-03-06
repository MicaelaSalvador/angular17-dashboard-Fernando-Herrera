import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-havy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template:`
  <section [ngClass]="['w-full',cssClass]">
    <ng-content/>
  </section>
  `
})
export class HavyLoadersFastComponent {

  @Input({required: true}) cssClass!:string;

  constructor(){
    console.log('HeavyLoader Fast creado')
  }

}

