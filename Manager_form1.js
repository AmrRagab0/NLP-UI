let products = ['Chair', 'Table', 'Computer', 'Laptop', 'Fan', 'Minecraft', 'League of Legends', 'game','window','cable','tire','clock'];
let ticket_num = 15;
let tickets_replied = 5;
let percent = Math.floor((tickets_replied / ticket_num)*100);
let lowest_rate = "Fan";
let highest_rate = "Car";
let precision = 0.355;
let recall = 0.55;

if (percent <= 50) {
    document.getElementById('percent_replied').setAttribute('class','card-stats-change-percentage change-negative');
}
else {
    document.getElementById('percent_replied').setAttribute('class','card-stats-change-percentage change-positive');
}

document.getElementById('ticket_num').innerHTML = String(ticket_num);
document.getElementById('ticket_replied').innerHTML = String(tickets_replied);
document.getElementById('percent_replied').innerHTML = String(percent)+"%";
document.getElementById('lowest_rate').innerHTML = lowest_rate;
document.getElementById('highest_rate').innerHTML = highest_rate;
document.getElementById('precision').innerHTML = String(precision);
document.getElementById('recall').innerHTML = String(recall);


let list = document.getElementById("products_list");

let queryString = new URLSearchParams(window.location.search);
var user_name = queryString.get("user_name");

let text1 = "Welcome Manager " + user_name
document.getElementById("welcome").innerHTML=(text1);

products.forEach((item) => {

    let a = document.createElement('a');
    let li = document.createElement("li");
    a.textContent = item;
    var para = new URLSearchParams();
    para.append("Product", item);
    para.append("user_name", user_name);
    a.setAttribute('href',"http://localhost:63342/Agent_form1.js/Manager_form2.html?" + para.toString());

    //li.innerText = item;
    li.appendChild(a);
    list.appendChild(li);
});

function myFunction()
{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("products_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function ElementClicked()
{
    login_form.addEventListener('submit', onSubmit);
}

