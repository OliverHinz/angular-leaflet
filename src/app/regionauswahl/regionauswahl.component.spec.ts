import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionauswahlComponent } from './regionauswahl.component';

describe('RegionauswahlComponent', () => {
  let component: RegionauswahlComponent;
  let fixture: ComponentFixture<RegionauswahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionauswahlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
