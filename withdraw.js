const btnWithdraw = document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawFieldString = inputWithdraw.value;
    const inputWithdrawField = parseFloat(inputWithdrawFieldString);

    // condition

    if (inputWithdrawFieldString <= 0 || inputWithdrawFieldString == "") {
        alert("amount must be filled out");
        return false;
    }


    inputWithdraw.value = '';

    // balance field
    const carrentBalance = document.getElementById('carrent-balance');
    const previusCarrentBalanceString = carrentBalance.innerText;
    const previusCarrentBalance = parseFloat(previusCarrentBalanceString);


    if (inputWithdrawFieldString > previusCarrentBalance) {
        alert("apnar account a balance nei");
        return;
    }

    const totalBalance = previusCarrentBalance - inputWithdrawField;
    carrentBalance.innerText = totalBalance;

    const withdrawAmount = document.getElementById('withdraw-amount');
    const priviuswithdrawAmountString = withdrawAmount.innerText;
    const priviuswithdrawAmount = parseFloat(priviuswithdrawAmountString);


    // const totalWithdraw = inputWithdrawField + priviuswithdrawAmount;
    const withdrawTotal = inputWithdrawField + priviuswithdrawAmount;
    withdrawAmount.innerText = withdrawTotal;


    inputWithdraw.value = '';

})