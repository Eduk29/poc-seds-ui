import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsMastheadShowcaseComponent } from './seds-masthead-showcase.component';

describe('SedsMastheadShowcaseComponent', () => {
  let component: SedsMastheadShowcaseComponent;
  let fixture: ComponentFixture<SedsMastheadShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsMastheadShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedsMastheadShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
