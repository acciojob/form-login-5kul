function getFormvalue() {
  // Access the form
  const form = document.forms[0];

  // Retrieve and trim the values
  const firstName = form["fname"].value.trim();
  const lastName = form["lname"].value.trim();

  // Display full name in alert
  alert(firstName + " " + lastName);

  // Prevent form submission
  return false;
}
