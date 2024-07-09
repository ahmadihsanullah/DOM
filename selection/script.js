// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor='#ccc';
judul.innerHTML="ihsan";

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// untuk memodifnya kita hanya bisa memberi ke element sehingga kita perlu ngambil per element melaluji index
// for(let i = 0 ; i < p.length ; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize= '50px'

// documents.getElementsByClassName() -> HTMLCollection
const p2 = document.getElementsByClassName('p2');

// // document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'orange'

// document.querySelectorAll() -> NodeList
const p = document.querySelectorAll('p');
for(let i = 0 ; i < p.length ; i++){
    p[i].style.backgroundColor = 'lightblue';
}

// mengubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');