import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed
}                                from '@angular/core/testing';
import {SharedModule}            from '../../shared.module';
import {TaglineBannerComponent}  from './tagline-banner.component';

describe('TaglineBannerComponent', () => {
  let component: TaglineBannerComponent;
  let fixture: ComponentFixture<TaglineBannerComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
          SharedModule
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
