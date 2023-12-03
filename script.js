const container = document.querySelector(".container");

container.className = "container";
for (i = 0; i < 256; i++) {
  let grid = document.createElement("div");
  grid.addEventListener("mouseover", function () {
    grid.style.backgroundColor = "black";
  });
  grid.className = "square";
  container.appendChild(grid);
}
