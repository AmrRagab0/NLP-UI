const add_reply_form = document.querySelector('#tickets');
//const review_reply = document.querySelector('#agent_reply');

let queryString = new URLSearchParams(window.location.search);
var user_name = queryString.get("user_name");
var product_name = queryString.get("Product");

let text1 = "Product  (" + product_name + ")  Tickets Summarization:"
document.getElementById("header").innerHTML=(text1);

let tick_num = 2;
let text = "There are a total number of (" + tick_num.toString() + ") tickets to review:"
document.getElementById("tickets_num").innerHTML=(text);

let reviews_obj = [{product:"Car",user:"seif",rate:"3",id:"5",sum:"good"}, {product:"fan",user:"nada",agent:"seif",rate:"2",id:"6",sum:"bad"}];
let replies_obj = [];

let reviews = document.getElementById("tickets");

for (let i=0; i<reviews_obj.length;i++) {
    let li = document.createElement("li");  // create list element

    let username = document.createElement("label");  // for viewing username
    username.innerHTML= reviews_obj[i].user;
    reviews.appendChild(username);
    username.style.display = 'block';

    for (let j = 1; j <= 5; j++){                               // for the rating
        let rating = document.createElement("input");
        rating.setAttribute('type','radio');
        if (reviews_obj[i].rate >= j)
        {
            rating.checked = true;
        }
        else {
            rating.checked = false;
            rating.disabled = true;
        }

        reviews.appendChild(rating);
    }

    let ticket = document.createElement("textarea") // for the review summarization
    ticket.disabled = true;
    ticket.innerHTML= reviews_obj[i].sum;
    ticket.style.display = 'block';
    reviews.appendChild(ticket);

    let reply = document.createElement("textarea");  // for the reply
    reply.setAttribute('id',"reply" + reviews_obj[i].id);
    reply.placeholder = reply.getAttribute('id');
    reviews.appendChild(reply);

    let button = document.createElement("button");  // for the reply button
    button.innerHTML = "Reply";
    button.setAttribute('id', reviews_obj[i].id);
    button.setAttribute('type','click');
    //button.onclick = getClickedID(this.id);
    reply.placeholder = "Enter reply...";
    reviews.appendChild(button);
}

function clicking(e)
{
    let rev_id = "";
    if (e.target.tagName.toLowerCase() == "button") {
        let btn = e.target;
        rev_id = btn.id;

    let rev = reviews_obj.findIndex(object => {
        return object.id == rev_id;
    });
    let txt = "reply" + reviews_obj[rev].id;
    let reply_text = document.getElementById(txt);
    //reply_text.innerHTML=rev_id;
    if (reply_text.value.length != 0)
    {
        //reply_text.placeholder = "haaaaaaaaaa";
        let reply_obj ={
            product:reviews_obj[rev].product,
            user:reviews_obj[rev].user,
            agent:user_name,
            id:rev_id,
            reply:document.getElementById("reply" + reviews_obj[rev].id).value
        }
        replies_obj.push(reply_obj);

        reply_text.disabled = true;
        reply_text.innerHTML= reply_obj.reply;

        let reply_text2 = document.getElementById(reviews_obj[rev].id);
        reply_text2.remove();
    }


}}
add_reply_form.addEventListener('click', clicking);

