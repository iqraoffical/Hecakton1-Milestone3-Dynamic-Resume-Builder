document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("resume-form");
  var display = document.getElementById("resume-display");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collecting data from form fields
    var name = document.getElementById("Name:").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var education = [
      document.getElementById("education1").value,
      document.getElementById("education2").value,
      document.getElementById("education3").value,
      document.getElementById("education4").value,
    ];
    var experience = [
      document.getElementById("experience1").value,
      document.getElementById("experience2").value,
      document.getElementById("experience3").value,
      document.getElementById("experience4").value,
    ];
    var skills = [
      document.getElementById("skill1").value,
      document.getElementById("skill2").value,
      document.getElementById("skill3").value,
      document.getElementById("skill4").value,
    ];
    // Displaying data
    display.innerHTML =
      "\n      <h2>Resume</h2>\n      <h3>Personal Information</h3>\n      <p><strong>Name:</strong> "
        .concat(name, "</p>\n      <p><strong>Email:</strong> ")
        .concat(email, "</p>\n      <p><strong>Phone:</strong> ")
        .concat(phone, "</p>\n      <p><strong>Website:</strong> ")
        .concat(
          website,
          "</p>\n\n      <h3>Education</h3>\n      <ul>\n        "
        )
        .concat(
          education
            .filter(function (item) {
              return item;
            })
            .map(function (item) {
              return "<li>".concat(item, "</li>");
            })
            .join(""),
          "\n      </ul>\n\n      <h3>Work Experience</h3>\n      <ul>\n"
        )
        .concat(
          experience
            .filter(function (item) {
              return item;
            })
            .map(function (item) {
              return "<li>".concat(item, "</li>");
            })
            .join(""),
          "\n      </ul>\n\n      <h3>Skills</h3>\n      <ul>\n"
        )
        .concat(
          skills
            .filter(function (item) {
              return item;
            })
            .map(function (item) {
              return "<li>".concat(item, "</li>");
            })
            .join(""),
          "\n      </ul>\n"
        );
  });
});
