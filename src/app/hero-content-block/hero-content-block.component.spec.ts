import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContentBlockComponent } from './hero-content-block.component';

describe('HeroContentBlockComponent', () => {
  let component: HeroContentBlockComponent;
  let fixture: ComponentFixture<HeroContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContentBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
