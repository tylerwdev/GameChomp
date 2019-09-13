

var queryURLGames= "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games";
var queryURLGenres= "";
var queryURLCovers= "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers";
var queryURLFeeds=  "";


$.ajax({
    url: queryURLGames,
    method: "POST",
    headers: {
      "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
    },

    data: 
    "fields cover, genres, name, storyline,summary, total_rating, videos; where total_rating>95; sort total_rating desc; limit 10;"
    
  })
   .then(function(response) {
    console.log(response)

    response.forEach(element => {
      getCover(element.id, element.name)
      changeName(element.name);
    });
  
  })

  function getCover(gameID, name){

  $.ajax({
    url: queryURLCovers,
    method: "POST",
    headers: {
      "user-key": "d6a65b1a245c294e5c6aad8ed4c649c1",
    },
    data: 
    "fields game, url; where game = " + gameID +";"
  })
  .then(function(response) {
    console.log(response);
    var image =$("<img>")
    image.attr("src", "http:"+ response[0].url);
    $(".containerOneGame").append(image);
    $(".containerOneGame").append(name);

    
  })

  
}
  
