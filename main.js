const input = document.getElementById("input");
const navContainer = document.getElementById("navContainer");

input.addEventListener("change", () => {
  if (input.checked) {
    navContainer.classList.add("move");
  } else {
    navContainer.classList.remove("move");
  }
});
