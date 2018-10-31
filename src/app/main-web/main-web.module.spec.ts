import { MainWebModule } from './main-web.module';

describe('MainWebModule', () => {
  let mainWebModule: MainWebModule;

  beforeEach(() => {
    mainWebModule = new MainWebModule();
  });

  it('should create an instance', () => {
    expect(mainWebModule).toBeTruthy();
  });
});
