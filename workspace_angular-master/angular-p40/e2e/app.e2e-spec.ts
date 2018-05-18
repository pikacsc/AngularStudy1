import { AngularP40Page } from './app.po';

describe('angular-p40 App', () => {
  let page: AngularP40Page;

  beforeEach(() => {
    page = new AngularP40Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
