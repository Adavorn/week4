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