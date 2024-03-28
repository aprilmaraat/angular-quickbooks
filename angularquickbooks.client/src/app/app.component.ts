import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuickbooksOnlineService } from './services/quickbooks-online.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Quickbooks Client';
  qboButtonLoad: boolean = false;

  constructor(
    private http: HttpClient, 
    private _qboService: QuickbooksOnlineService) {}

  ngOnInit() {

  }

  initiateAuth() {
    this.qboButtonLoad = true;
    this._qboService.connectToQuickbooks().subscribe({
      next: response => {
        console.log(response);
        if(response.wasSuccess) {
          window.location.href = response.responseObject;
        }
      },
      error: response => {}
    });
  }

}
