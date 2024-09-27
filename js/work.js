document.getElementById('donate-button')
.addEventListener('click',function(event){
   event.preventDefault();
   let addMoney=getInput('donate-noa');
   let bal = getTextInput('balance');
   if(isNaN(addMoney)||(addMoney>bal)){
    alert('Invalid amount');
    return;}
   else {
    let newBalanceInWallet =bal-addMoney;
  document.getElementById('balance').innerText=`${newBalanceInWallet} BDT`;
  let amount= getTextInput('donate-button-amount');
  let newBalance =amount+addMoney;
  document.getElementById('donate-button-amount').innerText=`${newBalance} BDT`;
  let dTime=time();
  const p = document.createElement('p');
  p.innerText = `Donated: ${addMoney} Tk. to Donate for Flood at Noakhali, Bangladesh at ${dTime} `;
  console.log(p); 
  document.getElementById('history-section').appendChild(p);
   }  

});