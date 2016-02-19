window.onload = function() {
  
  // execute every second:
  setInterval(function(){
    // display current time
    var currentTime = moment().format('h:mm:ss a');
    $('.time').html(currentTime);

    // set current hour
    var currentHour = moment().hour();

    // set current panel
    var currentPanel = moment().hour() + '.jpg';
    var path = 'images/panels/'
    var panelFile = path + currentPanel;
    $('#panel-image').attr('src', panelFile);


    // if (moment().hour() != currentHour) {

    // };
  }, 1000);


  
};