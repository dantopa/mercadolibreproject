import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MainWebModule} from './components/main-web/main-web.module';
import {MainWebComponent} from './components/main-web/main-web.component';
import {AppModule} from './app.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AppModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
