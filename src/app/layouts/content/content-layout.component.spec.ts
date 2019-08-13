import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppContentLayoutComponent } from './content-layout.component';

describe('AppContentLayoutComponent', () => {
  let component: AppContentLayoutComponent;
  let fixture: ComponentFixture<AppContentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
