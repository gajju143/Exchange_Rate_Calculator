const currency1 = document.getElementById('currency-one');
const amount1 = document.getElementById('amount-one');
const currency2 = document.getElementById('currency-two');
const amount2 = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch exchage rate and update the document

function calculate(){
  const currency_one = currency1.value;
  const currency_two = currency2.value;

  fetch('https://api.exchangerate-api.com/v4/latest/'+currency_one)
     .then(res => res.json())
     .then(data => {
       // console.log(data);
       const rate = data.rates[currency_two];

       amount2.value = (amount1.value*rate).toFixed(2);
     });
}

currency1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
currency2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});

calculate();
