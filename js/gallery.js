const galleryColumnsData = [
  [1, 2],  
  [3, 4],  
  [5, 6],   
  [7, 8]   
];

const galleryContainer = $('.photo-gallery__grid');

galleryColumnsData.forEach(columnData => {
  const columnDiv = $('<div class="photo-gallery__column"></div>');

  columnData.forEach(imageId => {

    const imageUrl = `https://picsum.photos/id/${imageId}/600/800`;
    const itemLink = $(`
      <a href="#" class="photo-gallery__item">
        <img data-src="${imageUrl}" class="photo-gallery__image" alt="Zdjęcie butów z galerii">
      </a>
    `);
    columnDiv.append(itemLink);
  });

  galleryContainer.append(columnDiv);
});


const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; 
      img.removeAttribute('data-src'); 
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));