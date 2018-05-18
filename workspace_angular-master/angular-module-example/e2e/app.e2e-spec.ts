import { AngularModuleExamplePage } from './app.po';

describe('angular-module-example App', () => {
  let page: AngularModuleExamplePage;

  beforeEach(() => {
    page = new AngularModuleExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
