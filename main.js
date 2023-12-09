projects = document.querySelectorAll("#projects .carousel-item")
background = document.getElementById("projects-container")
next = document.querySelector(".projects .carousel-control-next")
prev = document.querySelector(".projects .carousel-control-prev")
const myCarousel = document.getElementById('projects')
myCarousel.addEventListener('slide.bs.carousel', event => {
    projects.forEach(project => {
        if(project.classList.contains('active') && project.classList.contains('first')){
            background.style.backgroundImage  = "url('assets/images/projects/backgrounds/1.jpeg')";
        }else if(project.classList.contains('active') && project.classList.contains('mokhber')){
            background.style.backgroundImage  = "url('assets/images/projects/backgrounds/mokhber.png')";
        }else if(project.classList.contains('active') && project.classList.contains('mawared')){
            background.style.backgroundImage  = "url('assets/images/projects/backgrounds/mawared.png')";
        }else if(project.classList.contains('active') && project.classList.contains('podcast')){
            background.style.backgroundImage  = "url('assets/images/projects/backgrounds/podcast.png')";
        }
    });
})