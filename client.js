$(document).ready(function () {
    console.log("ready!");
    // adding Objects to the table event listener
    $('#submitButton').on("click", submitClicked)
    // delete employee on click of delete button
    $('#theTable').on('click', '#deleteButton', deleter)


});

// function that will run when submit button is clicked
function submitClicked() {
    if (!$('.inpBox').val()) {
        // Alert for if they didn't complete all inputs
        $('.submitDiv').append(`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Whoops!</strong> Make sure to complete all inputs.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
 `)
    } else if (isNaN($('#annualInp').val()) || (!$('#annualInp').val())) {
        $('.submitDiv').append(`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>OOPS!</strong> Annual Salary can only contain numbers.
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>
`)
    } else {
        // appending inputs to the table
        $('#theTable').append(`
<tr class="tableRows">
<td> ${$('#firstNameInp').val()}</td>
<td>${$('#lastNameInp').val()}</td>
<td>${$('#idInp').val()}</td>
<td>${$('#titleInp').val()}</td>
<td class="yearlySal"> ${$('#annualInp').val()}</td>
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
function totalMonthly() {
    // declaring totalMonthly variable
    let totalMonthly = 0;
    // get number of each salary
    $('.yearlySal').each(function () {
        totalMonthly += Number((parseFloat($(this).text() / 12)).toFixed(2))
    })

    // adding monthly costs to the DOM
    $('#totalMonthly').text(`Total Monthly Expense: $${totalMonthly}`)
    // adding redba
    if (totalMonthly > 20000) {
        $('#totalMonthly').addClass('alert alert-danger');
        $('#totalMonthly').text(`Total Monthly Expense: $${totalMonthly}   Monthly Spending Too High!`)
    } else {
        $('#totalMonthly').removeClass('alert alert-danger');
    }
}

// delete table rows function
function deleter() {
    $(this).closest('tr').remove()
    // recalculate total price with person removed
    totalMonthly();

}