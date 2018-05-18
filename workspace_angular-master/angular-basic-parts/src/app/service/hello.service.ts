import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  helloTitle = 'This is HelloService\'s Title.';

  constructor() { }

  getTitle() {
    return this.helloTitle;
  }

  setTitle(title) {
    this.helloTitle = title;
  }
}
