import { Angular2RouterResolvePage } from './app.po';

describe('angular2-router-resolve App', function() {
  let page: Angular2RouterResolvePage;

  beforeEach(() => {
    page = new Angular2RouterResolvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
