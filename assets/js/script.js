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
      var element = $('.row')
      console.log(element)
      for (var i = 0; i < element.length; i++){
        // use the parent div to grab children elements [i]?
      if(dayjs().format('HH') === 9) {
        console.log("true")
        document.getElementById("9").className = "row time-block present"
        document.getElementById("10").className = "row time-block future"
        document.getElementById("11").className = "row time-block future"
        document.getElementById("12").className = "row time-block future"
        document.getElementById("13").className = "row time-block future"
        document.getElementById("14").className = "row time-block future"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
        
        //element.addClass('past')
      } else if(dayjs().format('HH') >= 10 && dayjs().format('HH') < 11) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block present"
        document.getElementById("11").className = "row time-block future"
        document.getElementById("12").className = "row time-block future"
        document.getElementById("13").className = "row time-block future"
        document.getElementById("14").className = "row time-block future"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      } 
      else if(dayjs().format('HH') >= 11 && dayjs().format('HH') < 12) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block present"
        document.getElementById("12").className = "row time-block future"
        document.getElementById("13").className = "row time-block future"
        document.getElementById("14").className = "row time-block future"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 12 && dayjs().format('HH') < 13) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block present"
        document.getElementById("13").className = "row time-block future"
        document.getElementById("14").className = "row time-block future"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 13 && dayjs().format('HH') < 14) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block present"
        document.getElementById("14").className = "row time-block future"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 14 && dayjs().format('HH') < 15) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block past"
        document.getElementById("14").className = "row time-block present"
        document.getElementById("15").className = "row time-block future"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 15 && dayjs().format('HH') < 16) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block past"
        document.getElementById("14").className = "row time-block past"
        document.getElementById("15").className = "row time-block present"
        document.getElementById("16").className = "row time-block future"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 16 && dayjs().format('HH') < 17) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block past"
        document.getElementById("14").className = "row time-block past"
        document.getElementById("15").className = "row time-block past"
        document.getElementById("16").className = "row time-block present"
        document.getElementById("17").className = "row time-block future"
      }  else if(dayjs().format('HH') >= 17 && dayjs().format('HH') < 18) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block past"
        document.getElementById("14").className = "row time-block past"
        document.getElementById("15").className = "row time-block past"
        document.getElementById("16").className = "row time-block past"
        document.getElementById("17").className = "row time-block present"
      }  else if(dayjs().format('HH') >= 18) {
        console.log("true")
        document.getElementById("9").className = "row time-block past"
        document.getElementById("10").className = "row time-block past"
        document.getElementById("11").className = "row time-block past"
        document.getElementById("12").className = "row time-block past"
        document.getElementById("13").className = "row time-block past"
        document.getElementById("14").className = "row time-block past"
        document.getElementById("15").className = "row time-block past"
        document.getElementById("16").className = "row time-block past"
        document.getElementById("17").className = "row time-block past"
      } 

    }
    

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
  