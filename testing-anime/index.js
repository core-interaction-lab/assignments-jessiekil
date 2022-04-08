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
    let dataPos = -2;
    animes.forEach((title) => {
        console.log(title);
        const item = document.createElement('li');
        item.classList.add('carousel__item');
        item.dataset.pos = `${dataPos}`;
        dataPos += 1;
        if (dataPos > 2) {
            dataPos = 2;
        }
    
        if (title.fields.poster) {
            console.log(title.fields.poster[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = title.fields.poster[0].url;
            posterImg.classList.add('images');
            item.append(posterImg);
        }
        slideshowContainer.append(item);
    })

    const state = {};
const carouselList = slideshowContainer;
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

slideshowContainer.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  console.log(current);

  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = `${getPos(itemPos, newActivePos)}`
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}
};

fetchAnimes();
