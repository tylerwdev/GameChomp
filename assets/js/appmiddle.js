
// "fields cover, genres, name, storyline,summary, total_rating, videos; where total_rating>95; sort total_rating desc; limit 10;"


function pullGameInfo(genre_name, platform_name, image, total_rating, storyline, summary, releaseDate){
  image.click(function (){
  $(".gameInfo").empty();
  $(".gameInfo").append(total_rating);
  $(".gameInfo").append(genre_name);
  $(".gameInfo").append(platform_name)
  $(".gameInfo").append(storyline);
  $(".gameInfo").append(summary);
  $(".gameInfo").append(releaseDate);
  console.log(releaseDate)
 
})
}






