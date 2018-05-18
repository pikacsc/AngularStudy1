import { AngularHttpExamplePage } from './app.po';

describe('angular-http-example App', () => {
  let page: AngularHttpExamplePage;

  beforeEach(() => {
    page = new AngularHttpExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
