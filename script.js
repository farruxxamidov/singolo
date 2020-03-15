window.onload = function () {
    console.log('Hello Rolling Scopes!');

    //Menu
    addMenuClickHandler();

    //Tags
    addTagsClickHandler();
}

//Menu function expressions
const addMenuClickHandler = () => {
    const MENU = document.getElementById('menu');

    MENU.addEventListener('click', (event) => {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    })
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
    let pictures = document.querySelectorAll('.layout-4-column .portfolio__picture');
    // console.log(pictures);
    // console.log(pictures[0]);
    // console.log(pictures[1]);
    // pictures[1]=pictures[0];
    // console.log(pictures[0]);
    // console.log(pictures[1]);
    let picturesArr = Array.from(pictures);
    picturesArr.shift();
    console.log(picturesArr);
    picturesArr.forEach(function (node) {
        document.getElementsByClassName('layout-4-column')[0].appendChild(node);
    });
}