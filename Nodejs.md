# Nodejs
- Node.js는 Javascript의 runtime입니다. 즉, Javascript program을 실행할 수 있게 해줍니다.
- 런타임> Runtime == 프로그램이 구동되는 환경

## Node.JS란
- 크롬 브라우저와 같이 자바스크립트가 실행되는 환경
- 명령어로 컴퓨터에서 자바스크립트 실행 가능
- 결과 또한 명령오로 실행한 검은 화면에서 확인가능
- 특징 : 이벤트 기반, 쓰레드 기반, 논블로킹 I/O

## 이 강의에서 만들 일반적인 서버 구조(개발 용어)
- Model(데이터베이스) <-> Router(주소, URL) <-> View(HTML, 화면)

## Node.js 개발을 도와주는 도구 Express

___  

```js
//메인 페이지를 만드는 방법
app.get("/", function(req, res){
    res.send('Hello World');
})

```

## npm supervisor
- 설치 커맨드 : npm install supervisor
- 작동 : supervisor app.js
- app.js를 저장할 때마다 서버를 새로 연다.

## npmjs.com
- 서버 개발할 때 필요한 여러가지 도구들이 npm에 있음

## router
- 여러 주소들을 app.js에 다 넣으면 굉장히 커지기 때문에 이를 router에서 분리하여 관리한다.