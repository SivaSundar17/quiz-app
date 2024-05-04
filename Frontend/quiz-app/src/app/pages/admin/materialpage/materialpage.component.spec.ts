import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialpageComponent } from './materialpage.component';

describe('MaterialpageComponent', () => {
  let component: MaterialpageComponent;
  let fixture: ComponentFixture<MaterialpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
