let s_Balance=0;   //Declaring as Global variables
let c_Balance=0;

//Fetching Balance for Savings and cheque account
const get_SBalance = function(){
    s_Balance = Number($('#savings-balance').text().slice(1));
    return s_Balance;
}
const get_CBalance = function(){
    c_Balance = Number($('#checking-balance').text().slice(1));
    return c_Balance;
}



//----------------------------------------

//Saving Deposit funtion
const s_deposit = function(){
     s_Balance += Number($('#savings-amount').val());
     $('#savings-balance').text('$' + s_Balance);
     $('#savings-amount').val("");

     //Setting bg-color
     $("#savings-balance").attr("class","balance");
}


//Saving wihtdrawl funtion
const s_withdraw = function(){
    let amount = Number($('#savings-amount').val());
    if(s_Balance >= amount){
        s_Balance -= amount;
        $('#savings-balance').text('$' + s_Balance);
    }
    else if((c_Balance+s_Balance)>=amount){         // Checking for confirmation of Overdrawn
                if(confirm("Do you wanna overdrawn from Cheque Account ?")){
                    s_Overdraw();
                }        
        
    }
    else{
        alert('Sorry, Not Enough Balance');
    }
    $('#savings-amount').val("");

    if(s_Balance===0)
         $("#savings-balance").attr("class","zero");
    
}




// -----------------------------------------



//Cheque Deposit funtion
const c_deposit = function(){

    c_Balance += Number($('#checking-amount').val());
    $('#checking-balance').text('$' + c_Balance);
    $('#checking-amount').val("");

    //Setting bg-color
         $("#checking-balance").attr("class","balance");
}


//Cheque wihtdrawl funtion
const c_withdraw = function(){
   let amount = Number($('#checking-amount').val());
   if(c_Balance >= amount){
       c_Balance -= amount;
       $('#checking-balance').text('$' + c_Balance);
   }
   else if((c_Balance+s_Balance)>=amount){      // Checking for confirmation of Overdrawn
            if(confirm("Do you wanna Overdrawn from SAVINGS?")){
                c_Overdraw();
            }
   }else
        {
        alert('Sorry, Not Enough Balance');
       }
   
   $('#checking-amount').val("");

   //Setting bg-color red, if balance is zero
    if(c_Balance===0)
         $("#checking-balance").attr("class","zero");

}

//-----------------------------------------

const c_Overdraw = function(){
    let overdranAmount = Number($('#checking-amount').val()) - c_Balance;
    c_Balance = 0;
    s_Balance -=overdranAmount;

    $('#checking-balance').text('$' + c_Balance);
    $('#savings-balance').text('$' + s_Balance);

    //Setting bg-color red, if balance is zero
    $("#checking-balance").attr("class","zero");

    if(c_Balance===0)
         $("#checking-balance").attr("class","balance");
    
}


//-----------------------------------------

const s_Overdraw = function(){
    let overdranAmount = Number($('#savings-amount').val()) - s_Balance;
    s_Balance = 0; 
    c_Balance -=overdranAmount;

    $('#savings-balance').text('$' + s_Balance);
    $('#checking-balance').text('$' + c_Balance);
    
    //Setting bg-color red, if balance is zero
     $("#savings-balance").attr("class","zero");

     if(c_Balance===0)
         $("#checking-balance").attr("class","zero");
}



//-----------------------------------------


// Document Ready
const doc_Ready = function(){

    //Fetching Balance
      s_Balance = get_SBalance();
      c_Balance = get_CBalance();

}
$(document).ready(doc_Ready());
$("#savings-deposit").click(s_deposit);
$("#savings-withdraw").click(s_withdraw);
$("#checking-deposit").click(c_deposit);
$("#checking-withdraw").click(c_withdraw);