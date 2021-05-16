$( document ).ready(function() {
    console.log( "ready!" );
// adding Objects to the table event listener
    $('#submitButton').on("click", submitClicked)
// delete employee on click of delete button
    $('#theTable').on('click', '#deleteButton', deleter)
});

// function that will run when submit button is clicked
function submitClicked() {
if(isNaN($('#annualInp').val())){
//     <div class="alert alert-danger d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//   <div>
//     An example danger alert with an icon
//   </div>
// </div>
$('.submitDiv').append(`
<div class="alert alert-warning " role="alert">
  <strong>Oh No!</strong> Annual salary can only contain numbers.
</div>
`)
}else{
// appending inputs to the table
$('#theTable').append(`
<tr class="tableRows">
<td> ${$('#firstNameInp').val()}</td>
<td>${$('#lastNameInp').val()}</td>
<td>${$('#idInp').val()}</td>
<td>${$('#titleInp').val()}</td>
<td class="yearlySal">${$('#annualInp').val()}</td>
<td><button id="deleteButton" class="btn btn-danger"content>Delete</button></td>
</tr>
`)   
// Calculate total monthly after person is added
totalMonthly();
// Clear inputs after submit button is clicked
$('.inpBox').val('')
}
}
// function to calculate total monthly costs
function totalMonthly(){
    // declaring totalMonthly variable
    let totalMonthly = 0;
// get number of each salary
$('.yearlySal').each(function(){
    totalMonthly += Number((parseFloat($(this).text()/12)).toFixed(2))
})

// adding monthly costs to the DOM
$('#totalMonthly').text(`Total Monthly: $${totalMonthly}`)
// adding redba
   if(totalMonthly > 20000){
       $('#totalMonthly').addClass('alert alert-danger');
       $('#totalMonthly').append('<p> Monthly Spending too high!')
   }else {
    $('#totalMonthly').removeClass('alert alert-danger');
}
}

// delete table rows function
function deleter(){
    $(this).closest('tr').remove()
    // recalculate total price with person removed
    totalMonthly();
    
}

