window.onload = function () {
    console.log('Hello Rolling Scopes!');

    //Menu
    addMenuClickHandler();

    //Tags
    addTagsClickHandler();

    //Pictures
    addPicturesClickHandler();
}

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