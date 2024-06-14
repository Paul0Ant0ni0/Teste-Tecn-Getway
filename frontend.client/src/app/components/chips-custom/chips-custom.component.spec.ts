import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsCustomComponent } from './chips-custom.component';

describe('ChipsCustomComponent', () => {
  let component: ChipsCustomComponent;
  let fixture: ComponentFixture<ChipsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
