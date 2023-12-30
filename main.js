// Array to store image URLs
const projects = document.querySelectorAll("#projects .carousel-item");
const background = document.getElementById("projects-container");
const next = document.querySelector(".projects .carousel-control-next");
const prev = document.querySelector(".projects .carousel-control-prev");
const myCarousel = document.getElementById('projects');

// Array to store image URLs
const imageUrls = [
  'assets/images/projects/backgrounds/pngs/1.jpg',
  'assets/images/projects/backgrounds/pngs/mokhber.jpg',
  'assets/images/projects/backgrounds/pngs/mawared.jpg',
  'assets/images/projects/backgrounds/pngs/podcast.jpg'
];

// Function to preload images
function preloadImages(urls, callback) {
  const images = [];
  let loadedCount = 0;

  urls.forEach(url => {
    const img = new Image();
    img.onload = () => {
      loadedCount++;
      if (loadedCount === urls.length) {
        callback(images);
      }
    };
    img.src = url;
    images.push(img);
  });
}

preloadImages(imageUrls, preloadedImages => {
  myCarousel.addEventListener('slide.bs.carousel', event => {
    projects.forEach(project => {
      if (project.classList.contains('active') && project.classList.contains('first')) {
        background.style.backgroundImage = `url('${preloadedImages[0].src}')`;
      } else if (project.classList.contains('active') && project.classList.contains('mokhber')) {
        background.style.backgroundImage = `url('${preloadedImages[1].src}')`;
      } else if (project.classList.contains('active') && project.classList.contains('mawared')) {
        background.style.backgroundImage = `url('${preloadedImages[2].src}')`;
      } else if (project.classList.contains('active') && project.classList.contains('podcast')) {
        background.style.backgroundImage = `url('${preloadedImages[3].src}')`;
      }
    });
  });
});
