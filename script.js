var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone-no").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value;
    //generate resume content
    var resumeHTML = "<h2><b>Resume</b></h2>\n                        <h3>personal Information</h3>\n                        <p><b>Name:</b>".concat(name, "</p>\n                        <p><b>Email:</b>").concat(email, "</p>\n                        <p><b>Phone-no:</b>").concat(phone, "</p>\n\n                        <h3>Education</h3>\n                        <p>").concat(education, "</p>\n\n                        <h3>Work Experience</h3>\n                        <p>").concat(experience, "</P>\n\n                        <h3>Skills</h3>\n                        <p>").concat(skills, "</p>");
    //condition for display generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display elememt is missing");
    }
});
