'use strict';

// fetch('https://api.nasa.gov/planetary/apod')
//     .then((response) => console.log(response));

fetch('https://api.nasa.gov/planetary/apod?api_key=sCwXDxhtSgfq6g0LZlOfq3pahwCJ2joIwZ6S1ih8')
    .then((response) => response.json())
    .then((response) => console.log(response));
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=sCwXDxhtSgfq6g0LZlOfq3pahwCJ2joIwZ6S1ih8')
    .then((response) => response.json())
    .then((response) => console.log(response));
