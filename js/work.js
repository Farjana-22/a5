//for noakhali
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
  let p = document.createElement('p');
  p.innerText = `Donated: ${addMoney} Tk. to Donate for Flood at Noakhali, Bangladesh at ${dTime} `;
  document.getElementById('history-section').appendChild(p);
   document.getElementById('my_modal_1').showModal();
   }  

});
//for feni
document.getElementById('button-donate')
.addEventListener('click',function(event){
   event.preventDefault();
   let money=getInput('donate-feni');
   let bal1 = getTextInput('balance');
   if(isNaN(money)||(money>bal1)){
    alert('Invalid amount');
    return;}
   else {
    let newBalanceInWallet1 =bal1-money;
  document.getElementById('balance').innerText=`${newBalanceInWallet1} BDT`;
  let amount1= getTextInput('donate-button-amount');
  let newBalance1 =amount1+money;
  document.getElementById('button-donate-amount').innerText=`${newBalance1} BDT`;
  let donTime=time();
  let p1 = document.createElement('p');
  p1.innerText = `Donated: ${money} Tk. to Donate for Flood Relief in Feni,Bangladesh at ${donTime} `;
  console.log(p1); 
  document.getElementById('history-section').appendChild(p1);
  document.getElementById('my_modal_2').showModal();
   }  

});
//for qouta 
document.getElementById('donation-button')
.addEventListener('click',function(event){
   event.preventDefault();
   let money1=getInput('donate-quota');
   let bal2 = getTextInput('balance');
   if(isNaN(money1)||(money1>bal2)){
    alert('Invalid amount');
    return;}
   else {
    let newBalanceInWallet2 =bal2-money1;
  document.getElementById('balance').innerText=`${newBalanceInWallet2} BDT`;
  let amount2= getTextInput('donation-button-amount');
  let newBalance2 =amount2+money1;
  document.getElementById('donation-button-amount').innerText=`${newBalance2} BDT`;
  let donateTime=time();
  let p2 = document.createElement('p');
  p2.innerText = `Donated: ${money1} Tk. to Donate for  Aid for Injured in the Quota Movement at ${donateTime} `;
  console.log(p2); 
  document.getElementById('history-section').appendChild(p2);
  document.getElementById('my_modal_3').showModal();
   }  

});