

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const prevDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + prevDepositTotal;

    // Update  total balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = prevBalanceTotal + depositAmount;
    depositInput.value = "";
  });

// Handle withdraw Button

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdraAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdraAmountText);

    //####### update Withdraw total ###########

    const withdrawTotal = document.getElementById("withdraw-total");
    const prevWithdrawTotalText = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalText);
    withdrawTotal.innerText = prevWithdrawTotal + withdrawAmount;

    // Balance update after withdraw

    const balanceTotal = document.getElementById("balance-total");
    const prevBalanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalText);
    balanceTotal.innerText = prevBalanceTotal - withdrawAmount;

    withdrawInput.value = "";
  });
