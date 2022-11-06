import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Text should be equal to => Contact us: +57 3102105253 - info@viveroelotonio.com - @viveroelotonio', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Contact us: +57 3102105253 - info@viveroelotonio.com - @viveroelotonio');
  });
});
