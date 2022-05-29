const login_form = document.querySelector('#my-form');
const Username_input = document.querySelector("#username");
const Password_input = document.querySelector("#password");

login_form.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(Username_input.value === 'user' && Password_input.value === 'user')
    {
        console.log(Username_input.value);
        window.open("http://localhost:63342/Test/User_form.html?_ijt=19frnpllhq1gv67dfrsrt7iv83&_ij_reload=RELOAD_ON_SAVE","_self")
    } else if(Username_input.value === '' && Password_input.value === '')
    {
        console.log(Username_input.value);
    }
}

