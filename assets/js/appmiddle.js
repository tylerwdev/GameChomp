
// "fields cover, genres, name, storyline,summary, total_rating, videos; where total_rating>95; sort total_rating desc; limit 10;"
//If I move anything, I'll have to add a new empty method call with it. 


function pullGameInfo(datacard, data){
  datacard.click(function (){
console.log(pullGameInfo)
// Convert Release Date
  var convertUnixTime = new Date(data.first_release_date*1000) 
  var options = { year: 'numeric', month: 'long', day: 'numeric'};
  var longDate = convertUnixTime.toLocaleDateString("en-US", options );

  $(".gameInfo").empty();
  $(".gameInfo").append("Total rating: " +Math.floor(data.total_rating));
  $(".gameInfo").append(data.genres[0].name);
  $(".gameInfo").append(data.storyline);
  $(".gameInfo").append(data.summary);
  $(".gameInfo").append("Released " +longDate + ".");

  for (let i = 0; i < data.genres.length; i++) {
    $(".gameInfo").append(data.genres[i].name+ " ");
    console.log("hola tacos")
  }


  //Loop to add all available platforms
  for (let i = 0; i < data.platforms.length; i++) {
  $(".gameInfo").append(data.platforms[i].name+ " ");
}
var addingGifs= $("<div>").addClass("gifs-view");
$(".gameInfo").append(addingGifs);
displayShowGifs(data.name);




//   console.log(data );
    // var replaced = data.name.toLowerCase()
    // replaced = replaced.split(' ').join('-');
    // var urlWalkthrough = "https://www.ign.com/" + replaced;
    // $(".walkthrough").html("<h3>" + urlWalkthrough +"</h3");
  
    // })
  })
}

