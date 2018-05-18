import { LessonFormPage } from './app.po';

describe('lesson-form App', function() {
  let page: LessonFormPage;

  beforeEach(() => {
    page = new LessonFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
