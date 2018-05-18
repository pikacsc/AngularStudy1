import { browser, by, element } from 'protractor';

export class AngularLessonForm3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
