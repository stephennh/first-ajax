$(document).ready(function() {
  $('#request-root').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: ,
      dataType: 'text'
    });
  });
  $('#request-ping').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step3456').append(responseData);
    }).fail(function() {
      $('#step3456').append('Try harder next time!')
    });
  });
});
