var button = document.getElementById("btn");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

button.addEventListener("click", () => handleClick())

function handleClick() {
   var input1Value = parseInt(input1.value, 10);
   var input2Value = parseInt(input2.value, 10);
   console.log(  input1Value + " + " + input2Value + " = ", input1Value + input2Value);
   //console.log(   2  +  4   );

}
