//IGDB calls 
var queryURLGames = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games";
var queryURLGenres = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/genres";
var queryURLCovers = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers";
var queryURLFeeds = "";
var queryURLArtworks = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/artworks";
var queryURLPlatforms = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms";
// unixOneYear is the seconds for 365 days
var unixOneYear= 31536000
//This is the formula to convert the current time into unix.
var unixCurrentTime =  Math.floor((Date.now()) / 1000);
//
var queryTime = unixCurrentTime - unixOneYear

//calling IGDB for the game name
$.ajax({
    url: queryURLGames,
    method: "POST",
    headers: {
      "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
    },
    data: "fields cover, genres, name, first_release_date, storyline,summary, platforms, artworks, total_rating, videos; where total_rating>95; where first_release_date.date>"+queryTime +";sort total_rating desc; limit 10; where cover!=null;"
  })
  .then(function (response) {
    console.log(response)
    response.forEach(element => {
      getCover(element);
      changeName(element.name);
    });
  })

//function to get top ten images and append images and name to page. Also to call the general game information for the middle section.
function getCover(data) {
  $.ajax({
      url: queryURLCovers,
      method: "POST",
      headers: {
        "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
      },
      data: "fields game, url; where game = " + data.id + ";"
    })
    .then(function (outer_response) {

      // Platform information
      $.ajax({
          url: queryURLPlatforms,
          method: "POST",
          headers: {
            "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
          },
          data: "fields name, generation; where id =" + data.platforms[0] + ";"
        })
        .then(function(response) {
          $.ajax({
            url: queryURLGenres,
            method: "POST",
            headers: {
              "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
            },
            data: "fields name; where id =" + data.genres[0] + ";"
          })
          .then(function (genreresponse) {
          // Beginning call GameInfo and append 
            var image = $("<img>")
            image.attr("src", "http:" + outer_response[0].url);
            $(".containerOneGame").append(image);
            $(".containerOneGame").append(data.name);
            pullGameInfo(genreresponse[0].name, response[0].name, image, data.total_rating, data.storyline, data.summary, data.first_release_date)
          })
        })
    })
}

//calling IGDB for the alt artwork 
// $.ajax({
//   url: queryURLArtworks,
//   method: "POST",
//   headers: {
//     "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
//   },
//   data: 
//   "games, height, width, image_id, url; where game = " + data.id +";"