import { AngularRxjsIntervalPage } from './app.po';

describe('angular-rxjs-interval App', () => {
  let page: AngularRxjsIntervalPage;

  beforeEach(() => {
    page = new AngularRxjsIntervalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
