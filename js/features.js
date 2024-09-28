
document.getElementById('check-donate')
.addEventListener('click',function(){
   document.getElementById('history-section').classList.add('hidden');
   showSection('donation-section');
   
});
document.getElementById('check-history')
.addEventListener('click',function(){
  
   document.getElementById('history-section').classList.remove('hidden');
   document.getElementById('donation-section').classList.add('hidden');
   showSection('history-section');
});