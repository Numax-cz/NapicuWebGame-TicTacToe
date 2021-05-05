import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapicuComponentComponent } from './napicu-component.component';

describe('NapicuComponentComponent', () => {
  let component: NapicuComponentComponent;
  let fixture: ComponentFixture<NapicuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapicuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapicuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
