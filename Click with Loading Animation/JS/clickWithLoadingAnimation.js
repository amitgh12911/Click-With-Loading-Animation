let bodyElement = document.body;
let containerElement = document.createElement("div");
let firstChildElement = document.createElement("div");
let secondChildElement = document.createElement("div");
let btnElement = document.createElement("button");
containerElement.classList.add("container");
firstChildElement.innerHTML =
    "What is your name<span class='question-mark'>&#10067;</span>";
btnElement.innerHTML = "click me";
containerElement.appendChild(firstChildElement);
containerElement.appendChild(secondChildElement);
containerElement.appendChild(btnElement);
bodyElement.appendChild(containerElement);

btnElement.addEventListener("click", function clicked() {
    if (secondChildElement.innerHTML === "") {
        secondChildElement.innerHTML = "Loading &nbsp;&nbsp;&nbsp;&#128123;";
        setTimeout(() => {
            secondChildElement.innerHTML = "Loading. &nbsp;&nbsp;&#128123;";
        }, 250);
        setTimeout(() => {
            secondChildElement.innerHTML = "Loading.. &nbsp;&#128123;";
        }, 500);
        setTimeout(() => {
            secondChildElement.innerHTML = "Loading... &#128123;";
        }, 750);
        setTimeout(() => {
            secondChildElement.innerHTML = "My name is Amit.";
        }, 1000);
    } else {
        secondChildElement.innerHTML = "";
    }
});
