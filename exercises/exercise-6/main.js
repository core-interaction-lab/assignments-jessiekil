const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/appdSJjQGEIEy5Zl3/Table%201?api_key=keyyl7BUgBJhsZRv3").then(data => data.json());
    
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl =document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const LinkEl = document.createElement('div');
        const imdbUrlEl = document.createElement('div');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title;

        genreEl.innerHTML = movie.fields.Genre;
        
        articleEl.appendChild(titleEl);

        moviesContainer.appendChild(articleEl);
    });
};

fetchMovies();



// {} = means new function
// article EL means article elements
// same exact space, capital letters for field titles