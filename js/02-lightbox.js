import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
// gallery.addEventListener('click', openImg);

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}' 
       alt='${description}'/>
        </a>
        </li>`
    )
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });