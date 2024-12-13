//Main Function to validate a Canadian Social Insurance Number (SIN)
function validateSIN(sin: string): boolean {
    //Removing any non-digit characters and checking if the length is 9
    const cleanedSIN: string = sin.replace(/\D/g, "");
    if (cleanedSIN.length !== 9) {
      result.textContent = "Invalid SIN: SIN must contain exactly 9 digits."; 
      return false; 
    }
  
    console.log("Original SIN:", cleanedSIN);
  
    //Luhn Algorithm implementation
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      let digit = parseInt(cleanedSIN.charAt(i));
      if (i % 2 !== 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    return sum % 10 === 0;
  }
  
  //Basic HTML for the web app
  document.body.innerHTML = `
    <h1>SIN Validator</h1>
    <input type="text" id="sinInput" placeholder="Enter your SIN">
    <button id="validateButton">Validate</button>
    <p id="result"></p>
  `;
  
  //Event listener for the validation button
  const validateButton = document.getElementById("validateButton") as HTMLButtonElement;
  const sinInput = document.getElementById("sinInput") as HTMLInputElement;
  const result = document.getElementById("result") as HTMLParagraphElement;
  
  validateButton.addEventListener("click", () => {
    const sin: string = sinInput.value;
  
    //Checking the length before calling validating the SIN
    if (sin.replace(/\D/g, "").length !== 9) { 
      result.textContent = "Invalid SIN: SIN must contain exactly 9 digits.";
    } else {
      const isValid = validateSIN(sin);
  
      if (isValid) {
        result.textContent = "Valid SIN!";
      } else { 
        result.textContent = "Invalid SIN!"; 
      }
    }
  });