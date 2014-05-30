/**
 * Arguments and Parameters Created by puhrome on 5/29/14.
 */
//Parameters allow to use and store different variables
//Arguments can fit into parameters

//Function doesn't need arguments and parameters, can work without

funcName(argument1, argument2);

function funcName(parameter1, parameter2){//function definition
    //code the function runs
}
//1 or 1000 parameters

calcArea(30, 20);//put in arguments
//info sending in
function calcArea(w, h){//storage containers // w=30, h=20
    var area = w * h;//storage bin
    console.log(area);
}

calcArea();//calling the function
calcArea();//calling it more than once, making it repeatable



function dogYears(){//parameters
    var age = 4;
    var dogYears = age * 7;
    console.log ("Sparky is" + dogYears + " years old.")

}
dogYears();//arguments

function dogYears(age){//calls
    var dogYears = age * 7;
    console.log ("Sparky is" + dogYears + " years old.")

}
var age1 = 4;//same thing
dogYears(age1);//Passing info in
dogYears(5);//call function with different results