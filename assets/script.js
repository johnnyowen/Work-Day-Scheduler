// All function stored in a jQuery call to ensure all HTML and CSS elements load first before executing functions
$(function () {
  // Call functions
  displayCurrentDateAndTimeTheHeader();
  pastPresentFutureClassForTimeblock();
  setSavedData();
  // Buttons
  var saveBtn = $('.saveBtn');
  var clearButton = $('#clearButton')
  // Button actions
  saveBtn.on('click', function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings().eq(1).val())
  })
  clearButton.on('click', function() {
    $('textarea').val("");
    localStorage.clear();
  })
  // Places locally stored data in the proper time slots
  function setSavedData() {
  $('.description').each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
  })
  }
  // Colors time blocks correctly using a current hour comparison and classes
  function pastPresentFutureClassForTimeblock() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function() {
      var timeDiv = $(this).attr('id');
      if (timeDiv < currentHour) {
        $(this).addClass('past')
      }
      else if (timeDiv == currentHour) {
        $(this).addClass('present')
      }
      else if (timeDiv > currentHour) {
        $(this).addClass('future')
      }
    })
  }
  // Displays the current date and time
  function  displayCurrentDateAndTimeTheHeader() {
    var dayAndTime = dayjs();
    $('#currentDay').text(dayAndTime.format('dddd, MMMM DD, YYYY, h:mm:ss a'))
  } 
  setInterval(displayCurrentDateAndTimeTheHeader, 1000)
});