import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HavyLoadersFastComponent } from '@shared/havy-loaders/havy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,HavyLoadersFastComponent,TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
