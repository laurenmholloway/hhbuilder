var addButton = document.getElementsByClassName("add").item(0);
addButton.addEventListener("click", validateForm);

//function to validate age input on form
function validateAge(){
    var age = document.querySelector("input").value;
    if(age <= 0){
        alert("Age must be greater than 0.");    
    }
}

//function definition to validate form inputs
function validateForm(){
    //calling function to validate age
    validateAge();
    
}