$(document).ready(function () {
  // When the document is fully loaded, attach a submit event handler to the form with id 'spaForm'
  $('#spaForm').submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show the element with id 'numberInput' (if it's hidden)
    $('#numberInput').show();

    // Generate two random numbers between 1 and 9
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;

    // Display the generated numbers in elements with ids 'number1' and 'number2'
    $('#number1').text(num1);
    $('#number2').text(num2);

    // Calculate the correct sum of the two numbers
    var correctSum = num1 + num2;

    // Prompt the user to calculate the sum of the two numbers
    var userSum = prompt('Calculate the sum: ' + num1 + ' + ' + num2);

    // Check if the user's input is not null and matches the correct sum
    if (userSum != null && parseInt(userSum) === correctSum) {
      // If the calculation is correct, unbind the submit event and submit the form
      $('#spaForm').unbind('submit').submit();
    } else {
      // If the calculation is wrong, display an error message
      $('#result').text('The calculation is wrong. Please try again');

      // Reset the form fields
      $('#spaForm')[0].reset();

      // Hide the element with id 'numberInput'
      $('#numberInput').hide();
    }
  });
});