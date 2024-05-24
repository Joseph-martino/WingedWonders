import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirdComponent } from './add-bird.component';

describe('AddBirdComponent', () => {
  let component: AddBirdComponent;
  let fixture: ComponentFixture<AddBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
