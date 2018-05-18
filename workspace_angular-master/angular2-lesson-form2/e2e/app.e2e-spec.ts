import { LessonForm2Page } from './app.po';

describe('lesson-form2 App', function() {
  let page: LessonForm2Page;

  beforeEach(() => {
    page = new LessonForm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
