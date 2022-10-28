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
galletyRefs.addEventListener('click', modalOpen);
document.addEventListener('keydown', modalClose)

                
function modalOpen (evt) {
                evt.preventDefault();
                if(evt.target.nodeName !== 'IMG') {
                return
                }
                
                new SimpleLightbox(".gallery a", {
                    captionsData: "alt",
                    captionDelay: 250,
                  });
}


function modalClose (evt) {
    if (evt.code === 'Escape') {
    showImage.close()
}
}
