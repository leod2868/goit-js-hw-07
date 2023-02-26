import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const items = galleryItems.map(({original, preview, description})=> {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`}).join("");
    
const galleryBox = document.querySelector('.gallery');

galleryBox.innerHTML = items;

galleryBox.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) { return; }

    






	
	


}
