//javascript single line comment

/*
javascript multi line 
comment
*/

function page_load(){

    console.log("# page2: page_load");
}

function lnk_dom_demo1(){
    //Js DOM- select an html element in the page the manipulate element: update element text

    let msgtext = "# Intro to Js DOM"

    //document = global js object ie: DOM
    //getElementById = select html element by id
    document.getElementById("div-display-info").innerText = msgtext;
}