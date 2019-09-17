
var gameSpotURL = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/articles/?api_key=ae89892595c24a1771b20007d69c34c8e57bc96a&format=json&limit=10&filter=publish_date:2018-01-01|2019-06-01,articles_api_url"

$.ajax({
    url: gameSpotURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
    var results = response.results;

        for (let i = 0; i < results.length; i++) {

            var articleTitle = response.results[i].title;
            var urlLink = response.results[i].site_detail_url;
            var infoDiv = $("<div>")
            infoDiv.addClass("")
            var str = articleTitle
            var urlClick = str.link(urlLink)
            infoDiv.append(urlClick);
            $('#article').append(infoDiv);   
        }
})




