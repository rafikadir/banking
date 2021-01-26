  
    // Log in Button Event handler 
    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click',function(){
        const logArea = document.getElementById('login-area');
        logArea.style.display="none";
        const trans = document.getElementById("trasaction-area");
        trans.style.display = "block";
    });

    // Deposit Buttom event handler
    const depositBtn = document.getElementById('deposit');
    depositBtn.addEventListener('click', function(){
        const depositNumber = getInputNumber("depositAmount");

        updateText("currentDepo",depositNumber)
        updateText("balance",depositNumber);

        document.getElementById("depositAmount").value = "";
    });

    // Withdraw Event Button handler
    const withdrawBtn = document.getElementById('withdraw');
    withdrawBtn.addEventListener('click',function(){
        const withdrawAmountNumber = getInputNumber("withdrawAmount");
    });

    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

    function updateText(id,depositNumber){
        const currentBalance = document.getElementById(id).innerText;
        const balanceNumber = parseFloat(currentBalance);
        const totalBalance = depositNumber + balanceNumber;
        document.getElementById(id).innerText = totalBalance;
    };
  
        
    //     const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    //     const currentWithdrawNumber = parseFloat(currentWithdraw);
    //     const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    //     document.getElementById("currentWithdraw").innerText = totalWithdraw;

    //     document.getElementById("withdrawAmount").value = "";

