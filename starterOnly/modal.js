function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const form = document.getElementsByName('reserve');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// Close modal event
modalCloseBtn[0].addEventListener ("click", closeModal);

form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});


function checkCondition(condition){
  if(!condition) return false;
  else return true;
}

function getErrorMessage(elementId, message){
  if(elementId && message) document.getElementById(elementId).innerText = message;
  else throw new Error('Missing parameter for handler error message');
}

//2nd submit, hide a valid field previous invlid
function hideErrorMessage(elementId) {
  if(elementId) document.getElementById(elementId).style.display = "none";
}

function validate(form) { 
    let firstNameValid = checkCondition(form["first"].value) && checkCondition(form["first"].value.length >= 2);
    firstNameValid ? hideErrorMessage('error-firstName') : getErrorMessage('error-firstName', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    
    let lastNameValid = checkCondition(form["last"].value) && checkCondition(form["last"].value.length >= 2);
    lastNameValid ?  hideErrorMessage('error-lastName') : getErrorMessage('error-lastName', "Veuillez entrer 2 caractères ou plus pour le champ du nom."); 
    
    //https://regex101.com/
    let emailValid = checkCondition(form["email"].value) && checkCondition(/[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(form["email"].value));
    emailValid ? hideErrorMessage('error-email') : getErrorMessage('error-email', "Veuillez entrer une addresse mail valide.");

    let birthdateValid = checkCondition(form["birthdate"].value) && checkCondition(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(form["birthdate"].value));
    birthdateValid ? hideErrorMessage('error-birthdate') : getErrorMessage('error-birthdate', "Veuillez entrer une date de naissance.");

    //isNaN return false if is a number, true if not
    let qteTournamentValid = checkCondition(form["quantity"].value) && checkCondition(/^[0-9]+$/.test(form["quantity"].value));
    qteTournamentValid ? hideErrorMessage('error-tournament') : getErrorMessage('error-tournament', "Veuillez entrer une valeur numérique.");

    let locationValid = checkCondition(form.location.value);
    locationValid ?  hideErrorMessage('error-location') : getErrorMessage('error-location', "Veuillez sélectionner une ville.");

    let termsValid = checkCondition(form.terms.checked);
    termsValid ? hideErrorMessage('error-terms') : getErrorMessage('error-terms', "Veuillez indiquer que vous acceptez les conditions générales.");

    if(
        firstNameValid 
        && lastNameValid 
        && emailValid
        && birthdateValid 
        && qteTournamentValid
        && locationValid
        && termsValid
      ) {
        document.querySelector(".modal-body").style.display = "none";
        document.querySelector(".formConfirmation").style.display = "block";
      }
  }