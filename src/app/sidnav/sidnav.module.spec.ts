import { SidnavModule } from './sidnav.module';

describe('SidnavModule', () => {
  let sidnavModule: SidnavModule;

  beforeEach(() => {
    sidnavModule = new SidnavModule();
  });

  it('should create an instance', () => {
    expect(sidnavModule).toBeTruthy();
  });
});
