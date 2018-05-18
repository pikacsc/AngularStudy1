import { AngularSimpleDemoPage } from './app.po';

describe('angular-simple-demo App', () => {
  let page: AngularSimpleDemoPage;

  beforeEach(() => {
    page = new AngularSimpleDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
