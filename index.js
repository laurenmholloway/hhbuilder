//function to validate age input on form
function ageIsValid() {
    var age = document.querySelector("[name = age]").value;
    if(age > 0 && age !== "") {
        return true;  
    }
    else{
        alert("Age must be greater than 0.");
        return false;
    }
}

//function to require the relationship input
function relationshipIsValid() {
    var relationship = document.querySelector("[name = rel]").value;
    if(relationship !== ""){
        return true;
    }
    else{
        alert("Relationship is required");
        return false;
    }
}

function isSmoker() {
    var smokeStatus = document.querySelector("[name = smoker]");
    if(smokeStatus.checked){
        alert("Checked!");
    }
    else {
        alert("UNchecked!");
    }
}

//function definition to validate form inputs
function validateForm() {
    if(ageIsValid() && relationshipIsValid()) {
        alert("Form is valid!");
        isSmoker();
        // var newElement = document.createElement("p");
        // var elementText = "Age: " + age + "\t Relationship: " + relationship + "\t "
    }    
}


var addButton = document.getElementsByClassName("add").item(0);
addButton.addEventListener("click", validateForm);
