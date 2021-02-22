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

// Keep form data
form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// Check validation of condition provided
function checkCondition(condition){
  if(!condition) return false;
  else return true;
}

// Send specific error message rather than elementId provided
// Add aria invalid for use CSS
function getErrorMessage(elementId, message, inputAssociate){
  if(elementId && message) {
    document.getElementById(elementId).style.display = "block";
    document.getElementById(elementId).innerText = message;
    if(inputAssociate) inputAssociate.setAttribute("aria-invalid", "true");
  }
  else throw new Error('Missing parameter for handler error message');
}

//2nd submit, hide a valid field previous invlid
// Swich aria invalid to false for use CSS
function hideErrorMessage(elementId, inputAssociate) {
  if(elementId) document.getElementById(elementId).style.display = "none";
  if(inputAssociate) inputAssociate.setAttribute("aria-invalid", "false");
}

//Check after submit form conditon, and call function who show specific message or a valid field
function validate(form) { 
    let firstNameValid = checkCondition(form["first"].value) && checkCondition(form["first"].value.length >= 2);
    firstNameValid ? 
      hideErrorMessage('error-firstName', form["first"]) : 
      getErrorMessage('error-firstName', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", form["first"]);
    
    let lastNameValid = checkCondition(form["last"].value) && checkCondition(form["last"].value.length >= 2);
    lastNameValid ?  
      hideErrorMessage('error-lastName', form["last"]) : 
      getErrorMessage('error-lastName', "Veuillez entrer 2 caractères ou plus pour le champ du nom.", form["last"]); 
    
    //https://regex101.com/
    let emailValid = checkCondition(form["email"].value) && checkCondition(/[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(form["email"].value));
    emailValid ? 
      hideErrorMessage('error-email', form["email"]) : 
      getErrorMessage('error-email', "Veuillez entrer une addresse mail valide.", form["email"]);

    let birthdateValid = checkCondition(form["birthdate"].value) && checkCondition(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(form["birthdate"].value));
    birthdateValid ? 
      hideErrorMessage('error-birthdate', form["birthdate"]) : 
      getErrorMessage('error-birthdate', "Veuillez entrer une date de naissance.", form["birthdate"]);

    //isNaN return false if is a number, true if not
    let qteTournamentValid = checkCondition(form["quantity"].value) && checkCondition(/^[0-9]+$/.test(form["quantity"].value));
    qteTournamentValid ? 
      hideErrorMessage('error-tournament', form["quantity"]) : 
      getErrorMessage('error-tournament', "Veuillez entrer une valeur numérique.", form["quantity"]);

    let locationValid = checkCondition(form.location.value);
    locationValid ?  hideErrorMessage('error-location') : getErrorMessage('error-location', "Veuillez sélectionner une ville.");

    let termsValid = checkCondition(form.terms.checked);
    termsValid ? hideErrorMessage('error-terms') : getErrorMessage('error-terms', "Veuillez indiquer que vous acceptez les conditions générales.");

    // Check the confirmation form, show a confirmation message
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