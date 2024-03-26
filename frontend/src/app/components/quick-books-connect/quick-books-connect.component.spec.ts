import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBooksConnectComponent } from './quick-books-connect.component';

describe('QuickBooksConnectComponent', () => {
  let component: QuickBooksConnectComponent;
  let fixture: ComponentFixture<QuickBooksConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickBooksConnectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickBooksConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
