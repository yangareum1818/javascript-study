const $startButton = document.querySelector(".start");

const startView = () => {
  const number = Number(prompt("몇 명이 참가하나요 ?"));

  if (number) {
    const $wrap = document.querySelector(".follow");
    const $button = document.querySelector(".fol_btn");
    const $input = document.querySelector(".fol_input");
    const $word = document.querySelector("#word");
    const $order = document.querySelector(".participant");
    let word; // 제시어
    let newWord; // 새로 입력한 단어

    $wrap.style.display = "block";
    // $startButton.textContent = "끝말잇기 끝내기 The End";

    const onClickButton = () => {
      if (!word || word[word.length - 1] === newWord[0]) {
        // 제시어가 비어있는가 ?
        word = newWord;
        $word.textContent = word;
        const order = parseInt($order.textContent); // 현재 순서
        if (order === number) {
          $order.textContent = 1;
        } else {
          $order.textContent = order + 1;
        }
      } else {
        // 비어있지 않는다. ( 채워져있다. )
        alert("옳바르지 않은 첫 단어입니다.");
      }
      $input.value = "";
      $input.focus();
    };
    const onInput = (e) => {
      newWord = e.target.value;
    };

    $button.addEventListener("click", onClickButton);
    $input.addEventListener("input", onInput);
  }
};

$startButton.addEventListener("click", startView);
