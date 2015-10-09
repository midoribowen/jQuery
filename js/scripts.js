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
    var memoryInput = $("input#memory").val();

    $(".your-name").append(yourNameInput);
    $(".name").append(nameInput);
    $(".place").append(placeInput);
    $(".color").append(colorInput);
    $(".meal").append(mealInput);
    $(".dessert").append(dessertInput);
    $(".holiday").append(holidayInput);
    $(".day-off").append(dayOffInput);
    $(".music").append(musicInput);
    $(".film").append(filmInput);
    $(".memory").append(memoryInput);

    $("#favorite-things").show();

    event.preventDefault();
  });
});
