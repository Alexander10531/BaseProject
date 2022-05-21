import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinventaryComponent } from './myinventary.component';

describe('MyinventaryComponent', () => {
  let component: MyinventaryComponent;
  let fixture: ComponentFixture<MyinventaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyinventaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
