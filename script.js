window.onload = function () {
    console.log('Hello Rolling Scopes!');

    //Menu
    addMenuClickHandler();

    //Tags
    addTagsClickHandler();

    //Pictures
    addPicturesClickHandler();
}

/* SLIDER */

const sliderBackground = document.querySelector(".slider");
const slideContainer = document.querySelector(".slider__images");
const arrow = document.querySelectorAll(".slider .arrow");

const slides = {
  0: [`<div class="iphone iphone_vertical">
        <div class="iphone__screen"></div>
        <div class="iphone__phone"></div>
        <div class="iphone__shadow"></div>
       </div>`,
      `<div class="iphone iphone_horizontal">
        <div class="iphone__screen"></div>
        <div class="iphone__phone"></div>
        <div class="iphone__shadow"></div>
       </div>`],
  1: [`<img width="517" height="513" src="./assets/img/slider-images/2-iphones.png" alt="iPhone Vertical">`]
};

const slideColor = {
  0: "bg-red",
  1: "bg-blue",
  "default": "bg-red"
}

// Phone screens switching off / on
function phoneScreensActivate() {
  const phones = document.querySelectorAll(".slider .iphone__screen");
  phones.forEach( phone => phone.addEventListener( "click", event => {
    if ( event.target.classList.contains("hidden") ) {
      event.target.classList.remove("hidden");
    } else {
      event.target.classList.add("hidden");
    }
  }));
}
phoneScreensActivate();

let currentSlide = 0;
arrow.forEach( each => each.addEventListener("click", event => {
  ( event.target.classList.contains("left") ) ? currentSlide-- : currentSlide++;

  if (currentSlide == Object.keys(slides).length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = Object.keys(slides).length-1;
  }

  sliderBackground.classList.value = "slider home";

  if(slideColor.hasOwnProperty(currentSlide)) {
    sliderBackground.classList.add(slideColor[currentSlide]);
  } else {
    sliderBackground.classList.add( slideColor["default"] );
  }

  slideContainer.innerHTML = "";
  slides[currentSlide].forEach( img => slideContainer.innerHTML += `\n${img}`);

  phoneScreensActivate();
}));


//Menu function expressions
const addMenuClickHandler = () => {
    const MENU = document.getElementById('menu');

    MENU.addEventListener('click', (event) => {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    })
}

//Pictures function expressions
const addPicturesClickHandler = () => {
    document.querySelector('.layout-4-column').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio__picture')) {
            let clickedPicture = e.target;
            removeSelectedPictures();
            selectClickedPicture(clickedPicture);
        }
    })    
}

const removeSelectedPictures = () => {
    let pictures = document.querySelectorAll('.layout-4-column .portfolio__picture');
    pictures.forEach(picture => {
        picture.classList.remove('picture_selected');
    })
}

const selectClickedPicture = (clickedPicture) => {
    clickedPicture.classList.add('picture_selected');
}


//Tags function expressions
const addTagsClickHandler = () => {
    document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            changePictureOrder();
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.portfolio__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('selected');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('selected');
}

const changePictureOrder = () => {
    let picturesParent = document.querySelector('.layout-4-column');
    let pictures = document.querySelectorAll('.layout-4-column .portfolio__picture');
    picturesParent.appendChild(pictures.item(0));
}