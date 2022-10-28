import { galleryItems } from './gallery-items.js';

// Change code below this line

const galletyRefs = document.querySelector('.gallery');
let showImage ;

const createMarkUp = galleryItems.map(({preview, original, description}) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`
        }).join("");

galletyRefs.innerHTML = createMarkUp;
galletyRefs.addEventListener('click', modalOpen);
document.addEventListener('keydown', modalClose)


function modalOpen (evt) {
                evt.preventDefault();
                if(evt.target.nodeName !== 'IMG') {
                return
                }
                showImage = basicLightbox.create(`<img src="${evt.target.dataset.source}">`)
                showImage.show()
}


function modalClose (evt) {
    if (evt.code === 'Escape') {
    showImage.close()
}
}


