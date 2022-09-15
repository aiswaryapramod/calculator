//to view content inside result wherever we click on the button
function displayNum(num){
    console.log(result);
    Result.value += num
}
function allclear(){
    result.value = ""
}
function evalExp(){
result.value = eval(result.value)
}
function lastDigit(){
   result.value= result.value.slice(0,-1)
}