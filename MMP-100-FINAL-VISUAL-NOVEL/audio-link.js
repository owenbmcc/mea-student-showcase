/*
  this reads links in a page that have a data-link and data-sound property
  then creates a link that plays the sound first
*/

const links = Array.from(document.getElementsByTagName('a'));
links.forEach(link => {
  if (link.dataset.href && link.dataset.sound) {
    const { href, sound } = link.dataset;
    link.addEventListener('click', () => {
      const audio = new Audio();
      audio.src = sound;
      audio.play();
      audio.addEventListener('ended', () => {
        location.href = href;
      });
    });
  }
});