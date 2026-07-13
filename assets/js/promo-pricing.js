(function () {
  'use strict';
  document.querySelectorAll('[data-promo-price]').forEach(function (priceBlock) {
    var validUntil = priceBlock.getAttribute('data-promo-valid-until');
    var regularPrice = priceBlock.getAttribute('data-regular-price-value');
    var expiry = new Date(validUntil + 'T23:59:59-04:00');
    if (!validUntil || !regularPrice || Number.isNaN(expiry.getTime()) || Date.now() <= expiry.getTime()) return;
    priceBlock.querySelector('[data-price-value]').textContent = 'TT$' + regularPrice;
    priceBlock.querySelector('[data-price-note]').textContent = 'Regular price.';
    priceBlock.removeAttribute('data-promo-price');
  });
  document.querySelectorAll('[data-product-order-link]').forEach(function (link) {
    var validUntil = link.getAttribute('data-promo-valid-until');
    var regularPrice = link.getAttribute('data-regular-price');
    var productName = link.getAttribute('data-product-name');
    var productSize = link.getAttribute('data-product-size');
    var expiry = new Date(validUntil + 'T23:59:59-04:00');
    if (!validUntil || !regularPrice || !productName || !productSize || Number.isNaN(expiry.getTime()) || Date.now() <= expiry.getTime()) return;
    var message = 'Hi Tawaret Hippo Herbals, I would like to pre-order ' + productName + ', ' + productSize + ', listed at TT$' + regularPrice + '.';
    link.href = 'https://wa.me/18682645784?text=' + encodeURIComponent(message);
  });
})();
