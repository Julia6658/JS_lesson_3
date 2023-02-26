
let itemPrices = document.querySelectorAll('.basket-item--price > .price');
let sumInput = document.querySelector('#total');
let discountButton = document.querySelector('.discount--button');

/*itemPrices.forEach(function(price) {
    price = +price.innerHTML;
    console.log(typeof(price));
    console.log(price);
});*/

let itemPrice1 = +itemPrices[0].innerHTML;
let itemPrice2 = +itemPrices[1].innerHTML;
let itemPrice3 = +itemPrices[2].innerHTML;
let itemPrice4 = +itemPrices[3].innerHTML;

function calculateSum() { 
    let resultSum = itemPrice1 + itemPrice2 + itemPrice3 + itemPrice4;
    return resultSum;   
}

sumInput.textContent = calculateSum();
discountButton.addEventListener('click', function()  {
    let priceDiscount = +sumInput.textContent * 0.8;
    sumInput.textContent = priceDiscount;
    
}, {once: true});




