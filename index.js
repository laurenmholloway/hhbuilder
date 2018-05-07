//function to validate age input on form
function validateAge(){
    var age = document.querySelector("input").value;
    if(age <= 0 || age == ""){
        alert("Age must be greater than 0.");    
    }
}

//function to require the relationship input
function requireRelationship(){
    var relationship = document.querySelector("select").value;
    if(relationship == ""){
        alert("Relationship is required");
    }
}

//function definition to validate form inputs
function validateForm(){
    //calling function to validate age
    validateAge();
    //calling function to require relationship
    requireRelationship(); 
}

var addButton = document.getElementsByClassName("add").item(0);
addButton.addEventListener("click", validateForm);
