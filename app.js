const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinClick(event) {
  event.preventDefault();
  console.dir(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinClick);

handleLinkClick({});
