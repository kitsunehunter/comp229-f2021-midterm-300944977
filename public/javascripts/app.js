/*
app.js
xavier zhang
300944977
*/
console.log("Goes to the client side.");

if (getTitle == "Book List") {
  let deleteButtons = document.querySelectorAll(".btn-danger");

  for (button of deleteButtons) {
    button.addEventListener("click", (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
      }
    });
  }
}
