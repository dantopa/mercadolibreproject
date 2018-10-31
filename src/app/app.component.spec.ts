import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MainWebModule} from './main-web/main-web.module';
import {MainWebComponent} from './main-web/main-web.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        MainWebModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
