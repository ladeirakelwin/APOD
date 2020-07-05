let urlDaApi = 'https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw'

let form = document.querySelector('.form');
let input = document.querySelector('#data')

form.addEventListener('submit', function(event){
  event.preventDefault();
  let reqMedia = new XMLHttpRequest();
  urlDaApi = urlDaApi+`&date=${input.value}`
  // reqMedia.open('GET', urlData)
});


