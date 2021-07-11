   // display current day and time on page
   $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function () {
    // listen for save button clicks html id 
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save Sets the value of the pair identified by key to value, 
    //   creating a new key/value pair if none existed for key previously.
      localStorage.setItem(time, value);
  
      // Show prompt that item was saved to localStorage by adding class 'show'
      $('.prompt').addClass('show');
  
      // // Timeout to remove 'show' class after 3 seconds
      // setTimeout(function () {
      //   $('.prompt').removeClass('show');
      // }, 3000);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentBlock = moment().hours();
  
      // loop over time field blocks that splits once the string into the string array resulting in 
      $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id').split('hours')[1]);
  
        // check if moved pastBlock at this time triggring color update
        if (hourBlock < currentBlock) {
          $(this).addClass('pastBlock');
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (hourBlock === currentBlock) {
          $(this).removeClass('pastBlock');
          $(this).removeClass('future');
          $(this).addClass('present');
        } else {
          $(this).removeClass('pastBlock');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
  
    // set up interval to check if current time needs to be updated
   setInterval(hourUpdater, 1000);
  
    // load any saved data from localStorage
    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
    $('#hour18 .description').val(localStorage.getItem('hour18'));
    $('#hour19 .description').val(localStorage.getItem('hour19'));
    $('#hour20 .description').val(localStorage.getItem('hour20'));


    hourUpdater()
   
  
  });
  