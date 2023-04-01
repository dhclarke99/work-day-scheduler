// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var submitButton = $('.btn')
var eventText = $('textarea')
console.log(eventText)

function readEventsFromStorage() {
  var event = localStorage.getItem('event');
  if (event) {
    event = JSON.parse(event);
  } else {
    event = [];
  }
  return event;
}

function saveEventsToStorage(event) {
  localStorage.setItem('event', JSON.stringify(event));
}
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    submitButton.on('click', function(){
      console.log("button test")
      

      function handleSubmit() {
        
      
        // read user input from the form
        var eventName = eventText.val().trim();
       console.log(eventName);
        var newEvent = eventName;
      
        // add project to local storage
        var event = readEventsFromStorage();
        event.push(newEvent);
        saveEventsToStorage(event);
      } handleSubmit()
    })
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function applyColor(){
      console.log(dayjs().format('HH:mm'));
      var element = $('.row')
      for (var i = 0; i < element.length; i++){
        // use the parent div to grab children elements [i]?
     console.log(element[i])
     console.log(dayjs().hour)
      if(dayjs().format('HH') > element[i].id) {
        console.log("true")
        element.addClass('past')
      } if (dayjs().format('HH') < element[i].id) {
        console.log("false")
        element.addClass('future')
      } 
      else if (dayjs().format('HH') === element[i].id){
        console.log("idk")
        element.addClass('present')
      }

    }
      // console.log(dayjs().format('hh'))
      // console.log($('#1')[0].id)

    }
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    setInterval(function() {
    var time = dayjs().format('hh:mm:ss a');
    $('#currentDay').text(time);
    },1000)
    applyColor()
  });
  