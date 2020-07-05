let form = document.querySelector('.form');
let input = document.querySelector('#data')

form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(input.value);
});
