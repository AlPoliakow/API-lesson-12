const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);//call the selectRandomImage() function and pass it images as a function
};

const selectRandomImage = function (images) {
    //console.log(randomIndex); // to check that a number between 0 and 99 is returned
    const randomIndex = Math.floor(Math.random() * images.length);
    //call the selectRandomImage() function and pass it images as a function
    const randomImage = images[randomIndex]; //square brackets
    //console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage){
    const author = randomImage.author; // dot notation for property
    const imageAddress = randomImage.download_url;
    //modify DOM elements
    authorSpan.innerText = author; // change innerText of authorSpan to the value of the author variable
    img.src = imageAddress; // set the src attribute of the img variable to the value of imageAddress
    imgDiv.classList.remove("hide"); // requires ""
};


button.addEventListener("click", function(){
    getImage();
});

