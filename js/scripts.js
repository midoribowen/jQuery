$(document).ready(function() {
  $("#favorite form").submit(function(event) {
    var yourNameInput = $("input#your-name").val();
    var nameInput = $("input#name").val();
    var placeInput = $("input#place").val();
    var colorInput = $("input#color").val();
    var mealInput = $("input#meal").val();
    var dessertInput = $("input#dessert").val();
    var holidayInput = $("input#holiday").val();
    var dayOffInput = $("input#day-off").val();
    var musicInput = $("input#music").val();
    var filmInput = $("input#film").val();
    var memoryTextArea = $("textarea#memory").val();

    $(".your-name").text(yourNameInput);
    $(".name").text(nameInput);
    $(".place").text(placeInput);
    $(".color").text(colorInput);
    $(".meal").text(mealInput);
    $(".dessert").text(dessertInput);
    $(".holiday").text(holidayInput);
    $(".day-off").text(dayOffInput);
    $(".music").text(musicInput);
    $(".film").text(filmInput);
    $(".memory").text(memoryTextArea);

    $("#favorite-things").show();

    event.preventDefault();
  });
});
