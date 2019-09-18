
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
    

    data: "fields cover.url, genres.name, name, first_release_date, storyline,summary, platforms.name, total_rating, videos; sort total_rating desc; limit 10; where  total_rating_count>40 & cover != null & summary != null & genres != null & platforms != null & storyline != null & first_release_date != null &first_release_date>"+queryTime +";"

  })
  .then(function (response) {
    response.forEach(element => {
      
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

//THIS IS THE SEARCH BAR FUNCTION -JG //

$( document ).ready(function() {

$( "div.button" ).click(function() {
  $( "form#cse-search-box" ).submit();
    return false;
});
    
    
});

//TOAST FUNCTION

$.toast({
  text: "Don't forget to star the repository if you like it.", // Text that is to be shown in the toast
  heading: 'Note', // Optional heading to be shown on the toast
  icon: 'info', // Type of toast icon
  showHideTransition: 'slide', // fade, slide or plain
  allowToastClose: true, // Boolean value true or false
  hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
  stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
  position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
  
  
  
  textAlign: 'center',  // Text alignment i.e. left, right or center
  loader: true,  // Whether to show loader or not. True by default
  loaderBg: '#000000',  // Background color of the toast loader
  beforeShow: function () {}, // will be triggered before the toast is shown
  afterShown: function () {}, // will be triggered after the toat has been shown
  beforeHide: function () {}, // will be triggered before the toast gets hidden
  afterHidden: function () {}  // will be triggered after the toast has been hidden
});




