
var gameSpotURL = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=ae89892595c24a1771b20007d69c34c8e57bc96a&format=json&limit=10&filter=publish_date:2018-01-01|2019-06-01,articles_api_url"

$.ajax({
    url: gameSpotURL,
    method: 'GET'
    // data: 
}).then(function(response) {
    console.log(response);
    var results = response.results;

        for (let i = 0; i < results.length; i++) {
            // var articleDiv = $('<div>')

            var demo = response.results[i].name;
            $('#article').append(demo)


            // var demo = results[i].deck;

            // var p = $('<p>').text(demo);

            // articleDiv.append(p)

            // $('#article').prepend(articleDiv);  
            
        }

    
})

