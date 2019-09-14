//
function changeName(name){

var 

}


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
  

function changeName(name){


      var replaced = name.toLowerCase()
      replaced = replaced.split(' ').join('-');
      var urlWalkthrough = "https://www.ign.com/games/" + replaced;
      $(".walkthrough").html("<h3>" + urlWalkthrough +"</h3");
    

    }
 
    

    
