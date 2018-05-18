import { AngularRoutingPage } from './app.po';

describe('angular-routing App', () => {
  let page: AngularRoutingPage;

  beforeEach(() => {
    page = new AngularRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
