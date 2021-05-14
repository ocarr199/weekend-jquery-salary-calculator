$( document ).ready(function() {
    console.log( "ready!" );

    $('#submitButton').on("click", submitClicked)
    $('#submitButton').on("click", submitClicked)
});

let employees = []

function submitClicked() {
    let employeeObj = {
        firstName: $('#firstNameInp').val(),
        lastName:$('#lastNameInp').val(),
        ID:$('#idInp').val(),
        title:$('#titleInp').val(),
        Annual:$('#annualInp').val()
    }
   
    employees.push(employeeObj);

$('#theTable').append(`
<tr>
<td>${employeeObj.firstName}</td>
<td>${employeeObj.firstName}</td>
<td>${employeeObj.firstName}</td>
<td>${employeeObj.firstName}</td>
<td>${employeeObj.firstName}</td>
<td><button id="deleteButton">Delete</button></td>
</tr>
`)   
function totalMonthly(){
    let totalMonthly = 0;
   for(let i = 0; i < employees.length; i++){
       totalMonthly = (employees[i].Annual * employees.length)/ 12
   }
   console.log(totalMonthly)
}

}




