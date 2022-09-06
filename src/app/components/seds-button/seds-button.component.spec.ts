import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsButtonComponent } from './seds-button.component';

describe('SedsButtonComponent', () => {
  let component: SedsButtonComponent;
  let fixture: ComponentFixture<SedsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
