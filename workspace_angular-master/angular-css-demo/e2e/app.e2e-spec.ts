import { AngularCssDemoPage } from './app.po';

describe('angular-css-demo App', () => {
  let page: AngularCssDemoPage;

  beforeEach(() => {
    page = new AngularCssDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
