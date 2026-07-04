const container = document.querySelector("#container");

const para = document.createElement("p");
container.appendChild(para);

const h3 = document.createElement("h3");
container.appendChild(h3);

para.textContent = "Hey I'm red!";
para.style.color = "red";

h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
container.appendChild(div);
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

const h1 = document.createElement("h1");
div.appendChild(h1);
h1.textContent = "I'm in a div";

const p = document.createElement("p");
div.appendChild(p);
p.textContent = "ME TOO!";

const btn = document.querySelector("#btn");

const btn2 = document.querySelector("#btn2");

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("dblclick", () => console.log(button.id));
}
);