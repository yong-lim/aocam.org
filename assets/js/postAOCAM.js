$(function() {
   $('.form-control').focus(formFocus);
 });
 
function formFocus() {
  $('#alert-field')
    .removeClass()
    .addClass('is-hidden');
 }

function formReset() {
  $('#alert-field')
    .removeClass()
    .html("<span><p>Thank you for dropping us a line . . .</p></span>")
    .removeClass('is-hidden');
  document.getElementById("my-form").reset();
  setTimeout(() => {
    $('#alert-field').removeClass().addClass('is-hidden');
    // console.log('This alert appeared after 3 second!'); 
  }, 3000);
}

//selector from your HTML form
function postAOCAM(e) {
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  console.log("in postAOCAM");
  $('#alert-field')
    .removeClass()
    .html("<span><p>Please wait while we're sending your messgae . . .</p>  <progress></progress></span>")
    .removeClass('is-hidden');
  // console.log('start timer');
  // setTimeout(() => {
  //   console.log('This alert appeared after 3 second!'); }, 3000);
  //AJAX request
  $.ajax({
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfSSrMZh4gd_b-u08p0ZmWSzaLRlJfVobR8dRhHe4PlIAaEsw/formResponse',     
    //The public Google Form url, but replace /view with /formResponse
    data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data 
    type: 'POST', //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    statusCode: { //the status code from the POST request
      0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
       //success
        formReset();
       }, 
       200: function(data) {//200 is a success code. it went through!
         //success
         // $('#form-success').text('hooray! 200');
        formReset();
       },
       403: function(data) {//403 is when something went wrong and the submission didn't go through
         //error
         alert('Oh no! something went wrong. Please let us know of your problem.');
       }
    }  
  });
};
