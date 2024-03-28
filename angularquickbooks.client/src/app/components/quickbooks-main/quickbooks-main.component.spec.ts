import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbooksMainComponent } from './quickbooks-main.component';

describe('QuickbooksMainComponent', () => {
  let component: QuickbooksMainComponent;
  let fixture: ComponentFixture<QuickbooksMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickbooksMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickbooksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
