$(document).ready(function () {
    // listen for save button clicks html id 
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save Sets the value of the pair identified by key to value, 
    //   creating a new key/value pair if none existed for key previously.
// Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. 
// (Setting could fail if, e.g., the user has disabled storage for the site, 
// or if the quota has been exceeded.) 
      localStorage.setItem(time, value);
  
      // Show prompt that item was saved to localStorage by adding class 'show'
      $('.prompt').addClass('show');
  
      // Timeout to remove 'show' class after 3 seconds
      setTimeout(function () {
        $('.prompt').removeClass('show');
      }, 3000);
    });

     // display current day and time on page
     $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  
    function hourUpdater() {
      // get current number of hours
      var currentBlock = moment().hours();
  
      // loop over time field blocks that splits once the string into the string array resulting in 
      $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id').split('-')[1]);
  
        // check if moved pastBlock at this time triggring color update
        if (hourBlock < currentBlock) {
          $(this).addClass('pastBlock');
        } else if (hourBlock === currentBlock) {
          $(this).removeClass('pastBlock');
          $(this).addClass('present');
        } else {
          $(this).removeClass('pastBlock');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
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
   
  
  });
  