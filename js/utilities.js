function getInput(id){
   let input = document.getElementById(id).value;
   let inputNumber =parseFloat(input);
   return inputNumber;
}
function getTextInput(id){
    let inputTwo = document.getElementById(id).innerText;
    let inputTwoNumber =parseFloat(inputTwo);
    return inputTwoNumber;
 }
function showSection(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
document.getElementById(id).classList.remove('hidden');
}
function time() {
    var currentdate = new Date(); 
    var month=currentdate.getMonth()
    var timenow = +currentdate.getDate()+"/"
    +(month+1)+"/"
    +currentdate.getFullYear() +"on" 
    + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                return timenow;
}