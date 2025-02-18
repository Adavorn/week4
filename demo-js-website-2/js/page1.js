//javascript single line comment

/*
javascript multi line 
comment
*/

//global or page level variables - defined outside a function access by any function

function display_info(){
    console.log("# Page1 - Display Info");
}

function page_load(){
    console.log("# Page1 - Page Load")
    display_info()
}

function demo_link1() {
    console.log("# Page1 - Link1");
    alert("# Page1 - Link1")
}

function demo_button1()
{
    console.log("# Page1 - Button1")
    alert("# Page1 - Button1")
}

function demo_variables1(){

    console.log("# Page1 - variables1")
    //alert("# Page1 - variables1")

    //variable - in memory data, to uses later in your code
    //data type - type of data stored in memory -  string, number, boolean, true/false, objects, other

    //define memory varrible to be used later in code
    //global variables - accessed by other functions
    //global or page level variables -defined outside a function ,accessed by any function
    //function variables - access only by current function
    
    var1 = "intro to javascript"; //data-type - string
    var_2 = "6"; //data-type - string "text inside double quotes counts as string"
    var2 = 6 //data-type - number integer
    var3 = 6.1 //data-type - number floating point including decimal
    var4 = true //data-type boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number

    //when function end - memory variable is removed from memory

    //use variable
    console.log(var1)

    //combine string variables = concatination
    console.log(var1 + var_2)

    //combine string and number = concatination
    console.log(var1 + var2)

    //combine string and number = concatination
    console.log(var1 + " " + var2)

    //combine variables = concatination
    console.log(var1,var2,var3)
    
    //update variable
    var3 = 6.3 //data-type = float, can update to any other data type

    //combine variables = concatination
    console.log(var1,var2,var3)

}

function demo_variables2(){
    console.log("# Page1 - variables2")
    //alert("# Page1 - variables2")

    //variable - in memory data, to uses later in your code
    //data type - type of data stored in memory -  string, number, boolean, true/false, objects, other

    //define memory varrible to be used later in code
    //global variables - accessed by other functions
    //global or page level variables -defined outside a function ,accessed by any function
    //function variables - access only by current function
    
    //var - javascript es1-4 1997-2008
    //var - define a local/function in memory variable
    //not including var keyword is same as var
    var var1 = "intro to javascript"; //data-type - string
    var var_2 = "6"; //data-type - string "text inside double quotes counts as string"
    var var2 = 6 //data-type - number integer
    var var3 = 6.1 //data-type - number floating point including decimal
    var var4 = true //data-type boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number

    //when function end - memory variable is removed from memory

    //use variable
    console.log(var1)

    //combine string variables = concatination
    console.log(var1 + var_2)

    //combine string and number = concatination
    console.log(var1 + var2)

    //combine string and number = concatination
    console.log(var1 + " " + var2)

    //combine variables = concatination
    console.log(var1,var2,var3)
    
    //update variable
    var3 = 6.3 //data-type = float, can update to any other data type

    //combine variables = concatination
    console.log(var1,var2,var3)


}

function demo_variables3(){

    console.log("# Page1 - variables3")
    //alert("# Page1 - variables3")

    //variable - in memory data, to uses later in your code
    //data type - type of data stored in memory -  string, number, boolean, true/false, objects, other

    //define memory varrible to be used later in code
    //global variables - accessed by other functions
    //global or page level variables -defined outside a function ,accessed by any function
    //function variables - access only by current function
    
    //let - javascript es5+ 2009+
    //let - define a local/function in memory variable
    //let - reccomended: more optimized memory variable
    let var1 = "intro to javascript"; //data-type - string
    let var_2 = "6"; //data-type - string "text inside double quotes counts as string"
    let var2 = 6 //data-type - number integer
    let var3 = 6.1 //data-type - number floating point including decimal
    let var4 = true //data-type boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number

    //when function end - memory variable is removed from memory

    //use variable
    console.log(var1)

    //combine string variables = concatination
    console.log(var1 + var_2)

    //combine string and number = concatination
    console.log(var1 + var2)

    //combine string and number = concatination
    console.log(var1 + " " + var2)

    //combine variables = concatination
    console.log(var1,var2,var3)
    
    //const - readonly, not to be updated
    //varibles const can be updated but not reccomended to update
    //update variable
    //javascript does not generate an error if const are updated
    var3 = 6.3 //data-type = float, can update to any other data type

    //combine variables = concatination
    console.log(var1,var2,var3)

}

function demo_variables4(){

    console.log("# Page1 - variables4")
    //alert("# Page1 - variables4")

    //variable - in memory data, to uses later in your code
    //data type - type of data stored in memory -  string, number, boolean, true/false, objects, other

    //define memory varrible to be used later in code
    //global variables - accessed by other functions
    //global or page level variables -defined outside a function ,accessed by any function
    //function variables - access only by current function
    
    //const - javascript es5+ 2009+
    //const - define a local/function in memory variable that should not be updated when defined
    //const - reccomended: define and not update const variavle later in code
    //const = fixed and readonly when assigned
    const var1 = "intro to javascript"; //data-type - string
    const var_2 = "6"; //data-type - string "text inside double quotes counts as string"
    const var2 = 6 //data-type - number integer
    const var3 = 6.1 //data-type - number floating point including decimal
    const var4 = true //data-type boolean - true/false

    //other data types - boolean = true/false, object

    //can convert string to number

    //when function end - memory variable is removed from memory

    //use variable
    console.log(var1)

    //combine string variables = concatination
    console.log(var1 + var_2)

    //combine string and number = concatination
    console.log(var1 + var2)

    //combine string and number = concatination
    console.log(var1 + " " + var2)

    //combine variables = concatination
    console.log(var1,var2,var3)
    
    //const - read only, not to be updated
    //varibles const can be updated but not reccomended to update
    //update variable
    //javascript does not generate an error if const are updated
    var3 = 6.3 //data-type = float, can update to any other data type

    //combine variables = concatination
    console.log(var1,var2,var3)

}

function demo_variables_numbers(){

    //const - readonly fixed
    const _function_name = "demo_variables_numbers"

    //var - es4
    var num1 = 5; //integer

    //let - es5+
    let num2 = 15.1; //floating point number including decimal

    let num3 = "20.1" //string
    
    let num4 = 25 //number intger

    //convert number to string
    let string_num4 = num4.toString()

    //defining and assigning values in 1 statement
    //const total = (num1 + num2 + num3)
   
    //convert string to float
    const total = (num1 + num2 + parseFloat(num3))

    //convert string to uppercase
    console.log(_function_name.toUpperCase())

    //concatination
    console.log("total: " + total)
    console.log("total: " , total)
    console.log("total 2 fixed decimal point:" , total.toFixed(2))

}