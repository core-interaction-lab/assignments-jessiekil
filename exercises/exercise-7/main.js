const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appdSJjQGEIEy5Zl3/Table%201?api_key=keyyl7BUgBJhsZRv3').then(data => data.json());

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');


    // Telling javascript what the const is
    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imdbUrlEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');
        const descriptionEl = document.createElement ('p');
        const posterEl = document.createElement ('img');


        // THESE ARE CLASSES, so you can add CSS values
        articleEl.classList.add('box');
        titleEl.classList.add('title');
        genreEl.classList.add('genre');
        imdbUrlEl.classList.add('imdb');
        releaseDateEl.classList.add('date');
        descriptionEl.classList.add('description');
        posterEl.classList.add('images');



        console.log(movie.fields.poster[0].url);
        posterEl.src= movie.fields.poster[0].url;
        titleEl.innerHTML = movie.fields.title;
        genreEl.innerHTML = movie.fields.genre;
        descriptionEl.innerHTML = movie.fields.description;
        // posterEl.src = movie.fields.poster.url;

        imdbUrlEl.href = movie.fields.imdb_url;
        imdbUrlEl.target = "_blank";
        imdbUrlEl.classList.add('imdb-link');

        imdbUrlEl.innerHTML = "IMDB Page";
        releaseDateEl.innerHTML = movie.fields.release_date;


// CALL IT
        articleEl.append(titleEl, genreEl, imdbUrlEl, releaseDateEl, descriptionEl, posterEl);
        moviesContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-${index + 1}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "#fc2ead";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });
    });
};

fetchMovies();