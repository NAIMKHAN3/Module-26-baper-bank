// console.log('baap er bank paichi')
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputField = document.getElementById('input-deposit');
    const inputDepositString = inputField.value;
    const inputDeposit = parseFloat(inputDepositString);
    // condition
    if (inputDepositString <= 0 || inputDepositString == "") {
        alert("amount must be filled out");
        return false;
    }




    const totalDepositAmount = document.getElementById('total-deposit-amount');
    const depositAmountString = totalDepositAmount.innerText;
    const depositAmount = parseFloat(depositAmountString);
    const total = depositAmount + inputDeposit;
    totalDepositAmount.innerText = total;
    // balance field
    const carrentBalance = document.getElementById('carrent-balance');
    const previusCarrentBalanceString = carrentBalance.innerText;
    const previusCarrentBalance = parseFloat(previusCarrentBalanceString);
    const totalBalance = previusCarrentBalance + inputDeposit;
    carrentBalance.innerText = totalBalance;

    inputField.value = '';
})