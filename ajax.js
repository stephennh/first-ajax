$(document).ready(function () {
  $.ajax ({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    // data: ,
    dataType: 'text'
  });

});
