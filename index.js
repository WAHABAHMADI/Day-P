//need to add date to currentDay element
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//need to be able to save any content from textarea into local storage
$(".btn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");

  localStorage.setItem(key, value);
});

//if I refresh the page the content in the textarea need to persist
$("#hr-9 .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#hr-14 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));

var rowEl = document.querySelectorAll(".description");
var timeBlockEl = document.querySelectorAll(".row");
var currentTime = moment().format("HH");

// need to check the current hour of the day and compare it to the block hour and have the style change based on the hour
for (var i = 0; i < timeBlockEl.length; i++) {
  var hourNumber = timeBlockEl[i].id;
  rowEl[i].value = localStorage.getItem(hourNumber);
  var idHour = hourNumber.split("-");
  var singleHour = Number(idHour[1]);

  if (singleHour < currentTime) {
    rowEl[i].classList.add("past");
  } else if (singleHour == currentTime) {
    rowEl[i].classList.add("present");
  } else if (singleHour > currentTime) {
    rowEl[i].classList.add("future");
  }
}
