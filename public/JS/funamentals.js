/*Fundamentals Code*/
// SHIFT ALT F Tidies page with Prettier

function my_function(p1, p2){
    return p1 * p2;
}

function initialise() {
  //Window Alert
  //window.alert("Hello World");

  document.getElementById("printhere").innerHTML = "Hello World";

  let x = "24";
  let y = "43";
  document.getElementById("datatypes").innerHTML = parseInt(x) + parseInt(y);

  //Booleans and Conditionals
  let xx = 5;
  let yy = 9;
  let zz = 5;
  if (xx != yy) {
    document.getElementById("boolean1").innerHTML = "True! " + x + " != " + y;
  }
  if (xx == zz) {
    document.getElementById("boolean2").innerHTML = "True!";
  }

  //Referring to Array by Index
  let my_array = ["item1", "item2", "item3"];

  document.getElementById("array") = my_array[1];

  my_array[0] = "newitem1";
  document.getElementById("changearray") = my_array[0];
  document.getElementById("fullarray") = my_array;
  document.getElementById("arraylength") = my_array.length;

  let text = "";
  for (i = 0; i < 25; i = i + 5) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("forloop").innerHTML = text;

  document.getElementById("function").innerHTML = my_function(5,4);

  //Debugging
  let a = 20;
  let b = 8;
  let c = a + b;
  console.log("The value of C is: ", c);
}

// Function
function dateTime() {
  document.getElementById("dateTime").innerHTML = Date();
}
