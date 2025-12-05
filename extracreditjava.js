

//for taking the quiz
function submit_quiz() {
 
    var q1 = document.querySelector('input[name="question1"]:checked').value;
    var q2 = document.querySelector('input[name="question2"]:checked').value;
    var q3 = document.querySelector('input[name="question3"]:checked').value;
    console.log(q1);
    console.log(q2);
    console.log(q3);

        if((q1 === "gryffin" && q2 === "gryffin" && q3 === "gryffin") || (q1 === "gryffin" && q2 === "gryffin") || (q2 === "gryffin" && q3 === "gryffin")) {
            window.location.href = "gryffindor.html";
        }
        else if((q1 === "slyther" && q2 === "slyther" && q3 === "slyther") || (q1 === "slyther" && q2 === "slyther") || (q2 === "slyther" && q3 === "slyther")) {
            window.location.href = "slytherin.html";
        }
        else if((q1 === "raven" && q2 === "raven" && q3 === "raven") || (q1 === "raven" && q2 === "raven") || (q2 === "raven" && q3 === "raven")) {
            window.location.href = "ravenclaw.html";
        }
        else if((q1 === "huffle" && q2 === "huffle" && q3 === "huffle") || (q1 === "huffle" && q2 === "huffle") || (q2 === "huffle" && q3 === "huffle")) {
            window.location.href = "hufflepuff.html";
        }
        else {
            var max = 4;
            var randomNumber;
            alert("You're a tough one... It's gonna be...");
            randomNumber = Math.floor(Math.random() * max); 
            console.log(randomNumber);
                if(randomNumber == 0) {
                    window.location.href = "gryffindor.html";
                }
                else if(randomNumber == 1) {
                    window.location.href = "hufflepuff.html";
                }
                else if(randomNumber == 2) {
                    window.location.href = "ravenclaw.html";
                }
                else if(randomNumber == 3) {
                     window.location.href = "slytherin.html";
                }
        }
}

//plays audio on index.html in backgroung and stops it
var audio = document.getElementById("backgroundMusic");
    function playAudio() {
    audio.play();
}

function stopAudio() {
        audio.pause();
}

//plays message on results pages when they click the link of the house
document.addEventListener('DOMContentLoaded', (event) => {
    const playLink = document.getElementById('playLink');
    const soundEffect = document.getElementById('soundEffect');
    
    playLink.addEventListener('click', function(e) {
        
        e.preventDefault();
        
        soundEffect.play();
    });
});

//clears form after submitting & submit addEventListener && defines local variable && global variable
const myForms = document.getElementsByClassName('myForm');
const confirmationMessage = document.getElementById('confirmationMessage');

for (let i = 0; i < myForms.length; i++) {
    const currentForm = myForms[i];

    currentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(currentForm);
        console.log("Form data collected:", Object.fromEntries(formData.entries()));

        currentForm.reset();

        if (confirmationMessage) {
            confirmationMessage.style.display = 'block';

            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 3000);
        }
    });
}

function validateForm() {
    const form = document.getElementById('myForm');
    
    const requiredGroups = ['question1', 'question2', 'question3']; 
    
    let allAnswered = true;
    const unansweredQuestions = [];

    requiredGroups.forEach(groupName => {
        const inputs = form.querySelectorAll(`input[name="${groupName}"]:checked`);
        
        if (inputs.length === 0) {
            allAnswered = false;
            unansweredQuestions.push(groupName);
        }
    });

    if (allAnswered) {
        submit_quiz();
    } else {
        alert(`Please answer all questions. Missing: ${unansweredQuestions.join(', ')}`);
    }
}
