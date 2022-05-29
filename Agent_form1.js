let products = ['chair', 'table', 'car', 'fan','game','window','cable','tire','clock'];
let list = document.getElementById("products_list");

let queryString = new URLSearchParams(window.location.search);
var user_name = queryString.get("user_name");

let text1 = "Welcome Agent " + user_name
document.getElementById("welcome").innerHTML=(text1);

products.forEach((item) => {

    let a = document.createElement('a');
    let li = document.createElement("li");
    a.textContent = item;
    var para = new URLSearchParams();
    para.append("Product", item);
    para.append("user_name", user_name);
    a.setAttribute('href',"http://localhost:63342/Test/Agent_form2.html?" + para.toString());

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

