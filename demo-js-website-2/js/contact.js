function page_load(){
    const msgText = "#page3: page load"

    console.log (msgText.toUpperCase())
}




function btnSubmit(){

    let msgText = "# page2: btnSearch" //string 
    console.log(msgText.toUpperCase());  

    const txtsearch = document.getElementById("txtsearch"); //HTMLElement or null
    const divdisplayinfo = document.getElementById("div-display-info"); //HTMLElement or null


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


    if(txtsearch.value.trim().length == 0) {
        msgText = "# please enter a valid search text"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false //stop onclick and exit function 
    }


    msgText = "# searching for: " + txtsearch.value


    divdisplayinfo.innerText = msgText;

    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //move keyboard cursor to text field

}

function lnkClear(){
    
    let msgText = "# page2: lnkClear"
    console.log(msgText.toUpperCase());


    const txtsearch = document.getElementById("txtsearch")
    const divdisplayinfo = document.getElementById("div-display-info")


   if(txtsearch == null | txtsearch == undefined) {
        msgText = "# txtsearch is null"
        return false
    }
    txtsearch.value = ""; //clear text field
    txtsearch.focus(); //set keyboard focus to the text field

    divdisplayinfo.innerText = ""; //clear div content
    
}