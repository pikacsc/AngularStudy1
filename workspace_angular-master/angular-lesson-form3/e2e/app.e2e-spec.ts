import { AngularLessonForm3Page } from './app.po';

describe('angular-lesson-form3 App', () => {
  let page: AngularLessonForm3Page;

  beforeEach(() => {
    page = new AngularLessonForm3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
