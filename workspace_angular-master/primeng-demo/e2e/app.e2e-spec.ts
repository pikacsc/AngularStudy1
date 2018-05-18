import { PrimengDemoPage } from './app.po';

describe('primeng-demo App', () => {
  let page: PrimengDemoPage;

  beforeEach(() => {
    page = new PrimengDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
