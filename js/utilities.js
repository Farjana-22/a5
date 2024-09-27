function getInput(id){
   let input = document.getElementById(id).value;
   let inputNumber =parseFloat(input);
   return inputNumber;
}
function showSection(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
document.getElementById(id).classList.remove('hidden');
}