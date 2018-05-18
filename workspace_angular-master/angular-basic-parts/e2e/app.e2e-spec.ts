import { AngularBasicPartsPage } from './app.po';

describe('angular-basic-parts App', () => {
  let page: AngularBasicPartsPage;

  beforeEach(() => {
    page = new AngularBasicPartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
