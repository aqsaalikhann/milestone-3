const form =document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit",(event:Event) =>{
    event.preventDefault();

//collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email")as HTMLInputElement).value
    const phone =(document.getElementById("phone-no") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const experience =(document.getElementById("work-experience") as HTMLInputElement).value
    const skills =(document.getElementById("skills") as HTMLInputElement).value

    //generate resume content
    const resumeHTML = `<h2><b>Resume</b></h2>
                        <h3>personal Information</h3>
                        <p><b>Name:</b>${name}</p>
                        <p><b>Email:</b>${email}</p>
                        <p><b>Phone-no:</b>${phone}</p>

                        <h3>Education</h3>
                        <p>${education}</p>

                        <h3>Work Experience</h3>
                        <p>${experience}</P>

                        <h3>Skills</h3>
                        <p>${skills}</p>`;
                    
//condition for display generate resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML =resumeHTML
}else{
    console.error(`The resume display elememt is missing`);
}
});