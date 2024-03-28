import { Injectable, Injector } from '@angular/core';
import { map } from 'rxjs';
import { GenericService } from './generic.service';
import { QBO } from './models/constants/endpoint.constants';

@Injectable({
  providedIn: 'root'
})
export class QuickbooksOnlineService extends GenericService {
  constructor(injector: Injector) {
    super(injector);
    this.baseUrl += QBO.BASE;
  }

  connectToQuickbooks() {
    return this.get(QBO.INITIATE_AUTH).pipe(map(response => {
      return response;
    }));
  }
}
