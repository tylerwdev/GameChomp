//1-this chunk is getting the most recent date
var articleUnix = new Date();
articleUnix = articleUnix.toISOString();
articleUnix=articleUnix.slice(0,10);



//2-API URL
var gameSpotURL = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/articles/?api_key=ae89892595c24a1771b20007d69c34c8e57bc96a&format=json&limit=10&filter=publish_date:2018-01-01|"+ articleUnix +",articles_api_url&sort=publish_date:desc"

//3-ajax call for API
$.ajax({
    url: gameSpotURL,
    method: 'GET'
}).then(function(response) {
  
    var results = response.results;
        //4-for loop to pull through information from API
        for (let i = 0; i < results.length; i++) {

            //5-pulls title from results and puts it into set var
            var articleTitle = response.results[i].title;

            //6-pulls article url from results and puts it into set var
            var urlLink = response.results[i].site_detail_url;
           
            //7-taking the url from the API and splitting it to grab just the link itself and put it into a new var
            var linkURL = urlLink.split('"')[0];

            //7-creating an anchor tag with jquery
            var infoAnchor = $("<a>");
            //taking the split API url and giving it an href attribute and putting it into infoAnchor
            infoAnchor.attr('href', linkURL);
            //giving infoAnchor an attribute of target/blank, making the link open in a new tab
            infoAnchor.attr('target', '_blank');
            //giving infoAnchor the text of the article title so the link is the article title
            infoAnchor.text(articleTitle);

            //8-takes infoAnchor with all its info and puts it onto index
            $('#article').append(infoAnchor);   
        }
})




