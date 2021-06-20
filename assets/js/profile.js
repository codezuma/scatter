// code for hamburger button
var nav_status = 1;
document.getElementById("ham_icon").onclick = function () {
    var side_box = document.getElementsByClassName("side_box")[0];
    if (nav_status == 1) {
        side_box.style.width = "80px";
        // adjusting nav header
        var app_name = document.getElementsByClassName("app_name")[0];
        app_name.style.display = "none";

        var nav_head = document.getElementsByClassName("nav_head")[0];
        nav_head.style.justifyContent = "center";
        nav_status = 0;

        // adjusting nav item name 
        var nav_item = document.getElementsByClassName("nav_item");
        for (i = 0; i < nav_item.length; i++) {
            nav_item[i].style.justifyContent = "center";
        }
        var nav_item_name = document.getElementsByClassName("nav_item_name");
        for (i = 0; i < nav_item_name.length; i++) {
            nav_item_name[i].style.display = "none";
        }
    } else {
        side_box.style.width = "300px";
        nav_status = 1;
        // adjusting nav header
        var app_name = document.getElementsByClassName("app_name")[0];
        app_name.style.display = "block";

        var nav_head = document.getElementsByClassName("nav_head")[0];
        nav_head.style.justifyContent = "space-between";

        // adjusting nav item name 
        var nav_item = document.getElementsByClassName("nav_item");
        for (i = 0; i < nav_item.length; i++) {
            nav_item[i].style.justifyContent = "left";
        }
        var nav_item_name = document.getElementsByClassName("nav_item_name");
        for (i = 0; i < nav_item_name.length; i++) {
            nav_item_name[i].style.display = "block";
        }
    }
}

// code for profile editing page

//fetching data from storage
var company_details;

function get_data() {
    var json_data = localStorage.getItem("company_details");
    company_details = JSON.parse(json_data);
}
get_data();

// putting data in profile page
var company_name = document.getElementById("company_name");
var mailing_name = document.getElementById("mailing_name");
var phone_number = document.getElementById("phone_number");
var email = document.getElementById("email");
var address = document.getElementById("address");
var website_url = document.getElementById("website_url");
var financial_year = document.getElementById("financial_year");
var profile_picture_box = document.getElementsByClassName("profile_picture_box")[0];

function put_data() {
    company_name.value = company_details.company_name;
    mailing_name.value = company_details.mailing_name;
    phone_number.value = company_details.phone_number;
    email.value = company_details.email;
    address.value = company_details.address;
    website_url.value = company_details.website_url;
    financial_year.value = company_details.financial_year;
    profile_picture_box.style.background = 'url(' + company_details.company_logo + ')';
    profile_picture_box.style.backgroundSize = "cover";
    var profile_icon = document.getElementsByClassName("profile_icon")[0];
    profile_icon.style.background = 'url(' + company_details.company_logo + ')';
    profile_icon.style.backgroundSize = "cover";
}

window.onload = function () {
    put_data();
}

//calling function for editing on clicking on input
function edit_function_call() {
    var button_box = document.getElementsByClassName("button_box")[0];
    var input_ele = document.getElementsByClassName("input_ele");
    for (i = 0; i < input_ele.length; i++) {
        input_ele[i].onclick = function () {
            button_box.style.display = "block";
            alert
        }
    }
}
edit_function_call();

// function to edit data in server 
document.getElementById("save_changes_btn").onclick = function () {
    company_details.company_name = company_name.value;
    company_details.mailing_name = mailing_name.value;
    company_details.phone_number = phone_number.value;
    company_details.email = email.value;
    company_details.address = address.value;
    company_details.website_url = website_url.value;
    company_details.financial_year = financial_year.value;

    var json_company_details = JSON.stringify(company_details);
    localStorage.setItem('company_details', json_company_details);
    location.reload();
}
//discard changes 
document.getElementById("discard_changes_btn").onclick = function () {
    location.reload();
}
// profile_picture funtion
document.getElementById("pp_uplaod_button").onclick = function () {
    var profile_picture_box = document.getElementsByClassName("profile_picture_box")[0];
    var upload_input = document.createElement('input');
    upload_input.type = "file";
    upload_input.click();
    upload_input.accept = "image/*";
    profile_picture_box.style.backgroundSize = "cover";
    upload_input.onchange = function () {
        var freader = new FileReader();
        freader.readAsDataURL(upload_input.files[0]);
        freader.onload = function () {
            profile_picture_box.style.background = 'url(' + freader.result + ')';
            company_details['company_logo'] = freader.result;
            save_data();
        }
    }

}
// fucntion to save data in localstorage
function save_data() {
    var json_company_details = JSON.stringify(company_details);
    localStorage.setItem('company_details', json_company_details);
}







//adding item in purchase list
var add_item_button = document.getElementsByClassName("add_item_button")[0];
document.getElementsByClassName("add_item_button")[0].onclick = function () {
    var purchase_table = document.getElementsByClassName("purchase_table")[0];

    var item_row = document.createElement('div');
    item_row.classList.add('item_row');
    item_row.classList.add('flex');
    purchase_table.appendChild(item_row);


    var serial_number_ele_box = document.createElement('div');
    serial_number_ele_box.classList.add('serial_number_ele_box');
    serial_number_ele_box.classList.add('serial_number_head');
    serial_number_ele_box.classList.add('head');
    item_row.appendChild(serial_number_ele_box);

    var item_description_ele_box = document.createElement('div');
    item_description_ele_box.classList.add('item_description_ele_box');
    item_description_ele_box.classList.add('item_description_head');
    item_description_ele_box.classList.add('head');
    item_row.appendChild(item_description_ele_box);

    var price_head_ele_box = document.createElement('div');
    price_head_ele_box.classList.add('price_head_ele_box');
    price_head_ele_box.classList.add('price_head');
    price_head_ele_box.classList.add('head');
    item_row.appendChild(price_head_ele_box);

    var quantity_head_ele_box = document.createElement('div');
    quantity_head_ele_box.classList.add('quantity_head_ele_box');
    quantity_head_ele_box.classList.add('quantity_head');
    quantity_head_ele_box.classList.add('head');
    item_row.appendChild(quantity_head_ele_box);

    var total_head_ele_box = document.createElement('div');
    total_head_ele_box.classList.add('total_head_ele_box');
    total_head_ele_box.classList.add('total_head');
    total_head_ele_box.classList.add('head');
    item_row.appendChild(total_head_ele_box);

    var delete_head_ele_box = document.createElement('div');
    delete_head_ele_box.classList.add('delete_head_ele_box');
    delete_head_ele_box.classList.add('delete_head');
    delete_head_ele_box.classList.add('head');
    delete_head_ele_box.classList.add('flex');
    item_row.appendChild(delete_head_ele_box);
    delete_head_ele_box.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>';

    var item_description_ele = document.createElement('INPUT');
    item_description_ele.classList.add('item_description_ele');
    item_description_ele.classList.add('purchase_table_input_ele');
    item_description_ele.type = 'text';
    item_description_ele_box.appendChild(item_description_ele);

    var price_head_ele = document.createElement('INPUT');
    price_head_ele.classList.add('price_head_ele');
    price_head_ele.classList.add('purchase_table_input_ele');
    price_head_ele.type = 'number';
    price_head_ele_box.appendChild(price_head_ele)

    var quantity_head_ele = document.createElement('INPUT');
    quantity_head_ele.classList.add('quantity_head_ele');
    quantity_head_ele.classList.add('purchase_table_input_ele');
    quantity_head_ele.type = 'number';
    quantity_head_ele_box.appendChild(quantity_head_ele);

    //fuctions that needs to be updated with the loop
    calculate_total_item();
    delete_purchase_item();
    rearranging_serial_number();
    switch_input();
}


function calculate_total_item() {
    var quantity_elements = document.getElementsByClassName('quantity_head_ele');
    var price_elements = document.getElementsByClassName('price_head_ele');

    for (i = 0; i < quantity_elements.length; i++) {
        quantity_elements[i].oninput = function () {
            var parent_ele = this.parentElement;
            var item_box = parent_ele.parentElement;
            var quantity = item_box.getElementsByClassName('quantity_head_ele')[0];
            var price = item_box.getElementsByClassName('price_head_ele')[0];
            var total = item_box.getElementsByClassName('total_head')[0];
            total.innerHTML = '&#8377; ' + Number(quantity.value) * Number(price.value);
            calculating_total();
        }
        price_elements[i].oninput = function () {
            var parent_ele = this.parentElement;
            var item_box = parent_ele.parentElement;
            var quantity = item_box.getElementsByClassName('quantity_head_ele')[0];
            var price = item_box.getElementsByClassName('price_head_ele')[0];
            var total = item_box.getElementsByClassName('total_head')[0];
            total.innerHTML = '&#8377; ' + Number(quantity.value) * Number(price.value);
            calculating_total();
        }
    }

}

calculate_total_item();

// to delete the purchase item

function delete_purchase_item() {
    var delete_icons = document.getElementsByClassName('delete_head_ele_box');
    for (i = 0; i < delete_icons.length; i++) {
        var parent_ele;
        delete_icons[i].onclick = function () {
            parent_ele = this.parentElement;
            parent_ele.remove();
            rearranging_serial_number();
            calculating_total();
        }
    }

}
delete_purchase_item();

// rearranging the serial numbr of elements after deleting items
function rearranging_serial_number() {
    var item_box = document.getElementsByClassName('item_row');
    for (i = 0; i < item_box.length; i++) {
        var serial_box = item_box[i].getElementsByClassName('serial_number_ele_box')[0];
        serial_box.innerHTML = (i + 1) + '.';
    }
}
rearranging_serial_number();

// set date in date input
function date_fetching() {
    var date_invoice_app = document.getElementsByClassName('date_invoice_app')[0];
    var today_date = new Date();
    date_invoice_app.value = today_date.getFullYear().toString() + '-' + (today_date.getMonth() + 1).toString().padStart(2, 0) + '-' + today_date.getDate().toString().padStart(2, 0);
}
date_fetching();

// switching to next input Element after pressing enter
function switch_input() {

    var input_ele_all = document.getElementsByClassName('purchase_table_input_ele');
    for (j = 0; j < input_ele_all.length; j++) {

        if (j == input_ele_all.length - 1) {
            change_row(input_ele_all[input_ele_all.length - 1], input_ele_all.length);
        } else {
            change_focus(input_ele_all[j], input_ele_all[j + 1]);
        }
    }

}

switch_input();

function change_focus(current, next) {
    current.onfocus = function () {
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
                next.focus();
            }
        }
    }
}
// fucntion to change row
function change_row(current, next) {
    current.addEventListener('focus', add_row);
    var input_ele_all = document.getElementsByClassName('purchase_table_input_ele');

    function add_row() {
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
                add_item_button.click();
                input_ele_all[next].focus();
            }
        }
    }
}
// function to swich ele in form 
function change_input_form() {
    var customer_info_input = document.getElementsByClassName('customer_info_input');
    for (i = 0; i < customer_info_input.length - 2; i++) {
        change_focus(customer_info_input[i], customer_info_input[i + 1]);
    }
}
change_input_form();

document.getElementsByClassName('customer_info_input')[2].onfocus = function () {
    var input_ele_all = document.getElementsByClassName('purchase_table_input_ele');
    document.onkeyup = function (event) {
        if (event.keyCode == 13) {
            document.getElementsByClassName('item_description_ele')[0].focus();
        }
    }
}

// function to save new tax
document.getElementsByClassName('tax_form')[0].onsubmit = function () {
    var tax_name = document.getElementById('tax_name');
    var tax_percentage = document.getElementById('tax_percentage');

    var tax = {
        tax_name: tax_name.value,
        tax_percentage: tax_percentage.value
    }
    var tax_json = JSON.stringify(tax);
    localStorage.setItem('tax_' + tax_name.value, tax_json);
    location.reload();
}

//fetching data of taxes from storage 
function fetch_tax() {
    for (i = 0; i < localStorage.length; i++) {
        var local_storage_key = localStorage.key(i);
        if (local_storage_key.indexOf('tax') != -1) {
            tax_in_app(localStorage.getItem(local_storage_key));
        }
    }
}
fetch_tax();

// put feched data in app 
function tax_in_app(data) {
    var data_object = JSON.parse(data);
    var total_head_box = document.getElementsByClassName('total_head_box')[0];
    var total_data_box = document.getElementsByClassName('total_data_box')[0];
    var total_head_item = document.getElementsByClassName('total_head_item');
    var total_data_item = document.getElementsByClassName('total_data_item');
    var all_taxes_con = document.getElementsByClassName('all_taxes_con')[0];

    var tax_ele = document.createElement('div');
    tax_ele.classList.add('tax_ele');
    tax_ele.classList.add('flex');
    all_taxes_con.appendChild(tax_ele);

    var tax_name = document.createElement('div');
    tax_name.classList.add('tax_name');
    tax_ele.appendChild(tax_name);
    tax_name.innerHTML = data_object.tax_name;

    var tax_name_invoice = document.createElement('div');
    tax_name_invoice.classList.add('total_head_item');
    tax_name_invoice.classList.add('tax_name_invoice');
    total_head_box.insertBefore(tax_name_invoice, total_head_item[total_head_item.length - 1])
    tax_name_invoice.innerHTML = data_object.tax_name + '(' + data_object.tax_percentage + ' %)';
    tax_name_invoice.style.fontSize = '1rem';


    var tax_percentage = document.createElement('div');
    tax_percentage.classList.add('tax_percentage');
    tax_ele.appendChild(tax_percentage);
    tax_percentage.innerHTML = data_object.tax_percentage + '%';

    var tax_percentage_invoice = document.createElement('div');
    tax_percentage_invoice.classList.add('total_data_item');
    tax_percentage_invoice.classList.add('tax_items');
    tax_percentage_invoice.setAttribute('tax_percentage', data_object.tax_percentage);
    total_data_box.insertBefore(tax_percentage_invoice, total_data_item[total_data_item.length - 1])
    tax_percentage_invoice.innerHTML = '&#8377; 0';
    tax_percentage_invoice.style.fontSize = '1rem';




    var delete_tax = document.createElement('div');
    delete_tax.classList.add('delete_tax');
    delete_tax.classList.add('flex');
    tax_ele.appendChild(delete_tax);
    delete_tax.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>';
    delete_tax_data(delete_tax, data_object.tax_name);


}
//function for deleting tax data 
function delete_tax_data(delete_icon, key) {
    var tax_name = 'tax_' + key;
    delete_icon.onclick = function () {
        localStorage.removeItem(tax_name);
        location.reload();
    }
}

//calcul;ating sub total

function calculating_total() {
    var total_head_ele_box = document.getElementsByClassName('total_head_ele_box');
    var sub_total_ele = document.getElementById('sub_total');
    var sub_total = 0;
    var tax_total = 0;

    for (i = 0; i < total_head_ele_box.length; i++) {
        var data = total_head_ele_box[i].innerHTML;

        var splited_data = data.split(' ');
        sub_total = sub_total + Number(splited_data[1]);
    }
    sub_total_ele.innerHTML = '&#8377; ' + sub_total;
    //calcualting tax
    var tax_items = document.getElementsByClassName('tax_items');
    for (i = 0; i < tax_items.length; i++) {
        var tax_percentage = tax_items[i].getAttribute('tax_percentage');
        tax_total = +(sub_total / 100) * tax_percentage;
        tax_items[i].innerHTML = '&#8377; ' + (sub_total / 100) * tax_percentage;
    }
    //final total code
    var final_total = document.getElementById('final_total');
    final_total.innerHTML = '&#8377; ' + (sub_total + tax_total);

}
// save invoice button function 
document.getElementById('save_button').onclick = function () {
    if(confirm('confirm to save invoice')){
    save_invoice();
     
    //changing invoice number number to next
    var inovice_number_data = localStorage.getItem('invoice_number');
    var new_invoice_number = Number(inovice_number_data)+1;
    localStorage.setItem('invoice_number',new_invoice_number);
    update_invoice_number();
    location.reload();
    }
}

// view preview function
document.getElementById('preview_button').onclick = function () {

    save_invoice();
    //saving data to tell invoice app to give only preview and do not download
    sessionStorage.setItem('print', "no");
    open('../assets/invoice.html');

 }

// print invoice function
document.getElementById('print_button').onclick = function () {
    if(window.confirm('confirm to save invoice')){
    
    save_invoice();
       //changing invoice number number to next
       var inovice_number_data = localStorage.getItem('invoice_number');
       var new_invoice_number = Number(inovice_number_data)+1;
       localStorage.setItem('invoice_number',new_invoice_number);
       update_invoice_number();
    
    //saving data to tell invoice app wheather to download the invoice 

    sessionStorage.setItem('print', "yes");
    open('../assets/invoice.html');
    
    location.reload();
    }
}

//to save invoice data into storage
function save_invoice() {
    var customer_name = document.getElementById('customer_name').value;
    var customer_phone_number = document.getElementById('customer_phone_number').value;
    var customer_Email = document.getElementById('customer_Email').value;
    var invoice_number = document.getElementsByClassName('invoice_number')[0].innerHTML;
    var date_invoice_app = document.getElementsByClassName('date_invoice_app')[0].value;
    var item_description_ele = document.getElementsByClassName('item_description_ele');
    var price_head_ele = document.getElementsByClassName('price_head_ele');
    var quantity_head_ele = document.getElementsByClassName('quantity_head_ele');
    var total_head_ele_box = document.getElementsByClassName('total_head_ele_box');
    var sub_total = document.getElementById('sub_total').innerHTML;
    var tax_items = document.getElementsByClassName('tax_items');
    var tax_name_invoice = document.getElementsByClassName('tax_name_invoice');
    var paid_amount = document.getElementById('paid_balance').value;
    var due_amount_ele = document.getElementById('due_amount');
    var due_amount_split = due_amount_ele.innerHTML.split(' ');
    var due_amount = due_amount_split[1];


    var final_total = document.getElementById('final_total').innerHTML;

    var item_description_array = [];
    for (i = 0; i < item_description_ele.length; i++) {
        item_description_array[i] = item_description_ele[i].value;
    }


    var quantity_ele_array = [];
    for (i = 0; i < quantity_head_ele.length; i++) {
        quantity_ele_array[i] = quantity_head_ele[i].value;
    }


    var price_ele_array = [];
    for (i = 0; i < price_head_ele.length; i++) {
        price_ele_array[i] = price_head_ele[i].value;
    }

    var total_ele_array = [];
    for (i = 0; i < total_head_ele_box.length; i++) {
        total_ele_array[i] = total_head_ele_box[i].innerHTML;
    }

    var tax_items_array = [];
    for (i = 0; i < tax_items.length; i++) {
        tax_items_array[i] = tax_items[i].innerHTML;
    }

    var tax_name_array = [];
    for (i = 0; i < tax_name_invoice.length; i++) {
        tax_name_array[i] = tax_name_invoice[i].innerHTML;
    }

    var invoice_details = {
        customer_name: customer_name,
        customer_phone_number: customer_phone_number,
        customer_Email: customer_Email,
        invoice_number: invoice_number,
        date_invoice_app: date_invoice_app,
        item_description_array: item_description_array,
        price_ele_array: price_ele_array,
        quantity_ele_array: quantity_ele_array,
        total_ele_array: total_ele_array,
        sub_total: sub_total,
        tax_items_array: tax_items_array,
        tax_name_array: tax_name_array,
        final_total: final_total,
        paid_amount:paid_amount,
        due_amount:due_amount
    };
    var json_invoice = JSON.stringify(invoice_details);
    localStorage.setItem('invoice_number_' + invoice_number, json_invoice);
    sessionStorage.setItem('current_invoice', json_invoice)
    show_invoice_home();
}

//calling funtion by clicking on tabs buttons present on side bar
var scroll_amt = document.getElementsByClassName('dashboard_item')[1].offsetHeight;
var main_dashboard_box = document.getElementsByClassName('main_dashboard_box')[0];
document.getElementById('home_tab_button').onclick = function () {
    scroll_main_dashboard_box(0);
}
document.getElementById('invoice_tab_button').onclick = function () {
    var tab_box = document.getElementById('invoice_app');
    scroll_main_dashboard_box(tab_box);
}
document.getElementById('tax_tab_button').onclick = function () {
    var tab_box = document.getElementById('tax_app');
    scroll_main_dashboard_box(tab_box);
}
document.getElementById('company_tab_button').onclick = function () {
    var tab_box = document.getElementById('company_details_page');
    scroll_main_dashboard_box(tab_box);
}


//function to switch tabs in app  
function scroll_main_dashboard_box(current_box) {
    var dashboard_item = document.getElementsByClassName('dashboard_item');
    for (i = 0; i < dashboard_item.length; i++) {
        dashboard_item[i].style.display = "none";
    }
    current_box.style.display = "block";
}

//function to calculate due amount of invoice
document.getElementById("paid_balance").oninput = function () {
    var total_amount_ele = document.getElementById('final_total');
    var due_amount_ele = document.getElementById('due_amount');

    //spliting element data to get due amount
    var total_amount_split = total_amount_ele.innerHTML.split(' ');
    due_amount_ele.innerHTML = '&#8377; ' + (Number(total_amount_split[1])-(Number(this.value)));

}
// function to chage color of due amount based on paid
document.getElementById('paid_balance').onfocus = function () {
    var due_amount_ele = document.getElementById('due_amount');
    var due_balance_head = document.getElementById('due_balance_head');
   
    this.onkeypress = function (event) {
        if (event.keyCode == 13) {
            //changing color of due amount based on amount
            var due_amount_split = due_amount_ele.innerHTML.split(' ');
            var due_amount = due_amount_split[1];
            alert(Number(due_amount));

            if (Number(due_amount) === 0) {
                due_balance_head.style.color = ' var(--green)';
                due_amount_ele.style.color = ' var(--green)';
            }

            if (Number(due_amount) > 0) {
                due_balance_head.style.color = ' var(--red)';
                due_amount_ele.style.color = ' var(--red)';
            }

            if (Number(due_amount) < 0) {
              alert('paid amount should be less than totla amount')
            }
            return false;

        }
    }
}

// function to update invoice number in app
function update_invoice_number(){
    var invoice_number_ele = document.getElementById('invoice_number');

    var inovice_number_data = localStorage.getItem('invoice_number');
    if(inovice_number_data==null){
        localStorage.setItem('invoice_number',1);
    }
    else{     
        invoice_number_ele.innerHTML = '# '+inovice_number_data;
    }
}
update_invoice_number();

//fetching data from storage and showing it in home app
function show_invoice_home(){
    var invoice_table = document.getElementsByClassName('invoice_table')[0];

    // taking data from storage
    for(i=0;i<localStorage.length;i++){
        if(localStorage.key(i).match('invoice_number_#')){
           var invoice_data_json =  localStorage.getItem(localStorage.key(i));
           var invoice_data =  JSON.parse(invoice_data_json);

           // creating elements based on data 
           var table_item =  document.createElement('div');
           table_item.classList.add('table_items');
           table_item.classList.add('flex');
           invoice_table.appendChild(table_item);

           var invoice_number =  document.createElement('div');
           invoice_number.classList.add('home_invoice_number_head');
           invoice_number.classList.add('home_item_invoice_number');
           invoice_number.innerHTML = invoice_data.invoice_number;
           table_item.appendChild(invoice_number);

           var invoice_date =  document.createElement('div');
           invoice_date.classList.add('home_invoice_date_head');
           invoice_date.classList.add('home_item_invoice_date');
           invoice_date.innerHTML = invoice_data.date_invoice_app;
           table_item.appendChild(invoice_date);

           var invoice_customer_name =  document.createElement('div');
           invoice_customer_name.classList.add('home_item_invoice_customer');
           invoice_customer_name.classList.add('home_invoice_customer_head');
           invoice_customer_name.innerHTML = invoice_data.customer_name;
           table_item.appendChild(invoice_customer_name); 

           var invoice_amount =  document.createElement('div');
           invoice_amount.classList.add('home_invoice_date_head');
           invoice_amount.classList.add('home_item_invoice_date');
           invoice_amount.innerHTML = invoice_data.final_total;
           table_item.appendChild(invoice_amount);

           var invoice_status =  document.createElement('div');
           invoice_status.classList.add('home_item_invoice_status');
           invoice_status.classList.add('home_invoice_status_head');
           var status_li = document.createElement('li');
           invoice_status.appendChild(status_li);
           table_item.appendChild(invoice_status);

           //code for calculating the staus of invoice
           var due_amount = invoice_data.due_amount;
           var final_amount_ele = invoice_data.final_total;
           var final_amount_split = final_amount_ele.split(' ');
           var final_amount = final_amount_split[1];

           if(Number(due_amount)===0){
               status_li.innerHTML = 'paid';
               status_li.style.backgroundColor = 'var(--green_bg)';
               status_li.style.color = 'var(--green-text)';
           }
           if(Number(due_amount)>0){
               status_li.innerHTML = 'due';
               status_li.style.backgroundColor = 'var(--orange_bg)';
               status_li.style.color = 'var(--orange_text)';
           }
           if(Number(due_amount)==Number(final_amount)){
               status_li.innerHTML = 'pending';
               status_li.style.backgroundColor = 'var(--red_bg)';
               status_li.style.color = 'var(--red)';           }

        }
    }
}
show_invoice_home();


// invoice search bar 
document.getElementById('invoice_search_bar').onkeypress = function(event){
    if(event.keyCode==13){
        var table = document.getElementsByClassName('invoice_table')[0];
        var table_items =  table.getElementsByClassName('table_items');
            for(i=0;i<table_items.length;i++){  
           
           //selectiing wheather it should go to anme search or invoice numbre search
           if(isNaN(this.value)){

            //search with customer name
            var customer_name = table_items[i].getElementsByClassName('home_item_invoice_customer')[0].innerHTML;
            if(customer_name.match(this.value)){
                table_items[i].style.display = 'flex';
            }
            else{
                table_items[i].style.display = 'none';
            }

        }

        else{

           // search with invoice number 
            var invoice_number = table_items[i].getElementsByClassName('home_item_invoice_number')[0].innerHTML;  

            if(invoice_number.match(this.value)){
                table_items[i].style.display = 'flex';
            }
            
            else{
                table_items[i].style.display = 'none';
            }
        }
     }

    }
}

function demo(){
 var a="5";
 alert(isNaN(a));
}
demo();