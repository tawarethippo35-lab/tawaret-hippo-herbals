(function () {
  'use strict';

  var promotionalPrices = document.querySelectorAll('[data-promo-price]');

  promotionalPrices.forEach(function (priceBlock) {
    var validUntil = priceBlock.getAttribute('data-promo-valid-until');
    var regularPrice = priceBlock.getAttribute('data-regular-price-value');
    var expiry = new Date(validUntil + 'T23:59:59-04:00');

    if (!validUntil || !regularPrice || Number.isNaN(expiry.getTime()) || Date.now() <= expiry.getTime()) {
      return;
    }

    priceBlock.querySelector('[data-price-value]').textContent = 'TT$' + regularPrice;
    priceBlock.querySelector('[data-price-note]').textContent = 'Regular price.';
    priceBlock.removeAttribute('data-promo-price');
  });
})();
