import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerComponent } from './banner.component';

describe('HomeBannerComponent', () => {
  let component: HomeBannerComponent;
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
