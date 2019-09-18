//1-this chunk is getting the most recent date
var articleUnix = new Date();
console.log(articleUnix + "CHECK ME")

articleUnix = articleUnix.toISOString();
articleUnix=articleUnix.slice(0,10);
console.log(articleUnix);


//2-API URL
var gameSpotURL = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/articles/?api_key=ae89892595c24a1771b20007d69c34c8e57bc96a&format=json&limit=10&filter=publish_date:2018-01-01|"+ articleUnix +",articles_api_url&sort=publish_date:desc"

//3-ajax call for API
$.ajax({
    url: gameSpotURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
  
    var results = response.results;
        //4-for loop to pull through information from API
        for (let i = 0; i < results.length; i++) {

            //5-pulls title from results and puts it into set var
            var articleTitle = response.results[i].title;

            //6-pulls article url from results and puts it into set var
            var urlLink = response.results[i].site_detail_url;

            //7-creating a new variable that makes a div through jquery
            var infoDiv = $("<div>")

            //8-this is where the classes from CSS go to style the article header/links on index
            infoDiv.addClass("")

            //9-this var is taking the articleTitle variable and connecting it to str...I think
            var str = articleTitle

            //10-turns the article url into str which is the article title
            var urlClick = str.link(urlLink)

            //11-takes the now string/article title/url and appends to the div infoDiv
            infoDiv.append(urlClick);

            //12-takes infoDiv with all its info and puts it onto index
            $('#article').append(infoDiv);   
        }
})




