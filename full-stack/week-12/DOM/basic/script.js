





const ul = document.querySelector('ul');

const li = document.createElement('li');

li.innerText = 'Some Other Movie'

ul.append(li);

li.classList.add('movie-item');

console.log(li.classList.contains('movie-item'));
// Modifying the text

li.remove();