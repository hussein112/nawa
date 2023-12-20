// projects = document.querySelectorAll("#projects .carousel-item")
// background = document.getElementById("projects-container")
// next = document.querySelector(".projects .carousel-control-next")
// prev = document.querySelector(".projects .carousel-control-prev")
// const myCarousel = document.getElementById('projects')
// myCarousel.addEventListener('slide.bs.carousel', event => {
//     projects.forEach(project => {
//         if(project.classList.contains('active') && project.classList.contains('first')){
//             background.style.backgroundImage  = "url('assets/images/projects/backgrounds/1.jpeg')";
//         }else if(project.classList.contains('active') && project.classList.contains('mokhber')){
//             background.style.backgroundImage  = "url('assets/images/projects/backgrounds/mokhber.png')";
//         }else if(project.classList.contains('active') && project.classList.contains('mawared')){
//             background.style.backgroundImage  = "url('assets/images/projects/backgrounds/mawared.png')";
//         }else if(project.classList.contains('active') && project.classList.contains('podcast')){
//             background.style.backgroundImage  = "url('assets/images/projects/backgrounds/podcast.png')";
//         }
//     });
// })
// Array to store image URLs
const projects = document.querySelectorAll("#projects .carousel-item");
const background = document.getElementById("projects-container");
const next = document.querySelector(".projects .carousel-control-next");
const prev = document.querySelector(".projects .carousel-control-prev");
const myCarousel = document.getElementById('projects');

// Array to store image URLs
const imageUrls = [
  'assets/images/projects/backgrounds/1.jpeg',
  'assets/images/projects/backgrounds/mokhber.png',
  'assets/images/projects/backgrounds/mawared.png',
  'assets/images/projects/backgrounds/podcast.png'
];

// Function to preload images
function preloadImages(urls) {
  const images = [];
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
    images.push(img);
  });
  return images;
}

// Preload the images
const preloadedImages = preloadImages(imageUrls);

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
