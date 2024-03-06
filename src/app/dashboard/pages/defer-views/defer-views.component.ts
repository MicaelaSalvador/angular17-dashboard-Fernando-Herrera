import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HavyLoadersSlowComponent } from '@shared/havy-loaders/havy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [CommonModule, HavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
