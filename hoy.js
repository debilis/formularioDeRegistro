$(document).ready(function() {
  $('#miFormularioDeRegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#miFormularioDeRegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {

        submitButton.prop('disabled', 'disabled');
        alert('antes de enviar');
      }
    }).done(function(data) {
      alert('datos enviados');
      submitButton.prop('disabled', false);


$.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/73f8192ab66e/submissions.json?api_token=9f4bd737bfbc8b3471841a219c6061e3',
      accept: {
        javascript: 'application/javascript'
      },
      
      beforeSend: function() {

       
      }
    }).done(function(data) {
       console.log(data);
      
    });






    });
  });
});