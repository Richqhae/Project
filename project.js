document.addEventListener('DOMContentLoaded', function () {
    const billInput = document.querySelector('input[type="text"]');
    const tipButtons = document.querySelectorAll('.top button');
    const numOfPeopleInput = document.querySelector('.top input[type="text"]');
    const tipAmountInput = document.querySelector('.bottom input:nth-of-type(1)');
    const totalAmountInput = document.querySelector('.bottom input:nth-of-type(2)');
    const resetButton = document.querySelector('.bottom button');
  
    tipButtons.forEach((button) => {
      button.addEventListener('click', function () {
        if (button.textContent === 'Custom') {
        
          const customTip = prompt('Enter custom tip percentage:');
          if (customTip !== null) {
            updateValues(parseFloat(customTip));
          }
        } else {
          updateValues(parseFloat(button.textContent));
        }
      });
    });
  
    billInput.addEventListener('input', updateValues);
    numOfPeopleInput.addEventListener('input', updateValues);
    resetButton.addEventListener('click', resetValues);
  
    function updateValues(customTip = 0) {
      const billAmount = parseFloat(billInput.value);
      const numOfPeople = parseFloat(numOfPeopleInput.value);
  
      if (!isNaN(billAmount) && !isNaN(numOfPeople) && numOfPeople > 0) {
        const tipPercentage = customTip > 0 ? customTip : parseFloat(this.textContent) / 100;
        const tipAmount = (billAmount * tipPercentage) / numOfPeople;
        const totalAmount = (billAmount / numOfPeople) + tipAmount;
  
        tipAmountInput.value = tipAmount.toFixed(2);
        totalAmountInput.value = totalAmount.toFixed(2);
      }
    }
  
    function resetValues() {
      billInput.value = '';
      numOfPeopleInput.value = '';
      tipAmountInput.value = '';
      totalAmountInput.value = '';
    }
  });
  