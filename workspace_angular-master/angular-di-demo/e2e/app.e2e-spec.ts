import { AngularDiDemoPage } from './app.po';

describe('angular-di-demo App', () => {
  let page: AngularDiDemoPage;

  beforeEach(() => {
    page = new AngularDiDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
