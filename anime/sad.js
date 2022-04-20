const db = {
    id: 'appstQyf9n95NbHMt',
    table: 'all',
    apiKey: 'keyyl7BUgBJhsZRv3'
  };
  
  const airtableUrl =`https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`
  
  const slideshowContainer = document.getElementById('slideshow-container');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  const modalContainer = document.getElementById('modal-container'); 
  const selectedModalContainer = document.getElementById('anime-circle');


  let sadEmotions =[];
  const fetchAnimes = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    sadEmotions = response.records.filter(emotion =>{
        return emotion.fields.emotions === "sad";
    });
    console.log(sadEmotions);
    buildSlideshow(sadEmotions);
    return response.records;
  };
  
  const buildSlideshow = (animes) => {
    let leftI = 0;
    let rightI = 6;
  
    const articles = animes.slice(0, 7).map(buildSlide);
    //slideshowContainer.append(...articles);
    //const firstAnime = buildSlide(animes[0]);
    const firstAnime = animes.slice(0,7).map(buildSlide);
    slideshowContainer.append(...firstAnime);

    prevButton.addEventListener('click', () => {
        leftI += 1;
        rightI += 1;
        if (rightI >= animes.length) {
            rightI = 0;
        }
        if (leftI >= animes.length) {
            leftI = 0;
        }
        slideshowContainer.removeChild(slideshowContainer.children[0]);
        slideshowContainer.append(buildSlide(animes[rightI],rightI));
    });
  
    nextButton.addEventListener('click', () => {
        leftI -= 1;
        rightI -= 1;
        if (leftI < 0) {
            leftI = animes.length - 1;
        }
        if (rightI < 0) {
            rightI = animes.length - 1;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('article')[6]);
        slideshowContainer.prepend(buildSlide(animes[leftI],leftI));
    });
  };
  
  const buildSlide = (anime, index) => {
    const animeContainer = document.createElement('article');
    const posterSelectBtn = document.createElement('button');
    posterSelectBtn.style.all = "unset";
    if (anime.fields.poster) {
        // console.log(anime.fields.poster[0].url);
        const posterImg = document.createElement('img');
        posterImg.src = anime.fields.poster[0].url;
        posterImg.classList.add('poster-img');
        posterImg.id = 'poster-img-id';
        animeContainer.append(posterSelectBtn);
        posterSelectBtn.append(posterImg);
        posterSelectBtn.addEventListener('click', evt => {
            console.log(sadEmotions[index]);
            buildSelectedMovie(sadEmotions[index]);
        });

    }

// APRIL 18th ADDED
const modalActive = document.getElementsByClassName("modal-active");

//posterSelectBtn.dataset.movieIndex = index; 
// posterSelectBtn.addEventListener('click', evt => {
//     buildSlideshow(modalActive);
    //buildSelectedMovie(moviesArray[index]);
// });
// UNTIL HERE

    if (anime.fields.release_date) {
        // console.log(anime.fields.release_date);
    }
  
    if (anime.fields.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = anime.fields.description;
        descriptionEl.classList.add('anime-description');
        animeContainer.append(descriptionEl);
    }
    return animeContainer;
  };
  
//   THIS IS WHAT I ADDED TODAY
  
  modalContainer.addEventListener('click', () => {
  selectedModalContainer.style.display = "none";
  modalContainer.style.zIndex = "-1";
  });
function buildSelectedMovie(anime) {
    console.log(anime);
    selectedModalContainer.style.display = "block";
    modalContainer.style.zIndex = "1";
    selectedModalContainer.innerHTML = '';

    if (anime.fields.title) {
        const titleEl = document.createElement('p');
        titleEl.innerHTML = `${anime.fields.title}`;
        titleEl.classList.add('circle-title');
        selectedModalContainer.append(titleEl);
    }

    if (anime.fields.poster) {
        const posterImg = document.createElement('img');
        posterImg.src = anime.fields.poster[0].url;
        posterImg.classList.add('circle-image');
        selectedModalContainer.append(posterImg);
    }

    // // yellow: regular text
    // // inside pink : javascript functions
    // // look for anime and bring the titles

    if (anime.fields.year) {
        const yearEl = document.createElement('p');
        yearEl.innerHTML = `Year:${anime.fields.year}`;
        yearEl.classList.add('year');
        selectedModalContainer.append(yearEl);
    }
    
    if (anime.fields.studio) {
        const studioEl = document.createElement('p');
        studioEl.innerHTML = `Studio:${anime.fields.studio}`;
        studioEl.classList.add('studio');
        selectedModalContainer.append(studioEl);
    }

    if (anime.fields.medium) {
        const mediumEl = document.createElement('p');
        mediumEl.innerHTML = `Medium:${anime.fields.medium}`;
        mediumEl.classList.add('medium');
        selectedModalContainer.append(mediumEl);
    }

    if (anime.fields.imdb) {
        const imdbEl = document.createElement('p');
        imdbEl.innerHTML = `IMDB:${anime.fields.imdb}`;
        imdbEl.classList.add('imdb');
        selectedModalContainer.append(imdbEl);
    }

    if (anime.fields.originality) {
        const originalityEl = document.createElement('p');
        originalityEl.innerHTML = `originality:${anime.fields.originality}`;
        originalityEl.classList.add('originality');
        selectedModalContainer.append(originalityEl);
    }

    modalContainer.classList.add('modal-active');
};
// });
// UNTIL HERE


  fetchAnimes();
  
