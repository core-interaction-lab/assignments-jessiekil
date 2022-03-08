const slider = document.getElementById('page-slider');
console.log(slider);
slider.addEventListener('change', (evt) => {
    const id = evt.target.value;
  console.log('changed', evt.target.value, `section-${parseInt(id) + 1}`);

  const heart = document.getElementById('heartbeat');

  heartbeat.classList.remove("heart--section-1","heart--section-2", "heart--section-3", "heart--section-4");

  heart.classList.add(`heart--section-${parseInt(id) + 1}`)

  const section = document.getElementById(`section-${parseInt(id) + 1}`);
  console.log(section);
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    console.log(s);
    s.classList.remove('section--active');
  });
  section.classList.add('section--active');

  const sectionTitle = document.getElementById(`section-${parseInt(id) + 1}-title`);
  console.log(sectionTitle);
  const sectionTitles = document.querySelectorAll('.pagetitle');
  sectionTitles.forEach(t => {
    t.classList.remove('pagetitle--active');
  });
  sectionTitle.classList.add('pagetitle--active');
});
