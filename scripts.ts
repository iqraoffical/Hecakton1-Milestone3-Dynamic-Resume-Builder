document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const display = document.getElementById("resume-display") as HTMLDivElement;

  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collecting data from form fields
    const name = (document.getElementById("Name:") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const website = (document.getElementById("website") as HTMLInputElement)
      .value;
    const education = [
      (document.getElementById("education1") as HTMLInputElement).value,
      (document.getElementById("education2") as HTMLInputElement).value,
      (document.getElementById("education3") as HTMLInputElement).value,
      (document.getElementById("education4") as HTMLInputElement).value,
    ];
    const experience = [
      (document.getElementById("experience1") as HTMLInputElement).value,
      (document.getElementById("experience2") as HTMLInputElement).value,
      (document.getElementById("experience3") as HTMLInputElement).value,
      (document.getElementById("experience4") as HTMLInputElement).value,
    ];
    const skills = [
      (document.getElementById("skill1") as HTMLInputElement).value,
      (document.getElementById("skill2") as HTMLInputElement).value,
      (document.getElementById("skill3") as HTMLInputElement).value,
      (document.getElementById("skill4") as HTMLInputElement).value,
    ];

    // Displaying data
    display.innerHTML = `
      <h2>Resume</h2>
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Website:</strong> ${website}</p>

      <h3>Education</h3>
      <ul>
        ${education
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        ${experience
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>Skills</h3>
      <ul>
        ${skills
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>
    `;
  });
});
