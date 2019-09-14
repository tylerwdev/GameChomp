//
var queryURLGames= "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games";


function changeName(name){


      var replaced = name.toLowerCase()
      replaced = replaced.split(' ').join('-');
      var urlWalkthrough = "https://www.ign.com/games/" + replaced;
      $(".walkthrough").html("<h3>" + urlWalkthrough +"</h3");
    

    }
 
    

    
