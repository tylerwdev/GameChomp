
//IGDB calls 
var queryURLGames = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games";
var queryURLGenres = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/genres";
var queryURLFeeds = "";
var queryURLPlatforms = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms";
// unixOneYear is the seconds for 365 days
var unixOneYear= 31536000
//This is the formula to convert the current time into unix.
var unixCurrentTime =  Math.floor((Date.now()) / 1000);
//
var queryTime = unixCurrentTime - unixOneYear
//data: "fields cover.url, genres.name, name, first_release_date, storyline,summary, platforms.name, total_rating, videos; where total_rating > 95; "+"; sort total_rating desc; limit 10; where cover != null;"
//calling IGDB for the game name

$.ajax({
    url: queryURLGames,
    method: "POST",
    headers: {
      "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
    },
    data: "fields cover.url, genres.name, name, first_release_date, storyline,summary, platforms.name, total_rating, videos; sort total_rating desc; limit 10; where cover != null & summary != null & genres != null & platforms != null & storyline != null & first_release_date != null &first_release_date>"+queryTime +";"
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

      // Platform information

  // Beginning call GameInfo and append 
    var image = $("<img>")
    if (data.cover === undefined) {
      console.log("UNDEF: " + data.name)
    }
    image.attr("src", "http:" + data.cover.url);
    $(".containerOneGame").append(image);
    $(".containerOneGame").append(data.name);
    console.log(data);
    pullGameInfo(data.genres[0].name, data.platforms[0].name, image, data.total_rating, data.storyline, data.summary, data.first_release_date)
    //pullGameInfo(data.genres[0].name, data.platforms[0].name, image, data.total_rating, data.storyline, data.summary, data.first_release_date)
    
   
}

