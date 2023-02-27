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
     alt="${description}"/>
  </a>
       </div>`}).join("");
    
const galleryBox = document.querySelector('.gallery');

galleryBox.innerHTML = items;

galleryBox.addEventListener('click', onLinkClick);

function onLinkClick(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) { return };
 
  const instance = basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}"/>`)

  window.addEventListener('keydown', onEscKeyPress);

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === 'Escape') { instance.close() }
  }
  function stopListener() {
    if (!instance.visible()) {
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }
   console.log(event.currentTarget)
}








