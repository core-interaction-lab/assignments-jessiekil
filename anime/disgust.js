const db = {
    id: 'appstQyf9n95NbHMt', 
    // you can get this info on the api site. look for id
    table: 'all',
    // this is the name of your table collection 
    apiKey: 'keyyl7BUgBJhsZRv3'
    // you can get this on your account
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchAnimes = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
    const disgustEmotions = response.records.filter(emotion => {
        return emotion.fields.emotions === "disgust";
    });
    console.log(disgustEmotions);
    buildSlideshow(disgustEmotions);
    return response.records;
};


const buildSlideshow = (animes) => {
    console.log(animes)
    console.log(buildSlide(animes[0]));

    const firstAnime = buildSlide (animes[0]);
    slideshowContainer.append(firstAnime);

    let currentAnime = 0;

    prevButton.addEventListener('click', () => {
        if (currentAnime === 0) {
            currentAnimes = animes.length -1;
        } else {
            currentAnime = currentAnime -1;
        }

        const animeRecord = animes[currentAnime];
        swapSlide(animeRecord);

    });

    nextButton.addEventListener('click', () => {
        if (currentAnime === animes.length -1) {
            currentAnimes =  0;
        } else {
            currentAnime = currentAnime + 1;
        }

        const animeRecord = animes[currentAnime];
        swapSlide(animeRecord);
    });
};

const swapSlide = (animeRecord) => {
    const slideEl = buildSlide(animeRecord);

    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
}

const buildSlide = (anime) => {
    const animeContainer = document.createElement('article');
    if (anime.fields.poster) {
        console.log(anime.fields.poster[0].url);
        const posterImg = document.createElement('img');
        posterImg.src = anime.fields.poster [0].url;
        posterImg.classList.add('poster-disgust');
        animeContainer.append(posterImg);
    }
    if (anime.fields.release_date){
        console.log(anime.fields.release_date);
    }

    if(anime.fields.emotions){
        const emotionsEl = document.createElement('p');
        emotionsEl.classList.add('anime-emotions');
        animeContainer.append(emotionsEl);
    }
    return animeContainer;
};

fetchAnimes();