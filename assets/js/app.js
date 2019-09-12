var topics = ['twitch']

function renderButtons() {
    $('#buttons-view').empty();

    for (let i = 0; i < topics.length; i++) {
       var gifButton = $('<button>');
        gifButton.attr("data-twitch", topics[i]);
        gifButton.text(topics[i]);
        $('#buttons-view').append(gifButton);
    }
}

renderButtons();


$(document).on('click', function(){
    
    $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'user-key': '6d738ccad4eec052f368a4959500b715',
        },
        data: 'search "dead cells"; fields summary, collection, name, age_ratings, cover, aggregated_rating, total_rating, videos;'
    })
      .then(response => {
          console.log(response);
      })
      .catch(err => {
          console.error(err);
      });
    
    
})

 
