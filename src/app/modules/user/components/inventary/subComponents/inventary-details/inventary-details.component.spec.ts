import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaryDetailsComponent } from './inventary-details.component';

describe('InventaryDetailsComponent', () => {
  let component: InventaryDetailsComponent;
  let fixture: ComponentFixture<InventaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
