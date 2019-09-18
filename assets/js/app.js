
//IGDB calls 
var queryURLGames = "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games";
// unixOneYear is the seconds for 365 days
var unixOneYear= 31536000
//This is the formula to convert the current time into unix.
var unixCurrentTime =  Math.floor((Date.now()) / 1000);
var queryTime = unixCurrentTime - unixOneYear

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
    response.forEach(element => {
      console.log('igdb response', response)
      getCover(element);;
      
    });
  })
  

//function to get top ten images and append images and name to page. Also to call the general game information for the middle section.
function getCover(data) {
  console.log('getCover response',data)
    var image = $("<img>")
    // if (data.cover === undefined) {
    //   console.log("UNDEF: " + data.name)
    // }
 /*   image.attr("src", "http:" + data.cover.url);
    $(".containerOneGame").append(image);
    $(".containerOneGame").append(data.name);*/
    pullGameInfo(image, data)   

    var datacard = $(`
        <div class="col-md-6 col-lg-3">
        <div class="card ">
            <img src="${"http:" + data.cover.url}" class="card-img-top img-fluid" />
            <div class="card-block">
                <h3 class="card title">${data.name}</h3>
                
            </div>
        </div>`) 
        $(".containerOneGame").append(datacard);


}




///////////////////

