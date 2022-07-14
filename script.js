var textBox = document.getElementById("text");
let completed = [];
let incompleted = [];
ids = 1;
let ulIncompleted = document.getElementById("task-incomplets");
let ulCompleted = document.getElementById("task-complets");

textBox.addEventListener("keypress", function (event) {
  if (textBox.value == 0) {
    return;
  }
  if (event.keyCode == 13) {
    ids++;
    var str = textBox.value;
    incompleted.push(str);
    desenharLista(incompleted, ulIncompleted);
    desenharLista(completed, ulCompleted);
  }
});
function desenharLista(arr, el) {
  el.innerHTML = "";
  arr.forEach((element) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(element);
    node.appendChild(textnode);
    el.appendChild(node);
  });
}
ulIncompleted.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    completed.push(e.target.textContent);
    desenharLista(completed, ulCompleted);

    incompleted = incompleted.filter(
      (element) => element !== e.target.textContent
    );
    desenharLista(incompleted, ulIncompleted);
  }
});
ulCompleted.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    incompleted.push(e.target.textContent);
    desenharLista(incompleted, ulIncompleted);

    completed = completed.filter((element) => element !== e.target.textContent);
    desenharLista(completed, ulCompleted);
  }
});
