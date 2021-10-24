import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup() {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
    }).join('');
  
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    
    if (event.target.className !== "gallery__image") {
        return;
    };
   
    const image = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);

    instance.show()
    
}





