function productEventHandler(isIncrease, id, productPrice) {
    const productValue = getInputValue(id);
    let productSum = productValue;
    if (isIncrease == true) {
        productSum = productValue + 1;
    }
    if (isIncrease == false && productValue > 0) {
        productSum = productValue - 1;
    }
    document.getElementById(id + 'Number').value = productSum;
    const productPriceSum = productSum * productPrice;
    document.getElementById(id + 'Price').innerText = productPriceSum;
    calculatorTotal();
}
function calculatorTotal(){
    const mobileValue = getInputValue('mobile');
    const caseValue = getInputValue('case');
    const totalPrice = mobileValue * 1219 + caseValue * 59;
    document.getElementById('subtotal').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = tax;
    const allProductPrice = totalPrice + tax;
    document.getElementById('total-price').innerText = allProductPrice;
}

function getInputValue(product){
    const productInput = document.getElementById(product + 'Number');
    const productValue = parseInt(productInput.value);
    return productValue;
}

const plusBtn = document.getElementById('plusIcon');
plusBtn.addEventListener('click', function () {
    productEventHandler(true, 'mobile', 1219);
})
const minusBtn = document.getElementById('minusIcon');
minusBtn.addEventListener('click', function () {
    productEventHandler(false, 'mobile', 1219);
})
document.getElementById('plus').addEventListener('click', function(){
    productEventHandler(true, 'case', 59);
})
document.getElementById('minus').addEventListener('click', function(){
    productEventHandler(false, 'case', 59);
})
