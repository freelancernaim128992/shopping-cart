const plusBtn = document.getElementById('plusIcon');
plusBtn.addEventListener('click', function(){
    const mobile = document.getElementById('mobileNumber').value;
    const mobileNum = parseFloat(mobile);
    const mobileSum = mobileNum + 1;
    document.getElementById('mobileNumber').value = mobileSum;
    const mobPrice = 1219;
    const price = document.getElementById('mobilePrice').innerText;
    const priceNumber = parseFloat(price);
    const addPrice = priceNumber + mobPrice;
    document.getElementById('mobilePrice').innerText = addPrice;
})
const minusBtn = document.getElementById('minusIcon');
minusBtn.addEventListener('click', function(){
    const mobile = document.getElementById('mobileNumber').value;
    const mobileNum = parseFloat(mobile);
    const mobileSum = mobileNum - 1;
    document.getElementById('mobileNumber').value = mobileSum;
    const mobPrice = 1219;
    const price = document.getElementById('mobilePrice').innerText;
    const priceNumber = parseFloat(price);
    const addPrice = priceNumber - mobPrice;
    document.getElementById('mobilePrice').innerText = addPrice;
    if(mobile < 1 && price < 1){
        document.getElementById('mobileNumber').value = '0';
        document.getElementById('mobilePrice').innerText = '0';
    }  
})