import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = galleryItems;

const listRef = document.querySelector('.gallery');

function markupGallery(gallery) {
  return gallery
    .map(
      image => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
    )
    .join(' ');
}
const markup = markupGallery(gallery);
listRef.innerHTML = markup;

let lightboxOnClick = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
