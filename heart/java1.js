const slider = document.getElementById('page-slider');
console.log(slider);
slider.addEventListener('change', (evt) => {
    const id = evt.target.value;
  console.log('changed', evt.target.value, `section-${parseInt(id) + 1}`);

  const section = document.getElementById(`section-${parseInt(id) + 1}`);
  console.log(section);
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    console.log(s);
    s.classList.remove('section--active');
  });
  section.classList.add('section--active');
});