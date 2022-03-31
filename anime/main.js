const fetchMovies = async () => {
    const response = await fetch("https://api.airtable.com/v0/appdSJjQGEIEy5Zl3/Table%201?api_key=keyyl7BUgBJhsZRv3").then(data => data.json());
    
    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl =document.createElement('article');
        const TitleEl = document.createElement('div');
        const GenreEl = document.createElement('div');
        const LinkEl = document.createElement('a');
        const ReleaseDateEl = document.createElement('div');

        TitleEl.innerHTML = movie.fields.Title;
        GenreEl.innerHTML = movie.fields.Genre;

        LinkEl.href = movie.fields.Link;
        LinkEl.target = "_blank";
        LinkEl.classList.add('Link');

        LinkEl.innerHTML = "IMDB page";

        articleEl.append(TitleEl, GenreEl, ReleaseDateEl, LinkEl);

        ReleaseDateEl.innerHTML = movie.fields.ReleaseDate;

        moviesContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.Link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor =link.style.color;
        link.id = 'my-link-${index+1}';
        link.addEventListener('mouseover', (evt) => {
            link.style.color= "pink";
        });

        link.addEventListener('mouseout',evt => {
            link.style.color= linkColor;
        })
    });
};

fetchMovies();



// {} = means new function
// article EL means article elements
// same exact space, capital letters for field titles