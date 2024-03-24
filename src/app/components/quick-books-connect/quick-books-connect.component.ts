import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-quick-books-connect',
  standalone: true,
  imports: [
    RouterOutlet, 
    NzButtonModule
  ],
  templateUrl: './quick-books-connect.component.html',
  styleUrl: './quick-books-connect.component.sass'
})
export class QuickBooksConnectComponent {

}
