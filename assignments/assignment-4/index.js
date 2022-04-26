const songContainer = document.getElementById('song-container');
const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchContent = (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json());
};
const htmlDecode = (input) => {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innterText;
}

const buildSongs = songs => {
songs.forEach(item =>{
    // console.log(item);
    const imgEl = document.createElement('img');
    // imgEl.setAttribute('src', item.images[0].url);
    // songContainer.append(imgEl);
    // imageClick(imgEl);
});
}

// const imageClick = (image) => {
//     image.forEach(item => 
//         item.addEventListener('click', function() {
//             revealModal();
//             console.log('image event listener');
//         }
//         ))
// };

const url1 = 'https://interactionlab.space/data/assignment-4-1.json';

const main = async () => {
    const response = await fetchContent(url1);
    // console.log (response);
    buildSongs(response.items);
    buildSlideshow(response.items);
};


const buildSlideshow = (songs) => {
    let leftI = 0;
    let rightI = 4;
  
    // const articles = songs.slice(0, 10).map(buildSlide);

    // const firstSongs = songs.slice(0,10).map(buildSlide);
    console.log(songs.slice(0,5));
    songs.slice(0,5).forEach(e => (buildSlide(e)));


    // slideshowContainer.append(buildSlide(songs.slice(0,4)));

    prevButton.addEventListener('click', () => {
        leftI += 1;
        rightI += 1;
        if (rightI >= songs.length) {
            rightI = 0;
        }
        if (leftI >= songs.length) {
            leftI = 0;
        }
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[4]);
        // slideshowContainer.removeChild(slideshowContainer.children[4]);
        (buildSlide(songs[rightI],"pre"));
        // slideshowContainer.prepend(buildSlide(songs[rightI]));

    });

  
    nextButton.addEventListener('click', () => {
        leftI -= 1;
        rightI -= 1;
        if (leftI < 0) {
            leftI = songs.length - 1;
        }
        if (rightI < 0) {
            rightI = songs.length - 1;
        }
        // console.log(slideshowContainer.querySelectorAll('article'));
        slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[0]);
        (buildSlide(songs[leftI]));

        // slideshowContainer.append(buildSlide(songs[leftI],leftI));
    });
}

    const buildSlide = (songs,state="post") => {
        console.log(songs.images[0].url);
        const songContainer = document.createElement('article');
            const posterImg = document.createElement('img');
            posterImg.src = songs.images[0].url;
            posterImg.classList.add('poster-img');
            posterImg.id = 'poster-img-id';
            // songContainer.append(posterImg);
            if (state=="post"){
                console.log("post")
                slideshowContainer.append(posterImg);
            }
            else if(state=="pre"){
                console.log("pre")
                slideshowContainer.prepend(posterImg);
            }
 };
 

main();