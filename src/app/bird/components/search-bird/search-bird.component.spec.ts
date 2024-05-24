import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBirdComponent } from './search-bird.component';

describe('SearchBirdComponent', () => {
  let component: SearchBirdComponent;
  let fixture: ComponentFixture<SearchBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
