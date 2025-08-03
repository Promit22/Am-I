const input = document.getElementById("input");
const navContainer = document.getElementById("navContainer");

input.addEventListener("change", () => {
  if (input.checked) {
    navContainer.classList.add("move");
  } else {
    navContainer.classList.remove("move");
  }
});

const productList = document.querySelectorAll("#products p");
const products = document.querySelectorAll(".products");
console.log(productList);
console.log(products);

// function displayFirst() {

// }

// productList.forEach((product) => {
//   product.addEventListener("click", () => {
//     const target = product.getAttribute("data-target");
//     products.forEach((item) => {
//       if (item.id === target) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//       item.style.display = "none";
//     });
//   });
// });
