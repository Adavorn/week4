function page_load(){
    const msgText = "# page3: page load";

    console.log(msgText.toUpperCase())
}


function btnSubmit(){

    let msgText = "# page3: btnSubmit";

    console.log(msgText.toUpperCase())
  

    /*
        div-display-info:
            1- select div-display-info using document.getElementById
            2- validate if div-display-info is not null or undefined, if so, display element not found message and exit function
    */
   
    const divdisplayinfo = document.getElementById("divdisplayinfo");

    if(divdisplayinfo == null | divdisplayinfo == undefined){
     msgText = "# divdisplayinfo not found"
     console.log(msgText)
     return false; //prevent form submit/exit function
    }

    console.log("-- validate First name")
    /*
        firtname:
            1- select firstname field using document.getElementById
            2- validate if firstname field is not null or undefined, if so, display field not found message and exit function
            3- validate if firstname field is empty, if so, display invalid field entry message and exit function
    */
   
//1.)  
    const txtfirstname = document.getElementById("txtfirstname");
//2.)
    if(txtfirstname == null | txtfirstname == undefined){
        msgText = "# First Name Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgTex
        return false; //prevent form submit/exit function
        
    }
//3.)   
    if(txtfirstname.value.trim().length == 0) {
        msgText = "# First Name Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false; //prevent form submit/exit function
    }

    console.log("-- get last name element --")
    /*
        lastname:
            1- select lastname field using document.getElementById
            2- validate if lastname field is not null or undefined, if so, display invalid field entry message and exit function
    */



    /*
        email:
            1- select email field using document.getElementById
            2- validate if email field is not null or undefined, if so, display field not found message and exit function
            3- validate if email field is empty, if so, display invalid field entry message and exit function
    */




    /*
        comment:
            1- select comment field using document.getElementById
            2- validate if comment field is not null or undefined, if so, display field not found message and exit function
            3- validate if comment field is empty, if so, display invalid field entry message and exit function
    */




    /*
        //- display form field information in log ie: 

            msgText = "form submitted: firstname: " + txtfirstname.value + ", lastname: " + 
            txtlastname.value + ", email: " + txtemail.value + ", comment: ";

            console.log(msgText)
    */




    //divdisplayinfo.innerText = "form submitted"

    /*
        //clear each field value 
        txtfirstname.value = "";
        txtlastname.value = "";
        txtemail.value = "";
        txtcomment.value = "";

        txtfirstname.focus();
    */

        txtfirstname.value = "";

        
    //prevent form post
    return false

}


function btnClear(){
    const msgText = "# page3: btnClear";

    console.log(msgText.toUpperCase())

}

