const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const input = document.querySelector('input');
// const p = document.querySelector('p.description');


myButton.addEventListener('click', () => {
	myHeading.style.color = 'red';

	myHeading.innerHtml = input.value;
});