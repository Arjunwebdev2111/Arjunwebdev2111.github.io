var elem = document.querySelector('#count');

// Arrow function to  Increase the Number Count
const clicked = ()=>{
    elem.value= Number(elem.value)+1;
}

// Arrow function to  Reset the Number Count
const reset = ()=>{
    elem.value= 0;
}