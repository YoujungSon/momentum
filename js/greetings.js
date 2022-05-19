const loginForm = document.querySelector("#login-form"); //form 태그
const loginInput = document.querySelector("#login-form input"); // input태그
const greeting = document.querySelector("#greeting"); /// h1태그
const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const USERNAME_KEY = "username";
function onLoginsubmit(event) {
  // onLoginsubmit라는 함수에 event라는 argument가 있다.
  event.preventDefault(); // 이 function에 대해 브라우저에서 기본으로 수행되는 동작을 막아준다. //form을 submit을 하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어 있다.
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function handleLinkClick(event) {
  event.preventDefault(); // 링크로 이동하지 않음. 기본 설정을 막음(브라우저는 링크를 클릭할 때 해당 사이트로 이동하도록 설정되어 있다.)
  //defaultPrevented 값이 true
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // h1태그에 저장된이름을 넣는다.
  greeting.classList.remove(HIDDEN_CLASSNAME); //
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreetings(saveUsername);
}
