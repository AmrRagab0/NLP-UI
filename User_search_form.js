function myFunction()
{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

let prod_list=['Chair', 'Table', 'Computer', 'Laptop', 'Fan', 'Minecraft', 'League of Legends', 'game','window','cable','tire','clock']

const user_search_form = document.querySelector('#form-2');
const my_list = document.getElementById('myUL')

let queryString = new URLSearchParams(window.location.search);
var user_name = queryString.get("user_name");

let text1 = "Welcome User " + user_name
document.getElementById("welcome").innerHTML=(text1);

prod_list.forEach((item) =>{
    let a = document.createElement('a');
    let li = document.createElement("li");
    a.textContent = item;
    var para = new URLSearchParams();
    para.append("Product", item)
    para.append("user_name", user_name)
    a.setAttribute('href', "http://localhost:63342/NLP%20Project/Product%20View%20User.html?" + para.toString())
    li.appendChild(a);
    my_list.appendChild(li);
})

