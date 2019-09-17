//code for giphy ajax call and post to page

// initial giphy array of tv shows
var tvShowsArr = ["Family Guy", "the Simpsons", "Futurama" , "HIMYM" , "Brooklyn99", "the Big Bang Theory"]

var stillURL = "200w_s.gif"
var animURL = "200w.gif"


function displayShowGifs() {
    var tvShow =$(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nbtnKFS5ycqrRpSRWBJjEH7Y48EcfuNL&q=" + tvShow + "&limit=3&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
   console.log("HEEEELLLLPPP")

      
      var gifDiv = $("<div class = 'divGifStorage'>")  
      response.data.forEach(element => {
      
        var prefixURL = "https://media.giphy.com/media/" + element.id + "/"
        var gifURL = prefixURL + stillURL;
        var gifImage =  $("<img>").attr("src", gifURL);
        gifImage.attr("data-prefixURL", prefixURL)

        var imageDiv = $("<div>");
        imageDiv.addClass("imageDiv")
        var p = $("<p>").text("Rating: " + element.rating);
        p.addClass("imageDiv")
        imageDiv.append(gifImage);
        imageDiv.prepend(p);
        gifDiv.append(imageDiv);


       
        gifImage.addClass("stop");
        
        $(".gifs-view").prepend(gifDiv);
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
    function renderButtons() {
    $("#buttonDump").empty();
    for (var i =0; i < tvShowsArr.length; i++) {
    var a = $("<button>");
    a.addClass("show-btn");
    a.attr("data-name", tvShowsArr[i]);
    a.text(tvShowsArr[i]);
    $("#buttonDump").append(a);
    
     }
    }

    $("#addShow").on("click", function(event) {
        event.preventDefault();
    var tvShow =  $("#show-input").val().trim();
    tvShowsArr.push(tvShow);
    renderButtons();
    }); 

    $(document).on("click", ".show-btn", displayShowGifs);
    renderButtons();


