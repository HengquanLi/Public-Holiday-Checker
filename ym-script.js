var apiKey = "1da6b12f081b6014f18ea9f7c1ea494e31deb443";
var searchTerm = "";

function holiday () {
  var queryURL = "https://calendarific.com/api/v2/holidays?api_key=" + apiKey + "&country=AU&year=2020"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
})}