<script>
function getUserMovies2() {
   FB.api('/me/movies?fields=name,genre,release_date,picture,likes', function(response) {
     console.log('Got Movies: ', response);

     if (!response.error) {
       var markup = '';

       var movies = response.data;

       for (var i=0; i < movies.length && i < 1; i++) {
         var movie = movies[i];

            FB.api('fql', { q: 'SELECT name FROM page WHERE genre = ' + movie.genre + 'LIMIT 1' }, function (response)
            {   
                //do something with the response
                // show name of the movie...
                markup = '<p> Suggested Movie:'+ response + '</p>';

            });
       }
      document.getElementById('user-movies').innerHTML = markup;
     }
   });
 }  
 
 </script>