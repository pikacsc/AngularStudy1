import { AngularLifeCyclePage } from './app.po';

describe('angular-life-cycle App', () => {
  let page: AngularLifeCyclePage;

  beforeEach(() => {
    page = new AngularLifeCyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
