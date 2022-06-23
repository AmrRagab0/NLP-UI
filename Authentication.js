const login_form = document.querySelector('#my-form');
const Username_input = document.querySelector("#username");
const Password_input = document.querySelector("#password");

login_form.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(Username_input.value === 'user' && Password_input.value === 'user')
    {
        var para = new URLSearchParams();
        para.append("user_name", Username_input.value)
        window.open("http://localhost:63342/NLP%20Project/User_search_form.html?" + para.toString(), "_self")
    } else if(Username_input.value === 'agent' && Password_input.value === 'agent')
    {
        var para = new URLSearchParams();
        para.append("user_name", Username_input.value)
        window.open("http://localhost:63342/NLP%20Project/Agent_form1.html?" + para.toString(), "_self")
    } else if(Username_input.value === 'manager' && Password_input.value === 'manager')
    {
        var para = new URLSearchParams();
        para.append("user_name", Username_input.value)
        window.open("http://localhost:63342/Agent_form1.js/Manager_form1.html?" + para.toString(), "_self")
    }
}
