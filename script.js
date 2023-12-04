// all the variables
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

// the excisting grid
for (i = 0; i < 256; i++) {
  let grid = document.createElement("div");
  grid.addEventListener("mouseover", function () {
    grid.style.backgroundColor = "black";
  });
  grid.className = "square";
  container.appendChild(grid);
}

btn.addEventListener("click", function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  answer = prompt("How many square per grid you want?");
  answer = parseInt(answer);
  if (typeof answer === "number" && answer <= 64) {
    for (i = 0; i < answer * answer; i++) {
      let grid = document.createElement("div");
      grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = "black";
        grid.style.flexBasis = " 100% / answer";
      });
      grid.className = "square";
      grid.style.flexBasis = `calc(100% / ${answer})`;
      grid.style.height = `calc(100% / ${answer})`;
      container.appendChild(grid);
    }
  } else {
    alert("must be less than 64 and is a number");
  }
});
