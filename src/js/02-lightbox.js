import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const items = galleryItems.map(({original, preview, description})=> {
  return `<a class="gallery__item" href="${original}" >
   <img
     class="gallery__image"
     src="${preview}"
     alt="${description}"/>
  </a>`}).join("");
    
const galleryBox = document.querySelector('.gallery');

galleryBox.innerHTML = items;

function stopLoading(event) {
    event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });