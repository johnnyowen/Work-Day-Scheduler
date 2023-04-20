$(function () {
  init();

var saveBtn = $('.saveBtn');
console.log(saveBtn);
saveBtn.on('click', function() {
  console.log($(this));
  console.log($(this).siblings().eq(1).val());  //sibling
  console.log($(this).parent().attr('id'))   //parent

  localStorage.setItem($(this).parent().attr('id'), $(this).siblings().eq(1).val())
})

function setSavedData() {
  $('.description').each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
  })
}

  function pastPresentFutureClassForTimeblock() {
    var currentHour = dayjs().hour();
    console.log(currentHour);

    $('.time-block').each(function() {
      var timeDiv = $(this).attr('id');
      console.log(timeDiv)

      if (timeDiv < currentHour) {
        console.log("past")
        $(this).addClass('past')
      }
      else if (timeDiv == currentHour) {
        console.log("present")
        $(this).addClass('present')
      }
      else if (timeDiv > currentHour) {
        console.log("future")
        $(this).addClass('future')
      }

    })
  }
  
  function  displayCurrentDateAndTimeTheHeader() {
    var dayAndTime = dayjs();
    $('#currentDay').text(dayAndTime.format('dddd, MMMM DD, YYYY, h:mm:ss a'))
    setTimeout(displayCurrentDateAndTimeTheHeader, 1000)
  } 

  function init() {
    displayCurrentDateAndTimeTheHeader();
    pastPresentFutureClassForTimeblock();
    setSavedData();
  }
  var clearButton = $('#clearButton')
  clearButton.on('click', function() {
    $('textarea').val("");
    localStorage.clear();
  })
});
