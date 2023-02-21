# javascript-study
자바스크립트 기본기의 이론을 공부하며, 기본기의 이해도를 쌓기 위해 이해가 되지 않았던 부분들을 블로그를 찾아보면서
실습해보고 또는 강의를 보면서 간단한 클론코딩 작업을 해보는 저장소입니다.
공부를 하면서 코드를 짜기 위해, 중요한 기본지식, 내용들은 정리해서 **벨로그에 업로드**를 했습니다.


## 실습
### /core.js ( 클로저 )
1. 처음에는 알고있는 지식으로 토글 버튼을 만들어보았다.
```javascript
const button = document.querySelector("button");
const text = document.querySelector("h2");
const actived = "active";

function textChangHandler() {
  if (text.className === actived) {
    text.className = "";
  } else {
    text.className = actived;
  }
}

button.addEventListener("click", () => textChangHandler());
```

2. 그 후 변수들을 지역변수로 넣어서 만들어보았다.
( `className`과 `classList`의 차이점을 추가적으로 알게 되었다. )
```javascript
function toggleText() {
  const button = document.querySelector("button");
  const text = document.querySelector(".chang_text");
  const actived = "active";

  const textChangHandler = function () {
    text.classList.toggle(actived);
  };

  button.addEventListener("click", textChangHandler);
}
toggleText();
```

3. 검색을 하지 않은 조건으로 클로저를 이용해서 토글버튼을 만들어보는 코드를 만들보았다.
```javascript
function ToggleChange() {
  const button = document.querySelector(".toggle_btn");
  const text = document.querySelector(".chang_text");

  const toggle = (function () {
    const actived = "active";

    return function () {
      text.classList.toggle(actived);
    };
  })();

  button.addEventListener("click", toggle);
}
ToggleChange();
```

처음에는 `뭐야 쉬운데 ?`라는 생각에 만들었지만, 하나씩 조건들을 추가하면서 만들어보았는데
꽤 어려웠고, 작동이 안되는데 그 이유를 잘 몰랐다.
간단한 동작을 조건을 걸어서 만드는데에 오래걸렸지만 어떻게 해서든 성공했고 작동된 후,
**클로저**에 관한 책, 공식문서, 블로그를 공부해보면서 더 알게 된 내용으로
클로저를 사용하는 이유는 여러이유가 있지만, 내가 생각하는 이유는 크게 두 가지로
1. 여러사람들과 공동작업을 할 때, 동일한 변수명을 방지하기 위해서이다.
2. 모듈화이다.

`ES5`에서 `var`를 사용해 해결할 수 있는 법 ( 즉시실행함수 ),
```javascript
function timer() {
  for (var i = 0; i < 10; i++) {
    (function (loop) {
      setTimeout(function () {
        console.log("timer", loop);
      }, 1000);
    })(i);
  }
}
timer();
```
`ES6`에서의 클로저를 활용하는 법을 알게 되는 공부였다.

[클로저에 관한 정리한 글 블로그 업로드](https://velog.io/@yangareum1818/JS-%ED%81%B4%EB%A1%9C%EC%A0%80)
<br/>

### /addEvent_bubbleing.js ( 이벤트 버블링, 캡쳐링, 위임 )
이벤트 관련 공부를 하게 된 계기가 있다.
혼자서 체크리스트를 만들면서 이벤트를 줄 해당 타겟을 `li`에 주어서 작업을 하는데 뜻 처럼 되지 않았다.
몇일을 머리를 싸매고 구조를 요리조리 돌려봐도 코드를 작성을 했을 때, 작동되지 않아서 힘들었다.
주변 아는 개발자분에게 코드를 보여주며 설명했고 왜 이럴까 ? 어떻게 짜야 작동이 될까 ? 코드의 문제점을 물어본 후,
고구마 100개 먹은 상태에서 사이다를 마셔 뻥- 뚫린 **힌트**를 받았던 부분이여서 `event`를 공부하게 되었다.
결론은 `ul`에 이벤트를 주고 이벤트 버블링을 이용하는 것이었다.
공부를 하면서 공식문서와 몇십개의 블로그를 거의 정독했다.

[이벤트 버블링, 캡쳐링, 위임에 관한 정리 글 블로그 업로드](https://velog.io/@yangareum1818/JS-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%BA%A1%EC%B3%90%EB%A7%81-%EC%9C%84%EC%9E%84)
<br/>

### /follow_up.js ( 순서도 그리는 공부 ( 끝말잇기 ) )
체크리스트를 만들면서 많은 점이 부족했지만, 그 중 제일 부족한 점이 어떤점이 부족한지 느낀 것이 있다.
기술능력은 공부하면서 터득하면 되는 부분이지만, 처음에 어떻게 구현하고 기능할 것인지의 **계획**이 부족했던 것 같았다.
만들면서 기능을 추가하며 머릿속이나 메모장으로 그 순간 순간의 해결해야 할 문제점을 적어가면서 작업을 했기에, 처음부터 순서도를 그린 후,
기능을 추가하더라도, 그 순서도에서 가지치기를 하면서 작업하는 것이 효율적이지 않을까 ? 생각이 들어 제로초님의 강의를 보면서
어떻게 계획하고 순서를 짜는지 공부하기 위해 강의를 보면서 만들었다.
조금 응용해 추가적인 기능으로 시작버튼을 만들어 클릭했을 때, 게임이 시작되도록 했다.
![끝말잇기 순서도 그리기 이미지](/assets/images/follow_up_drawio.png)

### /calculattor.js ( 계산기 만들기 (순서도) )


## /theory ( 이론, 실습 )
### /array.js ( 배열 )
배열안에서 추가, 삭제, 변경을 공부한 파일이다.
배열관련 되는 API등 관련 함수, 메소드등을 조금 더 공부해 정리를 해봐야 한다.
( 이미 알고는 있지만, 추가 복습 그리고 정리 )

### /asynchronous.js ( 콜백지옥, 비동기(promise와 async /await 활용), 예외처리 )
콜백지옥이 되는 코드를 치면서 비동기를 어떤상황에서 사용되는지 공부했던 파일이다.
원래는 간단하게 `axios`, `fetch`를 사용해서 `API`를 전송하는 법은 알고 있었지만, 비동기에 대해 조금 더 깊이 공부하다보니 아직 공부할 것이 많다.<br/>

공부한 내용.
1. HTTP는 무엇인가 ?
2. API를 HTTP통신 해주는 `axios`, `fetch`, `ajax`의 장단점
3. HTTP 메소드인 `get`, `put`, `post`, `delete`
4. `promise`와 `async/await`의 응용 그리고 이유 ( 효율 )
5. `response`, `request`
6. 예외처리 ( `error`처리 )

단순 전송뿐이 아닌 `response`, `request`가 무엇인지,  `primise`와 `async/await`를 사용하면서 `primise`를 `axios`, `fetch`, `async/await`과 같이 사용 하는 것이 효율적인 것을 알게되었고 그 외로 예외처리하는 상황까지 공부했다.<br/>

추가 공부.
1. 비동기 vs 멀티쓰레드<br/>

하지만, 실전으로 작업해본 경험이 적기에 많이 복습해보면서 실제로 무료 API를 가지고 코드를 많이 만져봐야겠다.
비동기에 대해서는 다시 공부하고 정리해야겠다. ( 추가적 복습 공부. )

### /closure.js ( 클로저 이론 )
아는 개발자분에게 클로저에대해 무엇인지 초반에 설명들으면서 예시를 보여주신 파일이다.
처음에는 설명해주셨을 때, 이해하지 못한부분이 90%를 차지했는데 지금 파일을 보니 무엇을 공부하라고 했는지, 무엇을 설명하려고 하셨던건지 이해가 갔다.

### /first_child_function.js ( 일급함수 === 일급객체 )
일급객체가 무엇인지 공부한 파일이다.
공부를 하게 되고 나서 알게된 결론은, 함수 또한 객체라는 것을 알게 되었다.
그리고 일급함수가 어느상황에 사용되는지를 알게되었다.
같은 기능이지만 값만 다른 경우에 그 필요한 기능을 하는 함수를 불러와 매개변수로 값을 전달 해 주면 코드는 아주 간결하게 줄어드는 마법을 경험하게 되었다.
그래서 그런 상황에서 사용되는 함수의 별칭이 일급함수의 종류들인 고차함수, 재귀함수에 알 수 있었다.
알기 전에는 `return`을 왜, 어디에 해야하는 지, 함수를 어느 곳에 지정해줘야 하는지를 모르고 남의 쓴 코드를 따라쓰기 바빴던거 같다.

### /constructor.js ( 생성자함수 )
생성자함수에 대해 공부 한 파일이다.

생성자함수로 객체생성, 객체리터럴로 객체생성 하는 차이를 공부하면서 인스턴스, `calculator`, `non-calculator`,에 대해서 공부해 정리해 벨로그에 업로드 했다.
일급객체와도 연관이 있다고 생각했다.
생성자함수를 만들어서 관련 기능 결과값을 넣고 필요한 상황 때, 그 함수와 기능을 메소드를 이용해서 뽑아내는 공부를 했다.

처음 아주 헷갈렸던 부분이 객체리터럴 ? 일급객체 ? 
아직은 함수로만 기능을 구현하는 방법으로만, 코드를 짜와서 생성자함수는 OOP에 관련된 내용들과 FP와 혼합되어 이게 이건가 아닌가 싶다.

그래서 `class`관련 내용을 공부하면서 다시 공부해야할 것 같다. 
방법만 공부한것.
의미, 내용을 공부하지 않은 것. 
( 복습. )

### /forStar.js ( 반복문 for, while, 중첩반복 ( 별찍기, 구구단 ), 변수추가(장바구니역할) )
`javascript`에서 빼놓을 수 없는 반복문이라, 이미 강의든 책이든 첫 부분쪽에 있는 반복문이다.
그러기에 너무 쉽다. 알고있다. 등의 생각으로 거만했던거 같았다.
이번에도 역시 `for` `while` 중첩반복을 공부했고 완벽하게 이해했다고 생각했지만,
체크리스트를 만들면서 리스트의 갯수, 선택한 리스트의 갯수 등을 표현하기 위해 새로운 변수를 추가해 응용해서 만드는 것에서 많이 해맸다.
그리고 코딩테스트에서도 이러한 문제가 꽤 있어서 풀었을 때에도 많이 해맸다.
```javascript
let sum= 0;
for(let i = 0 ; i < 9 ; i++ ) {
	sum += i ;  // sum = sum + i
}
console.log(sum);
```
새로 변수를 추가해서 응용이 된 부분이 생겨버리면, 내 뇌는 그거에 대해 아무 인식을 하지 못하는 것 같았다.
그래서 이번에 또 한번 거만은 절대 하지 않으리 반성하게 되었다.
`+=`연산자는 아직 익숙하지는 않지만, 장바구니 (가지고있다.)역할을 하는 것을
확실히 알게 되었고, `sum = sum + i`에 익숙해지면 그 뒤에 `+=`연산자를 사용해 보려고 한다.( 리펙토링 )

### /this.js ( 일반함수, 화살표함수, 생성자함수에서 this, (apply, call, bind를 이용한 this처리) )
상황에 따른 `this`에 대해 공부한 파일이다.
( `todolist`를 만들면서 마주했던 `this`였기에 조금 더 파고 들었다. )

전역, 지역, 일반함수, 화살표함수 등 `this`가 누구를 바라보게 되는지를 상황에 따라 달라지는 `this`를 알 수 있었다.
그리고 상황에 따른 `this`인데, 만약 함수안에서 전역변수를 바라보는 `this`를 해당 타겟에게 향하게 해주는 방법인 **우회법**을 알게되었다.

버전에 따른 우회법이 있는데,
`ES5`에서는
`this`를 변수를 만들어 지정해주는 법
( 이 방법은 대체적으로 지양한다고 한다. )

`ES6`에서는
`apply` `call` `bind` 메소드를 이용한 방법을 알게되었다.