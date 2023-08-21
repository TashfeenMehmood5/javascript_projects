
var x,y;

function addition(x,y)
{

    
    return x+y;
    
}

function subtraction(x,y)
{
    return x-y;
    
}


function multiplication(x,y)
{
    return x*y;
    
}

function division(x,y)
{


    if(y!=0){
    return x/y;
}
else{
    return ("is not divisible by 0");
}
    
}

var no_1= parseFloat(prompt("enter value"));
var no_2 = parseFloat(prompt("enter value")); 


console.log("Select operation you want to perfrom\naddition.\nsubtraction.\nmultiplication.\ndivision ");


const operation = parseFloat(prompt("enter your choice out of these 1 2 3 4"));

let result;

switch(operation)
{

    case 1:
        result = addition(no_1 , no_2);
      break;

    case 2:
       result = subtraction(no_1 , no_2); 
      break;

    case 3:
        result = multiplication(no_1 , no_2);
      break;

    case 4:
        result = division(no_1 , no_2) 
      break;

    default:
        console.log("invalid entry");
      
  }
  console.log("result: ", result);

