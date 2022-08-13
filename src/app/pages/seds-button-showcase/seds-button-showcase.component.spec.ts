import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsButtonShowcaseComponent } from './seds-button-showcase.component';

describe('SedsButtonShowcaseComponent', () => {
  let component: SedsButtonShowcaseComponent;
  let fixture: ComponentFixture<SedsButtonShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsButtonShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedsButtonShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
