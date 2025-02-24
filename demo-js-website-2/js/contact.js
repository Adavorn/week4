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

    console.log("-- get error fiedls --")

/*
    select error fields
*/
    
    const errorfirstname = document.getElementById("errorfirstname");

        if(errorfirstname == null | errorfirstname == undefined) {
        msgText = "# errorfirstname not found"
        console.log(msgText)    
        return false; //prevent form submit/ext function 
    }
    
    //hide error lables
        errorfirstname.style.display = "none"

    console.log("-- get first name element --")
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
        divdisplayinfo.innerText = msgText

        txtfirstname.style.borderColor = "initial"

        //show error label
        errorfirstname.style.display = "inline-block"

        //hide error label
       // errorfirstname.style.display = "none"

        //other:
        //add remove element class
        //txtfirstname.style.????? -- border/color/other
        //txtfirstname.classList.remove(".errorfirstname")
        //txtfirstname.classList.add(".errorfirstname")

        return false; //prevent form submit/exit function
        
    }
//3.)   
    if(txtfirstname.value.trim().length == 0) {
        msgText = "# First Name Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false; //prevent form submit/exit function
    }

    console.log("-- get error last name --")


    /*
        lastname:
            1- select lastname field using document.getElementById
            2- validate if lastname field is not null or undefined, if so, display invalid field entry message and exit function
    */

//1.)  
    const txtlastname = document.getElementById("txtlastname");
//2.)
    if(txtlastname == null | txtlastname == undefined){
        msgText = "# Last Name Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgTex
        return false; //prevent form submit/exit function
        
    }

    console.log("-- get email element --")

    /*
        email:
            1- select email field using document.getElementById
            2- validate if email field is not null or undefined, if so, display field not found message and exit function
            3- validate if email field is empty, if so, display invalid field entry message and exit function
    */

//1.)  
const txtemail = document.getElementById("txtemail");
//2.)
    if(txtemail == null | txtemail == undefined){
        msgText = "# Email Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgTex

        erroremail.style.display = "inline-block"


        return false; //prevent form submit/exit function
        
    }
//3.)   
    if(txtemail.value.trim().length == 0) {
        msgText = "# Email Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false; //prevent form submit/exit function
    }
   
   
    //other validation ifemail/string is a valid email pattern
    //or html5 <input type="email"

    console.log("-- get comment element --")
    /*
        comment:
            1- select comment field using document.getElementById
            2- validate if comment field is not null or undefined, if so, display field not found message and exit function
            3- validate if comment field is empty, if so, display invalid field entry message and exit function
    */

//1.)  
const txtcomment = document.getElementById("txtcomment");
//2.)
    if(txtcomment == null | txtcomment == undefined){
        msgText = "# comment Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgTex

        errorcomment.style.display = "inline-block"

        return false; //prevent form submit/exit function
        
    }
//3.)   
    if(txtcomment.value.trim().length == 0) {
        msgText = "# comment Not Found"
        console.log(msgText)
        divdisplayinfo.innerText = msgText
        return false; //prevent form submit/exit function
    }


    /*
            //* display form field information in log ie: 

            msgText = "form submitted: firstname: " + txtfirstname.value + ", lastname: " + 
            txtlastname.value + ", email: " + txtemail.value + ", comment: ";

            console.log(msgText)
    */

   /* msgText = "# form submitted: firstname: " + txtfirstname.value + ", lastname: " + 
    txtlastname.value + ", email: " + txtemail.value + ", comment: " + txtcomment.value ;
   */
  
    //optimize string concat - es6+ template literal string
    msgText = `# form submitted: firstname: ${txtfirstname.value}, lastname: 
    ${txtlastname.value} , email:  ${txtemail.value}, comment: 
    ${txtcomment.value} `
    console.log(msgText)

    msgText = "form submitted"
    divdisplayinfo.innerText = msgText


     //clear each field value 
        txtfirstname.value = ""; 
        txtlastname.value = "";
        txtemail.value = "";
        txtcomment.value = "";
    /*
        txtfirstname.focus();
    */

        txtfirstname.focus();

        
    //prevent form post
    return false

}


function btnClear(){

    const msgText = "# page3: btnClear";

    console.log(msgText.toUpperCase())

    const divdisplayinfo = document.getElementById("divdisplayinfo");
    const txtfirstname = document.getElementById("txtfirstname");
    const txtlastname = document.getElementById("txtlastname");
    const errorfirstname = document.getElementById("errorfirstname");
    const txtemail = document.getElementById("txtemail");
    const txtcomment = document.getElementById("txtcomment");
    
    
    if(divdisplayinfo == null | divdisplayinfo == undefined) {
      msgText = "# divdisplayinfo not found"
      console.log(msgText)    
      return false; //prevent form submit/ext function 
    }
     
    if(errorfirstname == null | errorfirstname == undefined) {
        msgText = "# errorfirstname not found"
        console.log(msgText)    
        return false; //prevent form submit/ext function 
    }
    
    if(txtfirstname == null | txtfirstname == undefined) {
        msgText = "# firstname not found"
        console.log(msgText)    
        divdisplayinfo.innerText = msgText;  
        return false; //prevent form submit/exit function 
    }

    if(txtlastname == null | txtlastname == undefined) {
        msgText = "# lastname not found"
        console.log(msgText)    
        divdisplayinfo.innerText = msgText;  
        return false; //prevent form submit/exit function 
    }

    //hide error lables
    errorfirstname.style.display = "none"
    
    //clear element border color 
    txtfirstname.style.borderColor = "initial" //or black 

    //clear fields 
    divdisplayinfo.innerText = "";
    txtfirstname.value = "";
    txtlastname.value = "";
    txtemail.value = "";
    txtcomment.value = "";

    txtfirstname.focus(); //move keybord cursor to field 

}

