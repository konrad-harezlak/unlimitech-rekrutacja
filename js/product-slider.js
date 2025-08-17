const products = [
  {
    title: 'lorem ipsum',
    availability: 'lorem ipsum',
    price: '400zl',
    image: 'https://picsum.photos/300/400?random=1',
    badges: ['BESTSELLER', 'NOWOŚĆ']
  },
  {
    title: 'lorem ipsum',
    availability: 'lorem ipsum',
    price: '350zl',
    oldPrice: '400zl',
    image: 'https://picsum.photos/300/400?random=2',
    badges: ['PROMOCJA'],
    omnibus: 'Najniższa cena z 30 dni przed obniżką: 400zl'
  },
  {
    title: 'lorem ipsum',
    availability: 'lorem ipsum',
    price: '350zl',
    image: 'https://picsum.photos/300/400?random=3',
    badges: ['BESTSELLER', 'NOWOŚĆ']
  },
  {
    title: 'lorem ipsum',
    availability: 'lorem ipsum',
    price: '350zl',
    image: 'https://picsum.photos/300/400?random=3',
    badges: ['BESTSELLER', 'NOWOŚĆ']
  },
  {
    title: 'lorem ipsum',
    availability: 'lorem ipsum',
    price: '350zl',
    image: 'https://picsum.photos/300/400?random=3',
    badges: ['BESTSELLER', 'NOWOŚĆ']
  }
];

products.forEach(product => {
  const badgeHtml = product.badges.map(badge => {
    const classMap = {
      'PROMOCJA': 'promo',
      'NOWOŚĆ': 'new',
      'BESTSELLER': 'bestseller'
    };
    return `<span class="badge badge--${classMap[badge]}">${badge}</span>`;
  }).join('');

  const oldPriceHtml = product.oldPrice ? `<span class="product-card__price--old">${product.oldPrice}</span>` : '';
  const omnibusHtml = product.omnibus ? `<div class="product-card__omnibus-note">${product.omnibus}</div>` : '';

  const cardHtml = `
    <div class="product-card">
      <div class="product-card__image-container">
        <img src="${product.image}" alt="${product.title}" class="product-card__image">
        <div class="product-card__badges">${badgeHtml}</div>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__availability">${product.availability}</p>
        <div class="product-card__price-wrapper">
          <span class="product-card__price--current${product.oldPrice ? ' product-card__price--promo' : ''}">${product.price}</span>
          ${oldPriceHtml}
        </div>
        ${omnibusHtml}
      </div>
    </div>
  `;
  $('.product-slider__container').append(cardHtml);
});

$('.product-slider__container').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  customPaging: function (slider, i) {
      return "<button>•</button>";
    },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
