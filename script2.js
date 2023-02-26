
let inputNumber= document.querySelector('[type="number"]');
let inputResult= document.querySelector('[type="text"');
let btn= document.querySelector('button');


btn.addEventListener('click', function() {
    console.log(inputNumber.value);
    inputResult.disabled = false;
    inputResult.value = inputNumber.value**2;

})