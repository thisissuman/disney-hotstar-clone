const carousal = document.querySelector('.carousel') // 
let slider = [];  // need an array to store our sliders so we can easily manipulate them.

let slideIndex =0; //vaaible to tell current slider index



const createSlide = () => {   // now write a function to create a slide
    if (slideIndex >= movies.length) {
        slideIndex=0;
    }

    // creating DOM element 
    let slide = document.createElement('div');
    let slide_content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let imageElement = document.createElement('img');

    //attaching all elements
    imageElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    slide_content.appendChild(h1);
    slide_content.appendChild(p);
    slide.appendChild(slide_content);
    slide.appendChild(imageElement);
    carousal.appendChild(slide);

    //setting up image
    imageElement.src = movies[slideIndex].image;
    slideIndex++;


    //setting image classname
    slide.className = 'slider';
    slide_content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    slider.push(slide);


    if (slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
    
}

setInterval(() => {
    createSlide();
}, 3000);

/// video cards

 const videocards = document.querySelectorAll('.video-card');

 videocards.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        let video=item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave', ()=> {
        let video=item.children[1];
        video.pause();
    })
 })
 

 // card silders

 let cardContainers = document.querySelectorAll('.card-container');
 let preBtn = document.querySelectorAll('.pre-btn');
 let nxtBtn = document.querySelectorAll('.nxt-btn');
   

 cardContainers.forEach((item, i) => {
    let conainerDimensions = item.getBoundingClientRect();
    let cotainerWidth = conainerDimensions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += cotainerWidth - 200;

    })

    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= cotainerWidth + 200;

    })


 })

 