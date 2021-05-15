$( document ).ready(function() {
    console.log( "ready!" );
// adding Objects to the table event listener
    $('#submitButton').on("click", submitClicked)
// delete employee on click of delete button
    $('#theTable').on('click', '#deleteButton', deleter)
});

// function that will run when submit button is clicked
function submitClicked() {

// appending inputs to the table
$('#theTable').append(`
<tr class="tableRows">
<td> ${$('#firstNameInp').val()}</td>
<td>${$('#lastNameInp').val()}</td>
<td>${$('#idInp').val()}</td>
<td>${$('#titleInp').val()}</td>
<td class="yearlySal">${$('#annualInp').val()}</td>
<td><button id="deleteButton" class="btn btn-danger">Delete</button></td>
</tr>
`)   
// Calculate total monthly after person is added
totalMonthly();
// Clear inputs after submit button is clicked
$('.inpBox').val('')
}
// function to calculate total monthly costs
function totalMonthly(){
    // declaring totalMonthly variable
    let totalMonthly = 0;
// get number of each salary
$('.yearlySal').each(function(){
    totalMonthly += (parseFloat($(this).text()/12))
})

// adding monthly costs to the DOM
$('#totalMonthly').text(`Total Monthly: $${totalMonthly}`)
// adding redba
   if(totalMonthly > 20000){
       $('#totalMonthly').addClass('warning');
   }
}
function deleter(){
    $(this).closest('tr').remove()
    // recalculate total price with person removed
    totalMonthly();
    if(totalMonthly < 20000){
        $('#totalMonthly').removeClass('warning');
    }
}

