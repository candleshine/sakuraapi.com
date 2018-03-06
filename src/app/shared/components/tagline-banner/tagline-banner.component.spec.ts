import {
  async,
  ComponentFixture,
  TestBed
}                         from '@angular/core/testing';
import {ComponentsModule} from '../components.module';

import {TaglineBannerComponent} from './tagline-banner.component';

describe('TaglineBannerComponent', () => {
  let component: TaglineBannerComponent;
  let fixture: ComponentFixture<TaglineBannerComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ComponentsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
