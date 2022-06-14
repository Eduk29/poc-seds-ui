import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsShowcaseComponent } from './seds-showcase.component';

describe('SedsShowcaseComponent', () => {
  let component: SedsShowcaseComponent;
  let fixture: ComponentFixture<SedsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
