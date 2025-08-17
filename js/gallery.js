document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.querySelector('.photo-gallery__grid');

  const imageSources = [
    'https://picsum.photos/id/1025/600/800',
    'https://picsum.photos/id/1026/600/400',
    'https://picsum.photos/id/1027/600/400',
    'https://picsum.photos/id/1028/600/800',
    'https://picsum.photos/id/1029/600/400',
    'https://picsum.photos/id/1024/600/400',
    'https://picsum.photos/id/1030/600/400',
    'https://picsum.photos/id/1031/600/400'  
  ];
  const imageClasses = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8'];

  
  galleryGrid.innerHTML = '';

  for (let i = 0; i < imageClasses.length; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.className = `gallery-item ${imageClasses[i]}`;

    const img = document.createElement('img');
    img.src = imageSources[i];
    img.alt = `Obraz z kategorii ${i + 1}`;

    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
  }
});