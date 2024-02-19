import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMationsComponent } from './ng-mations.component';

describe('NgMationsComponent', () => {
  let component: NgMationsComponent;
  let fixture: ComponentFixture<NgMationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgMationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgMationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
