// Wait for the DOM to load before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get and trim input values
    const firstName = form["fname"].value.trim();
    const lastName = form["lname"].value.trim();

    // Show alert with full name
    alert(firstName + " " + lastName);
  });
});
