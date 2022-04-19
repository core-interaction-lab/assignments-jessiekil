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


  let happyEmotions =[];
  const fetchAnimes = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    happyEmotions = response.records.filter(emotion =>{
        return emotion.fields.emotions === "happy";
    });
    console.log(happyEmotions);
    buildSlideshow(happyEmotions);
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
        slideshowContainer.append(buildSlide(animes[rightI]));
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
        slideshowContainer.prepend(buildSlide(animes[leftI]));
    });
  };
  
  const buildSlide = (anime) => {
    const animeContainer = document.createElement('article');
    const posterSelectBtn = document.createElement('button');
    if (anime.fields.poster) {
        // console.log(anime.fields.poster[0].url);
        const posterImg = document.createElement('img');
        posterImg.src = anime.fields.poster[0].url;
        posterImg.classList.add('poster-img', 'dlkjfdl');
        posterImg.id = 'poster-img-id';
        animeContainer.append(posterSelectBtn);
        posterSelectBtn.append(posterImg);
    }

// APRIL 18th ADDED
const modalActive = document.getElementsByClassName("modal-active");

//posterSelectBtn.dataset.movieIndex = index; 
posterSelectBtn.addEventListener('click', evt => {
    buildSlideshow(modalActive);
    //buildSelectedMovie(moviesArray[index]);
});
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


const buildSelectedMovie = anime => {
    selectedModalContainer.innerHTML = '';
    if (anime.fields.poster) {
        const posterImg = document.createElement('img');
        posterImg.src = anime.fields.poster[0].url;
        posterImg.classList.add('poster-img');
        selectedModalContainer.append(posterImg);
    }

    if (movie.fields.title) {
        const titleEl = document.createElement('p');
        titleEl.innerHTML = `Title:${anime.fields.title}`;
        selectedModalContainer.append(titleEl);
    }

    // yellow: regular text
    // inside pink : javascript functions
    // look for anime and bring the titles

    if (movie.fields.year) {
        const yearEl = document.createElement('p');
        yearEl.innerHTML = `Year:${anime.fields.year}`;
        yearEl.classList.add('year');
        selectedModalContainer.append(yearEl);
    }
    
    if (movie.fields.studio) {
        const studioEl = document.createElement('p');
        studioEl.innerHTML = `Studio:${anime.fields.studio}`;
        studioEl.classList.add('studio');
        selectedModalContainer.append(studioEl);
    }

    if (movie.fields.imdb) {
        const imdbEl = document.createElement('p');
        imdbEl.innerHTML = `IMDB:${anime.fields.imdb}`;
        imdbEl.classList.add('imdb');
        selectedModalContainer.append(imdbEl);
    }

    if (movie.fields.originality) {
        const originalityEl = document.createElement('p');
        originalityEl.innerHTML = `originality:${anime.fields.originality}`;
        originalityEl.classList.add('originality');
        selectedModalContainer.append(originalityEl);
    }

};
});

// UNTIL HERE


  fetchAnimes();
  
  
  
  
  // const db = {
//     id: 'appstQyf9n95NbHMt', 
//     // you can get this info on the api site. look for id
//     table: 'all',
//     // this is the name of your table collection 
//     apiKey: 'keyyl7BUgBJhsZRv3'
//     // you can get this on your account
// };

// const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

// const fetchTitle = async () => {
//     const response = await fetch(airtableUrl).then(data => data.json());
//     //console.log(response);

//     const myObject = {
//         title: 'title',
//         year: '1920',        
//     }

//     const myArray = ['title', 987098, 'hello'];
//     const isReleased = true;

//     // console.log(myObject.year)
//     // console.log(myArray[2]);

//     const container = document.getElementById('collection');

// // if I want to put 2, it will include hello. if i put 0, title
//     response.records.forEach((title) => {
//         //console.log(title);
//         // if the poster fields exists, do whatever inside the bracket for the sentence below
//         if (title.fields.poster) {
//             //console.log(title.fields.poster[0].url);
//             const posterImg = document.createElement('img');
//             // I CAN EITHER USE 밑에꺼 아님 그  밑에밑에 꺼 for image retrieving
//             posterImg.src = title.fields.poster[0].url;
//             // posterImg.setAttribute('src', title.fields.poster[0].url);
//             posterImg.classList.add('images');
//             container.append(posterImg);

//         }
// // Append: whatever you put inside the function, you will add it onto the tool
//         if (title.fields.year) {
//            // console.log(title.fields.year);
//         }
// // THIS IS WHERE YOU CAN INSERT TEXT
//         if(title.fields.medium) {
//             const mediumEl = document.createElement('p');
//             mediumEl.innerHTML = title.fields.medium;
//             container.append(mediumEl);
//         }

//         if(title.fields.year) {
//             const yearEl = document.createElement('p');
//             yearEl.innerHTML = title.fields.year;
//             yearEl.classList.add('year');
//             container.append(yearEl);
//         }

//         if(title.fields.emotions) {
//             const emotionsEl = document.createElement('p');
//             emotionsEl.innerHTML = title.fields.emotions;
//             emotionsEl.classList.add('emotions');
//             container.append(emotionsEl);

//             const {happyImgs} = data;
//             document.getElementById("happy").textContent = happyImgs;
//             console.log(happyImgs);
//         }
//         //console.log(title.fields.emotions);
//         // and so on. Also, P stands for paragraph for paragraph text elements. 
//     });
   
// };
// // classlist= is creating the CSS name

// fetchTitle();