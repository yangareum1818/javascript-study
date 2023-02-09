// class callbackhell
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "user" && password === "12341234") ||
        (id === "areum" && password === "56785678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "user") {
        onSuccess({ name: "user", role: "admin" });
      } else {
        onError(new Error("no access!!"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID!!");
const password = prompt("enter your PASSWORD!!");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you Have a ${userWithRole.role} role!!`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// ⬆️ callback hell ⬆️ Promise 수정 해보기
class UserStorage2 {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "user" && password === "12341234") ||
          (id === "areum" && password === "56785678")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found!!!"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "user") {
          resolve({ name: "user", role: "admin" });
        } else {
          reject(new Error("no access!!"));
        }
      }, 1000);
    });
  }
}

const userStorage2 = new UserStorage2();
const userId = prompt("enter your ID!!");
const userPassword = prompt("enter your PASSWORD!!");

userStorage2
  .loginUser(userId, userPassword)
  .then(userStorage2.getRoles)
  .then((user) => {
    alert(`Hello ${user.name}, you Have a ${user.role} role !!`);
  })
  .catch(console.log);

// ⬆️ callback hell ⬆️ async await promise 수정 해보기

// Promise
// 프로듀서
const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    resolve("ya ho !!!");
    // reject(new Error("no network!!!!"));
  }, 2000);
});

// 소비자 사용자 클라이언트
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "성공 실패 여부가 필요없고 어떤 마지막의 기능을 수행하기 위한 파이널리!!"
    );
  });

// Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// Error Handleing
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(
      // () => resolve(`${hen} => 🥚`),
      reject(new Error(`error !! ${hen} => 🥚`)),
      1000
    );
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg)
  .catch((error) => {
    return "🥖 ";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// err는 어느 상황에 맞는지 봐가면서 catch를 사용하면 좋을 것이다.

// async / await
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function Fruits() {
  console.log("Singly Start");

  async function getTomato() {
    await delay(2000);
    return new Promise((resolve, reject) => {
      const boolean = true;
      if (boolean) {
        resolve("🍅 토마토");
      } else {
        reject(new Error("토마토 에러 !!!"));
      }
    });
  }

  async function getBanana() {
    await delay(3500);
    return new Promise((resolve, reject) => {
      const boolean = true;
      if (boolean) {
        resolve("🍌 바나나");
      } else {
        reject(new Error("바나나 에러 !!"));
      }
    });
  }

  async function getOrange() {
    await delay(1000);
    return new Promise((resolve, reject) => {
      const boolean = true;
      if (boolean) {
        resolve("🍊 오렌지");
      } else {
        reject("오렌지 에러 !!");
      }
    });
  }

  async function getMelon() {
    await delay(3700);
    return new Promise((resolve, reject) => {
      const boolean = true;
      if (!boolean) {
        resolve("🍈 메론 찾았다 !");
      } else {
        reject(new Error("🍉 메론이 아니라 수박이잖아 !!"));
      }
    });
  }

  const tomato = getTomato();
  const banana = getBanana();
  const orange = getOrange();
  const melon = getMelon();

  const fruit = [tomato, banana, orange, melon];

  Promise.allSettled(fruit)
    .then((fruits) => {
      for (let fruits of fruit) {
        console.log(fruits);
      }
    })
    .catch((err) => console.log(err));
}
Fruits();

// new Promise는 자동으로 호출된다.
// Promise 내부함수는 동기이고 Promise안에 setTimeout 내부가 비동기 함수이다.
const p = new Promise((resolve, reject) => {
  console.log("제일 먼저 start");
  setTimeout(() => {
    a = 5;
    if (a === 5) {
      a = 5;
      resolve(a);
    } else {
      reject(new Error("5가 아니예요 !!"));
    }
    console.log(a);
  }, 0);
});
console.log("두번째 호출 start");
p.then((result) => {
  console.log("result", result);
}).catch((err) => console.log("err", err));

// Promise.resolve()

// 초에 맞게 순차대로 하나씩 모든 나타나기.
getTomato()
  .then((fruit) => {
    console.log(fruit);
    return getBanana(fruit);
  })
  .then((fruit) => {
    console.log(fruit);
    return getOrange(fruit);
  })
  .then((fruit) => {
    console.log(fruit);
  });

// 잠시 대기 --
// aysync await로 초에 맞게 순차대로 하나씩 모든 과일 나타나기
async function singlyFruits() {
  console.log("Singly Start");
  const tomatoPromise1 = getTomato();
  const bananaPromise1 = getBanana();
  const orangePromise1 = getOrange();
  const melonPromise1 = getMelon();

  const tomato = await tomatoPromise1;
  const banana = await bananaPromise1;
  const orange = await orangePromise1;
  const melon = await melonPromise1;

  return Promise.all([tomato, banana, orange, melon])
    .then((fruit) => {
      console.log(fruit);
    })
    .catch((err) => console.log("Error : ", err));
}
singlyFruits();
// 잠시 대기 -- end

// promise를 이용한 클릭 후 원이 그려지기
function goClick() {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}

// aysync await로만 모든 과일 나타나기
async function fickFruits() {
  const tomatoPromise = getTomato();
  const bananaPromise = getBanana();
  const orangePromise = getOrange();

  const tomato = await tomatoPromise;
  const banana = await bananaPromise;
  const orange = await orangePromise;

  return `${tomato} + ${banana} + ${orange}`;
}
fickFruits().then(console.log);

// Promise.all을 이용해 모든 과일을 한꺼번에 가져오기
async function fickAllFruits() {
  return Promise.all([getTomato(), getBanana(), getOrange()]).then((fruit) =>
    fruit.join(" + ")
  );
}
fickAllFruits().then(console.log);

// 제일 초가 짧은 과일
async function fickOnlyOne() {
  return Promise.race([getTomato(), getBanana(), getOrange()]);
}
fickOnlyOne().then(console.log);

// async / await - try / catch
function delay2(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
async function getTomato2() {
  await delay2(5000);
  return "🍅 토마토2";
}

async function getBanana2() {
  await delay2(6500);
  return "🍌 바나나2";
}

async function getOrange2() {
  await delay2(8000);
  return "🍊 오렌지2";
}

getTomato2().then(console.log);
getBanana2().then(console.log);
getOrange2().then(console.log);

// ex) async / await - try / catch
function time() {
  return new Promise((res) => {
    setTimeout(() => {
      return res("success");
    }, 10000);
  });
}

async function timetext() {
  try {
    const resTime = await time();
    console.log(resTime);
  } catch (e) {
    console.log(e);
  }
}

timetext();

// 비동기 Promise를 이용해 console.log에 먼저찍히는 순서.
let promise1 = new Promise((resolve, reject) => {
  //promise 생성
  setTimeout(() => {
    resolve(3);
    console.log(1); //3000ms후 실행
  }, 3000);
});

promise1.then((value) => {
  //then의 익명함수에서 받은 매개변수는 resolve에 들어있는 값을 받는다.
  //then안에 promise다음에 실행될 함수를 실행시킨다
  console.log(2);
  console.log(value); //value는 resolve에 들어서 반환된 값
});
