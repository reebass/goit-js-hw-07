import { galleryItems } from './gallery-items.js';
// Change code below this line

const galletyRefs = document.querySelector('.gallery');
// let showImage;

const createMarkUp = galleryItems.map(({preview, original, description}) => {
            return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`
        }).join("");

galletyRefs.innerHTML = createMarkUp;

new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionDelay: 250,
});



