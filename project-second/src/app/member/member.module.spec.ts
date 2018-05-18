import { MemberModule } from './member.module';

describe('MemberModule', () => {
  let memberModule: MemberModule;

  beforeEach(() => {
    memberModule = new MemberModule();
  });

  it('should create an instance', () => {
    expect(memberModule).toBeTruthy();
  });
});
