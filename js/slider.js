$(document).ready(function () {
  const commonSlideContent = {
    title: 'Nowa kolekcja',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum...',
    buttonText: 'Zobacz więcej'
  };


  const slideImageIds = [1, 2, 3]; 

  const sliderContainer = $('.slider');

  slideImageIds.forEach(imageId => {
    const imageUrl = `https://picsum.photos/1380/550?random=${imageId}`;

    const slideHtml = `
      <div class="slider__item">
        <img data-lazy="${imageUrl}" class="slider__background" alt="${commonSlideContent.title}">
        <div class="slider__content">
          <h2 class="slider__title">${commonSlideContent.title}</h2>
          <p class="slider__description">${commonSlideContent.description}</p>
          <a href="#" class="slider__button">${commonSlideContent.buttonText}</a>
        </div>
      </div>
    `;
    sliderContainer.append(slideHtml);
  });

  sliderContainer.slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 800,
    lazyLoad: 'ondemand',
  });
});

