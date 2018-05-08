//function to validate age input on form
function validateAge(){
    var age = document.querySelector("input").value;
    if(age <= 0 || age === ""){
        alert("Age must be greater than 0.");
        return false;    
    }else{
        return true;
    }
}

//function to require the relationship input
function requireRelationship(){
    var relationship = document.querySelector("select").value;
    if(relationship === ""){
        alert("Relationship is required");
        return false;
    }
    else{
        return true;
    }
}

//function definition to validate form inputs
function validateForm(){
    if(validateAge() && requireRelationship()){
        alert("Form is valid!");
    }    
}


var addButton = document.getElementsByClassName("add").item(0);
addButton.addEventListener("click", validateForm);
