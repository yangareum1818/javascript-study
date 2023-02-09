// 1. 이벤트 캡쳐링.
const capture = document.querySelector(".capture");
const divs = capture.querySelectorAll("div");
divs.forEach((elm) => {
  elm.addEventListener("click", logEvent, {
    capture: true,
  });
});
function logEvent(event) {
  console.log(event.currentTarget.className);
}

// 2. 이벤트 버블링 조건문을 이용해 막기.
const bubbleBlock = document.querySelector(".bubble");
const green = bubbleBlock.querySelector(".green");
green.addEventListener("click", function (e) {
  const { target, currentTarget } = e;

  // 이 조건문을 이용하면 이벤트버블링을 막을 수 있다.
  // if ( target !== currentTarget ) return

  // console.log로 currentTarget과 target의 차이점을 확인.
  console.log("currentTarget : ", currentTarget.className);
  console.log("Target : ", target.className);
});

// 3. 이벤트 버블링을 이용한 위임 공부. (예: 리스트형식)
// 상위 ul tag에 이벤트 부여 , 이벤트 버블링 효과에 따라 아래 li에 요소가 추가되도 이벤트 실행 가능
const itemList = document.querySelector(".itemList"); // ul
itemList.addEventListener("click", function (event) {
  event.target.style.textDecoration = !event.target.style.textDecoration
    ? "line-through"
    : "";
});
// 새 리스트 아이템을 추가하는 코드
const li = document.createElement("li");
var input = document.createElement("input");
var label = document.createElement("label");
var labelText = document.createTextNode("이벤트 위임 하기");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "list4");
label.setAttribute("for", "list4");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
