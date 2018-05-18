# .git  깃 백업용 폴더

# .gitignore
백업 대상 제외 하는 파일 및 폴더의 설정 정보

# e2e 통합테스트 관련 폴더

# .editorconfig
에디터 설정

# node_modules
디펜던시 설치폴더


# package.json
디펜던시 관리 파일
dependencies,devDependencies 항목에 있는 모듈들이 node_modules 폴더에 설치된다.
package-lock.json 파일은 npm이 사용하는 디펜던시 관리 파일로 보관만 하면 된다.

# tsconfig.json
TypeScript, 트랜스파일링 설정 정보

# tslint.json
린트가 제안하는 코딩 스타일


# 프로젝트 시작하기
npm start

package.json
"name": "angular-simple-clone",
"version": "0.0.0",
"scripts": {
  "ng": "ng",
  "start": "ng serve --open=true --port=4885",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
},


# Angular cli-
-개발자대신 Babel 사용해서 트랜스 파일링을 처리한다.
-개발자대신 Webpack 사용해서 번들링 작업을 처리한다.


# Webpack
-쪼개져있는 모든 TS파일들을 하나로 합쳐준다(번들링)
-테스트 웹서버

# 배포
결과로 dist 폴더가 생김, dist 폴더 밑으로 작업결과가 생성됨


1.ng build  
테스트 빌드
배포테스트(브라우저 별로 정상 작동 여부 테스트)를 위한 ~.map 파일추가로 생성됨
소스 코드 압축은 적용되지 않는다.

1.ng build --prod
실제 배포용 파일(production)을 만듬
소스 코드 압축이 적용됨
3개의 .js 파일 + 1개의 .css 파일이 만들어지고
index.html 파일에 import 설정이 추가됨
TreeShaking 기법을 통해 테스트 빌드때와는 다르게 필요한 기능의 JS 소스만 배포함



# 실제 웹서버에서 서비스하기
배포파일들을 웹서버가 정한 정적 리소스 폴더에 배치한다
브라우저가 URL로 접속하여 자료를 요구하면 웹서버가 해당 파일을전송한다.

npm i -g http-server


http-server



실질적으로 손이 많이 가는 파일들

# src
개발자가 작성한 소스코드 위치


# angular.json
앵귤러 프로젝트 설정파일
브라우저에게 전달하는 HTML 파일, JS 기동 파일...





#CSS가 적용되는 룰

1.index.html 파일안에 CSS설정을 할 수 있다.
2.style.css 파일안에 css설정
3.기동 컴포넌트의 CSS설정이 배치된다.
4.자식 컴포넌트의 CSS설정이 배치된다.


모든 엘리먼트에 적용하고 싶은 CSS 설정은 index.html또는 style.css 파일에서 하면 되고
개별 컴포넌트 엘리먼트에 적용하고 싶은 CSS설정은 개별 컴포넌트의 CSS파일을 설정하면 된다.







# 라우팅 설정방법
동적으로 컴포넌트를 변경하고 싶은 위치에
<router-outlet>태그를 배치한다
그리고 모듈 설정파일에서 RouterModule 모듈을 임포트 할떄,
RouterModule.forRoot(appRoutes) 방식으로 라우팅 정보를 갖고있는 배열을 전달한다.



모든 컴포넌트는 각자 <router-outlet></router-outlet> 설정을 가질 수 있고
원한다면 다수의 라우트 아울렛을 설정 할 수도 있다.
```

const appRoutes: Routes = [

  //도메인 루트(/)로 접근할때 브라우저에게 재접속 URL 정보를 주고  
  //리다이렉트를 명령한다.
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //위에서 아무도 처리하지 못할 경우
  { path: '**', component: HomeComponent }
];
```




# ng g service common/state
앵귤러 생성 서비스 폴더명/파일명

서비스는 모듈파일에 등록이 자동으로 진행되지 않는다.
명시적으로 서비스를 원하는 모듈에 등록하고 싶다면
모듈의 설정정보에서 providers: [StateService] 항목에 설정하면된다

컴포넌트는 화면에 배치될때 생성되고 화면에서 사라질 때 파괴된다.
서비스는 화면을 갖고 있지 않으며 화면에 변화와 무관하기 때문에
컴포넌트에서 보관하고 싶은 상태정보를 서비스에게 저장하거나
저장된 데이터 또는 원격 웹서버로부터 서비스가 받아서 보관하는 정보를 서비스로부터 받아서 사용한다
