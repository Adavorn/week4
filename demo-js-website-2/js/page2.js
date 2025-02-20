//javascript single line comment

/*
javascript multi line 
comment
*/

function page_load(){

    console.log("# page2: page_load");
}

function lnk_dom_demo1()
{
    //Js DOM- select an html element in the page the manipulate element: update element text

    let msgtext = "<b># Intro to Js DOM</b>"

    //document = global js object ie: DOM
    //getElementById = select html element by id
    //innerText = update text
    //innerHTML = update html : ie formating
    //document.getElementById("div-display-info").innerText = msgtext;
    document.getElementById("div-display-info").innerHTML = msgtext;
}

function lnk_dom_demo2()
{
    //Js DOM- select an html element in the page the manipulate element: update element text

    let msgtext = "<b># Intro to Js DOM #2</b>" //data type - string

    console.log(msgtext);

    //#data type object HTMLelement object - has different structer then string,boolean, number
    //# learn more about different object types ie: w3schools or online refrences
    //# ie: HTMLElement object -- different structers
    //# Json object -- different structers
   
    const eleDivInfo = document.getElementById("div-display-info"); //data type = HTMLelement or null
 
    //# if statement - make a decsion in a code - ture/false
    //# if evaluates two values, if true call true code else if false call false code
    //# if (logical expression) = if a == b or if != bor if a > b etc..
    if(eleDivInfo == null){
        //true code
        //# div-display-info not found ie: null
        console.log(" #div-display-info not found")
    }
    else
    {
        //false code
        //#div-display-info not found ie: null
        eleDivInfo.innerText = msgtext;
    }
}

function lnk_dom_demo3()
{
    let msgText = "# page2 : link_dom_demo_3"

    console.log(msgText)

    //# selct text element
    //# selct div element
    const txtsearch = document.getElementById("txtsearch"); //htmlElement object
    const eleDivInfo = document.getElementById("div-display-info"); //htmlElement object

    //# check if text and div elemnet is null
    if (txtsearch == null) {

        console.log("# txtsearch field not found")
        return false//cancel mouse click
    }
    

    if (eleDivInfo == null) {
        
        console.log("# div-display-info not found")
        return false//cancel mouse click
    }

    //check if txtsearch field is empty
    if (txtsearch.value.trim().length == 0) {

        msgText = "# please enter a text to search"
        
        console.log(msgText)
        eleDivInfo.innerText = msgText;
        return false//cancel mouse click 
    }


    //continue if no error

    //# display search text info in div

    //txt.search.value = retrieve text entered in text field
    msgText = "txtsearch:" + txtsearch.value;

    //eleDivInfo.innerHTML = msgText;
    eleDivInfo.innerHTML = msgText;

    //clear atext
    txtsearch.value = "";
}

function btnSearch(){

    let msgText = "# page2: btnSearch" //string 
    console.log(msgText.toUpperCase());  

    //select text field and display div using document.getElementById
    const txtsearch = document.getElementById("txtsearch"); //HTMLElement or null
    const divdisplayinfo = document.getElementById("div-display-info"); //HTMLElement or null

    //validate if text field and display div is null, if so and exit function
    if(txtsearch == null){
        msgText = "# txtsearch field not found"
        console.log(msgText)
        return false //stop onclick and exit function 
    }

    if(divdisplayinfo == null){
        msgText = "# divdisplayinfo field not found"
        console.log(msgText)
        return false //stop onclick and exit function 
    }

    //######## other if condition examples ####
    //if(txtsearch != null) -> not null 
    //if(txtsearch == null ! divdisplayinfo == null)  -> or 
    //if(txtsearch == null & divdisplayinfo == null) -> or

    //validate if text field is empty, if so exit function
    if(txtsearch.value.trim().length == 0) {
        msgText = "# please enter a valid search text"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false //stop onclick and exit function 
    }

    //display search text in display div
    msgText = "# searching for: " + txtsearch.value

    //divdisplayinfo.innerHTML = "<br>" + msgText + "</b>"
    divdisplayinfo.innerText = msgText;

    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //move keyboard cursor to text field

}

function lnkClear(){
    
    let msgText = "# page2: lnkClear"
    console.log(msgText.toUpperCase());

    //select text field and display div using document.getElementById
    const txtsearch = document.getElementById("txtsearch")
    const divdisplayinfo = document.getElementById("div-display-info")

    //validate if text field and display div is null, if so and exit function
    //-- undefined = field was not defined or made
    //-- null - field was definded and does not have a value
    //undefined variable is avariable that was not created

    if(txtsearch == null | txtsearch == undefined) {
        msgText = "# txtsearch is null"
        return false
    }
    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //set keyboard focus to the text field
    
}