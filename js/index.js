var next_buttons = document.getElementsByClassName("next_buttom");
var back_buttons = document.getElementsByClassName("back_button");
var inner_ver_bar = document.getElementsByClassName("inner_ver_bar")[0];
var icon_circle = document.getElementsByClassName("icon_circle");
var nav_item = document.getElementsByClassName("nav_item");
// declaration of input elements in variable
var company_name = document.getElementById("company_name");
var mailing_name = document.getElementById("mailing_name");
var phone_number = document.getElementById("phone_number");
var email =document.getElementById("email");
var address =document.getElementById("address");
var website_url =document.getElementById("website_url");
var financial_year = document.getElementById("financial_year");
var stock_type = "Account_only";

function scroll_innerbox() {
    var input_section = document.getElementsByClassName("input_section")[0];
    var box_items = document.getElementById("first_box");
    var scroll_amt = box_items.offsetHeight;
    var i;
    for (i = 0; i < 3; i++) {
        scroll_box(next_buttons[i], input_section, scroll_amt * (i + 1), i);
        scroll_box_up(back_buttons[i], input_section, scroll_amt * (i), i);
    }
}
scroll_innerbox();

function scroll_box(button, element, amt, i) {
    button.onclick = function () {
        element.scroll(0, amt);
        inner_ver_bar.style.height = ((i + 1) * 33.33) + "%";
        icon_circle[i + 1].style.background = "var(--green)";

    }
}

function scroll_box_up(buttons, element, amt, i) {
    buttons.onclick = function () {
        element.scroll(0, amt);
        inner_ver_bar.style.height = ((i) * 33.33) + "%";
        icon_circle[i + 1].style.background = "var(--grey_color)";
    }
}
// Enter button next shift code
var input_buttons = document.getElementsByTagName("input");

function demo() {
    for (i = 1; i < input_buttons.length; i++) {
        enter_key_press(input_buttons[i-1], input_buttons[i],i);
    }    
}
demo();

function enter_key_press(current, next,i) {
    current.onfocus = function () {
        document.onkeypress = function (event) {
            if (event.keyCode == 13) {
                next.focus();
                if(i%2==0){
                    var button_number = (i/2-1)
                    next_buttons[button_number].click();
                }
            }
        }
    }

}
document.getElementsByClassName("radio_con")[0].onclick = function(){
   var radio_button = document.getElementById("radio_1");
   radio_button.click();
   if(radio_button.checked==true){
     this.style.background = "var(--green)";
     document.getElementsByClassName("radio_con")[1].style.background = "var(--secondary_font_color)";
   }
}

document.getElementsByClassName("radio_con")[1].onclick = function(){
   var radio_button = document.getElementById("radio_2");
   radio_button.click();
   if(radio_button.checked==true){
    this.style.background = "var(--green)";
    document.getElementsByClassName("radio_con")[0].style.background = "var(--secondary_font_color)";

}
}
// disableing next buttons 
for(i=0;i<next_buttons.length;i++){
    next_buttons[i].style.display = "none";
}
//disabling tab button functio 


//fucntion to stop sfiting to next ele
mailing_name.onfocus = function(){
    document.onkeypress = function(event){
        if(event.keyCode==13){
        }

    }
}
// mailing name verification
mailing_name.oninput = function(){
  var parent_ele = this.parentElement;
    if(mailing_name.value.indexOf(company_name.value)!=-1){
        if(mailing_name.value.indexOf("govt.lmd") != -1||mailing_name.value.indexOf("pvt.lmd") !=-1){
            parent_ele.getElementsByClassName("warn")[0].innerHTML = "";
          next_buttons[0].style.display = "block";
          document.onkeypress = function(event){
              if(event.keyCode==13){
                  next_buttons[0].click();
                  phone_number.focus();
              }
          }
        }
        else{
            parent_ele.getElementsByClassName("warn")[0].innerHTML = " Mailing name should contain pvt.lmd or govt.lmd";
        }
    }
    else{
        parent_ele.getElementsByClassName("warn")[0].innerHTML = "Mailing name should contain comapny name";
    }
}
// code for email verification
email.onfocus = function(){
    document.onkeypress = function(event){
        if(event.keyCode==13){
        }

    }
}
email.oninput = function(){
  var parent_ele = email.parentElement;
    if(email.value.indexOf("@")!=-1){
        if(email.value.indexOf("gmail") != -1||email.value.indexOf("yahoo") !=-1){
          parent_ele.getElementsByClassName("warn")[0].innerHTML = "";
          next_buttons[1].style.display = "block";
          document.onkeypress = function(event){
            if(event.keyCode==13){
                next_buttons[1].click();
                address.focus();

            }
    
        }
        }
        else{
            parent_ele.getElementsByClassName("warn")[0].innerHTML = "Email should contain gmail or yahoo.com";
        }
    }
    else{
        parent_ele.getElementsByClassName("warn")[0].innerHTML = "Email should contain @ symbol";
    }
}
// code for financial year verification
financial_year.oninput = function(){
    if(financial_year.value.length == 4){  
          next_buttons[3].style.display = "block";
        }
        
    }
// code to save stock type 
document.getElementById("radio_1").onclick = function(){
    stock_type=this.value;
}
document.getElementById("radio_2").onclick = function(){
    stock_type=this.value;
}

// code to save data in local storage
document.getElementById("submit_button").onclick=function(){
    var comapny_details = {
        company_name:company_name.value,
        mailing_name:mailing_name.value,
        phone_number:phone_number.value,
        email:email.value,
        address:address.value,
        website_url:website_url.value,
        financial_year:financial_year.value,
        stock_type:stock_type
    }
    var json_company_details = JSON.stringify(comapny_details);
    localStorage.setItem("company_details",json_company_details);
    location.replace('assets/profile.html');
}

// replacing url if company is present
function check(){
    if(localStorage.getItem('company_details')== null){
      
      console.log('company does not exist');
    }
    else{
        console.log('company does  exist');

        location.replace('assets/profile.html');
    }
}

check();

