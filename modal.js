console.log("here");

// select button element
const openButton = document.getElementById("openModal");

// add event listener on click to button
// remove class invisible from div modal
openButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("invisible");
});

// add event listener on key press Escape
// add class invisible to div modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("invisible");
  }
});
