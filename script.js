  
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
        const depositAmount = document.getElementById("depositAmount").value;
        const depositNumber = parseFloat(depositAmount);

        //Call Function
        updateText("currentDepo",depositNumber)
        updateText("balance",depositNumber);

        //Value Clean in Input
        document.getElementById("depositAmount").value = "";
    });

    function updateText(id,depositNumber){
        const currentBalance = document.getElementById(id).innerText;
        const balanceNumber = parseFloat(currentBalance);
        const totalBalance = depositNumber + balanceNumber;
        document.getElementById(id).innerText = totalBalance;
    };
    
    //Withdraw Balance
    const withdrawBtn = document.getElementById('withdraw');
    withdrawBtn.addEventListener('click',function(){
        const withdrawAmount = document.getElementById("withdrawAmount").value;
        const withdrawAmountNumber = parseFloat(withdrawAmount);
        
        const currentWithdraw = document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
        document.getElementById("currentWithdraw").innerText = totalWithdraw;

        document.getElementById("withdrawAmount").value = "";
    });


    