const songContainer = document.getElementById('song-container');

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
    console.log(item);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', item.images[0].url);
    songContainer.append(imgEl);
});
}

const url1 = 'https://interactionlab.space/data/assignment-4-1.json';

const main = async () => {
    const response = await fetchContent(url1);
    console.log (response);
    buildSongs(response.items);
};

main();



// 0 means the first one
// You use [] only with array
// const buildSongs = songs => {
// the buildSONG can be any name I want