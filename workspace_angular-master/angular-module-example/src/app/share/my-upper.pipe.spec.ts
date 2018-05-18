import { MyUpperPipe } from './my-upper.pipe';

describe('MyUpperPipe', () => {
  it('create an instance', () => {
    const pipe = new MyUpperPipe();
    expect(pipe).toBeTruthy();
  });
});
