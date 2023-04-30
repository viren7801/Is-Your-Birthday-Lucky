const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const message = document.querySelector("#message-output")

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value);
    else 
    message.innerText="Please enter both the fields 😶"
}

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        message.innerText="Your birthday is lucky 🥳";
    }else {
        message.innerText="Your birthday is not lucky 🥲"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum
}

checkButton.addEventListener("click", checkBirthDateIsLucky)