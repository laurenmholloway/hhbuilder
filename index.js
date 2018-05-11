//function to validate age input on form
function getAge() {
    var age = document.querySelector("[name = age]").value;
    if (age > 0 && age !== "") {
        return age;  
    } else {
        alert("Age must be greater than 0.");
        return false;
    }
}

//function to require the relationship input
function getRelationship() {
    var relationship = document.querySelector("[name = rel]").value;
    if (relationship !== "") {
        return relationship;
    } else {
        alert("Relationship is required");
        return false;
    }
}

//function to get member's smoker status
function getSmokeStatus() {
    var smokeStatus = document.querySelector("[name = smoker]");
    if (smokeStatus.checked) {
        return "Yes";
    } else {
        return "No";
    }
}

//function definition to ensure inputs are valid
function isValidForm() {
    if(getRelationship() !== false && getAge() !== false) {
        return true;
    }
}

//function definition to remove member
// function removeMember(){

// }

//function definition to create elements to show added family members
function showAddedMembers() {
    if (isValidForm()) {

        //show added member
        var newElement = document.createElement("LI");
        var elementText = document.createTextNode("Age: " + getAge() + "\t\tRelationship: " + getRelationship() + "\t\tSmoker: " + getSmokeStatus());
        newElement.appendChild(elementText);
        
        //create remove member button
        var removeButton = document.createElement("button");
        var removeBtnText = document.createTextNode("Remove");
        removeButton.appendChild(removeBtnText);

        //create edit member button
        var editButton = document.createElement("button");
        var editBtnText = document.createTextNode("Edit");
        editButton.appendChild(editBtnText);
        
        document.querySelector("ol").appendChild(newElement).appendChild(editButton).insertAdjacentElement("afterend", removeButton);
    
        return false;
    }   
}

var addButton = document.querySelector(".add");
addButton.setAttribute("onclick", "return showAddedMembers()");


