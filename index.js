function submitData(){
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let interestDOMs = document.querySelectorAll('input[name="interests"]:checked');
    let discriptionDOM = document.querySelector('textarea[name="discription"]');
    
    let interest ='';
    for(let i=0;i<interestDOMs.length;i++){
            interest += interestsDOMs[i].value 
            if(i != interestDOMs.length -1){
                interest += ',';
            }
        }

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender :genderDOM.value,
        discriptionDOM:discriptionDOM.value,
    }
    console.log("submitData", userData);
}