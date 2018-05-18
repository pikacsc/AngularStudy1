import { Injectable } from '@angular/core';

@Injectable()
// 앵귤러가 @Injectable 데코레이터가 붙어있는 클래스를 스캐닝으로 찾아서
// 모듈 컨테이너에 자동으로 등록한다.
// 명시적 방법: 서비스를 소유할 모듈의 설정정보 providers:[stateService] 항목에

export class StateService {
  private message = 'Hello Message';

  getMessage(): string {
    return this.message;
  };

  setMessage(message: string): void {
    this.message = message;
  };
}
