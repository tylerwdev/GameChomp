//code for giphy ajax call and post to page

// initial giphy array of tv shows

var stillURL = "200w_s.gif"
var animURL = "200w.gif"



function displayShowGifs(topTenName) {
  

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nbtnKFS5ycqrRpSRWBJjEH7Y48EcfuNL&q=" + topTenName + "&limit=3&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
      
      console.log(response)
      response.data.forEach(e => {
      
        var prefixURL = "https://media.giphy.com/media/" + e.id + "/" 

        var gifURL = prefixURL + stillURL;

        /*var gifImage =  $("<img>").attr("src", gifURL);
        gifImage.addClass("stop");
        gifImage.attr("data-prefixURL", prefixURL)
        $(".gifs-view").append(gifImage);*/

        var datacard = $(`
        <div class="col-md-6 col-lg-4 mb-lg-3 mb-md-3 mb-sm-3">
        <div class="card ">
            <img src="${gifURL}" class="card-img-top img-fluid stop" data-prefixURL="${prefixURL}"/>
              <div class="card-block">
            
            </div>
        </div>`) 
        $(".gifs-view").append(datacard);
      });


      $( ".stop" ).click(function() {
          var image = $(this)
        if (image.hasClass("start"))
          {var prefix = image.attr("data-prefixURL");
          console.log("I'm still here!");
          image.attr("src", prefix + stillURL);
          image.removeClass("start");
          image.addClass("stop")
          }
          
        else if (image.hasClass("stop")) {
      
          var prefix = image.attr("data-prefixURL");
          image.attr("src", prefix + animURL);
          image.removeClass("stop");
          image.addClass("start")
          
        }
      });
    });
}
displayShowGifs()









