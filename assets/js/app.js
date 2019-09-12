var topics = ['twitch']

function renderButtons() {
    $('#buttons-view').empty();

    for (let i = 0; i < topics.length; i++) {
       var gifButton = $('<button>');
        gifButton.attr("data-twitch", topics[i]);
        gifButton.text(topics[i]);
        // gifButton.addClass("gifGetter");
        // gifButton.addClass('btn btn-primary');
        // gifButton.addClass('button-color');
        $('#buttons-view').append(gifButton);
    }
}

renderButtons();


$(document).on('click', function(){

    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://chicken-coop.p.rapidapi.com/games/Tomba?platform=Playstation%201",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
    //         "x-rapidapi-key": "87bb7a25d8msh7bd72b884b57b59p1ac2eajsnb6cb082269e7"
    //     }
    // }
    
    $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'user-key': '6d738ccad4eec052f368a4959500b715',
        },
        data: 'search "Yakuza"; fields name, involved_companies;'
    })
      .then(response => {
          console.log(response);
      })
      .catch(err => {
          console.error(err);
      });


    // }).then(function(response) {
    //     console.log(response)
    
    
    
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });


    
})

    var queryURL = "https://api-docs.igdb.com/#about";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response)
    })
