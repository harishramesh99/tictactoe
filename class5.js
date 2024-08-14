const heading = document.getElementsByTagName('h1')[0];

console.log(heading);


console.log(document.getElementsByClassName('paragraph')[0]);

//const unorderedlist = document.getElementById('unordered-list')[0];

//console.log(`this is unordered-list: ${unorderedlist}`);

const listitems = document.getElementsByTagName('li');
console.log(`this is list-Items ${listitems}`);

for (let i = 0; i < listitems.length; i++) {
    console.log(`list item: ${listitems[i]}`);
}

// Access elements
const box = document.getElementById('.box');
        const changeTextBtn = document.getElementById('changeTextBtn');
        const toggleClassBtn = document.getElementById('toggleClassBtn');

        // Change text button event listener
        changeTextBtn.addEventListener('click', () => {
            box.textContent = 'Text Changed!';
        });

        // Toggle class and style button event listener
        toggleClassBtn.addEventListener('click', () => {
            box.classList.toggle('highlight');
        });