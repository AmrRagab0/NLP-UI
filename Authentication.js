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
        window.open("http://localhost:63342/Test/User_search_form.html?" + para.toString(), "_self")
    } else if(Username_input.value === '' && Password_input.value === '')
    {
        console.log(Username_input.value);
    }
}
