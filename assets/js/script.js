$("document").ready(function () {
  // Display the time
  const today = moment();
  $("#currentDay").text(today.format("dddd" + ", " + "MMMM Do YYYY"));

// Add event listeners to buttons to save data in localStorage 
$(".saveBtn").on("click", function () {
  var hour = $(this).parent().attr("id");
  var event = $(this).siblings(".description").val();
  localStorage.setItem(hour, event);
});

let currentTime = moment().hours();

// Bakcground colors
inputEl = $("textarea").each(function () {
  var textEL = $(this).attr("id");
  console.log(textEL);

  if (textEL < currentTime) {
    $(this).addClass("past");
  } else if (textEL == currentTime) {
    $(this).addClass("present");
  } else if (textEL > currentTime) {
    $(this).addClass("future");
  };
  
  setInterval(function () {
    inputEl;
  }, 1000);
});

// Data is retrieved from localStorage even after refreshing the page
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

});
