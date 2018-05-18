import { Angular2RouterGuardPage } from './app.po';

describe('angular2-router-guard App', function() {
  let page: Angular2RouterGuardPage;

  beforeEach(() => {
    page = new Angular2RouterGuardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
