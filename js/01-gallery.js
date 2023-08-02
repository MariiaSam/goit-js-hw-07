import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
gallery.addEventListener('click', openImg);

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}' 
        data-source='${original}' alt='${description}'/>
        </a>
        </li>`
    )
    .join('');
}

const instance = basicLightbox.create(`<img width='' height='' src=''>`, {
  onShow: instance => {
    document.addEventListener('keydown', handlerModal);
  },
  onClose: instance => {
    document.removeEventListener('keydown', handlerModal);
  },
});

function openImg(evt) {
  evt.preventDefault();

  const datasetSource = evt.target.dataset.source;
  if (!datasetSource) return;

  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function handlerModal(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  };
};
