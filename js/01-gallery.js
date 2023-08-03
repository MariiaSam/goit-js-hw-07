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
  onShow: (instance) => {
    document.addEventListener('keydown', handlerEscModal);
  },
  onClose: (instance) => {
    document.removeEventListener('keydown', handlerEscModal);
  },
});

function openImg(evt) {
  evt.preventDefault();

  const datasetSource = evt.target.dataset.source;
  if (!datasetSource) return;

  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function handlerEscModal(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  };
};
