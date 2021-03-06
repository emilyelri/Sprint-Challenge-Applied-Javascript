/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselImages = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];

function createCarousel() {

  const carousel = document.createElement("div"),
    leftButton = document.createElement("div"),
    cImage = document.createElement("img"),
    rightButton = document.createElement("div");

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = "<";
  rightButton.textContent = ">";
  cImage.src = carouselImages[0];

  carousel.appendChild(leftButton);
  carousel.appendChild(cImage);
  carousel.appendChild(rightButton);

  leftButton.addEventListener('click', (e) => {
    if (cImage.src === carouselImages[0]) {
      cImage.src === carouselImages[3];
    }
    else if (cImage.src === carouselImages[1]) {
      cImage.src === carouselImages[0];
    }
    else if (cImage.src === carouselImages[2]) {
      cImage.src === carouselImages[1];
    }
    else if (cImage.src === carouselImages[3]) {
      cImage.src === carouselImages[2];
    }
  });
  
  rightButton.addEventListener('click', (e) => {
    if (cImage.src === carouselImages[0]) {
      cImage.src === carouselImages[1];
    }
    else if (cImage.src === carouselImages[1]) {
      cImage.src === carouselImages[2];
    }
    else if (cImage.src === carouselImages[2]) {
      cImage.src === carouselImages[3];
    }
    else if (cImage.src === carouselImages[3]) {
      cImage.src === carouselImages[0];
    }
  });

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.appendChild(createCarousel(carouselImages));