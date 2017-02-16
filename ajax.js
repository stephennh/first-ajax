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
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('The request is done.');
      $('#step3456').append(responseData);
    }).fail(function() {
      console.log('The request failed.');
      $('#step3456').append('Try harder next time!')
    }).always(function() {
      console.log('This will always pass.');
      $('body').append('Hey the request finished!')
    });
  });
  $('#hive-mind').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step7').append(responseData);
    });
  });
  $('#send-data').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      // data: {timezone: 'North_America/Toronto'},
      dataType: 'text'
    }).done(function(responseData) {
      $('#step8').append(responseData);
    });
  });
  $('#request-car').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      // data: ,
      dataType: 'HTML'
    }).done(function(responseData){
      $('#step9').append(responseData);
    });
  });
});
