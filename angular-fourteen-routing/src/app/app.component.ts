import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
