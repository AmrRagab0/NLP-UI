const add_reply_form = document.querySelector('#tickets');
//const review_reply = document.querySelector('#agent_reply');

let queryString = new URLSearchParams(window.location.search);
var user_name = queryString.get("user_name");
var product_name = queryString.get("Product");

let text1 = "Product  (" + product_name + ")  Tickets Summarization:"
document.getElementById("header").innerHTML=(text1);
document.getElementById("header").style.display = 'block';

let tick_num = 2;
let text = "There are a total number of (" + tick_num.toString() + ") tickets to review:"
document.getElementById("tickets_num").innerHTML=(text);

let reviews_obj = [{product:"Car",user:"seif",rate:"3",id:"5",sum:"good"}, {product:"fan",user:"nada",agent:"seif",rate:"2",id:"6",sum:"bad"}];
let replies_obj = [];

let reviews = document.getElementById("tickets");

for (let i=0; i<reviews_obj.length;i++) {
    let container = document.createElement("div");
    container.setAttribute('id','container');

    let review_area = document.createElement("div");  // to contain the review part
    review_area.setAttribute('class','review_details');

    let username = document.createElement("label");  // for viewing username
    username.innerHTML= reviews_obj[i].user;
    review_area.appendChild(username);
    username.style.display = 'block';



    let rate_span = document.createElement("span");
    rate_span.setAttribute('class','star');
    for (let j = 1; j <= 5; j++){                               // for the rating

        let rating = document.createElement("i");
        if (reviews_obj[i].rate >= j)
        {
            rating.setAttribute('class','fa fa-star checked');
            rating.checked = true;
        }
        else {
            rating.setAttribute('class','fa fa-star-o');
            rating.checked = false;
        }
        rate_span.appendChild(rating);
        review_area.appendChild(rate_span);
    }

    let ticket = document.createElement("p") // for the review summarization
    ticket.disabled = true;
    ticket.innerHTML= "'" + reviews_obj[i].sum + "'";
    ticket.setAttribute('class','info');
    ticket.style.display = 'block';
    review_area.appendChild(ticket);

    container.appendChild(review_area);

    let reply_area = document.createElement("div");  // to contain the reply part
    reply_area.setAttribute('class','reply_details');

    let reply = document.createElement("textarea");  // for the reply
    reply.setAttribute('id',"reply" + reviews_obj[i].id);
    reply.placeholder = reply.getAttribute('id');
    reply.placeholder = "Enter reply...";
    reply_area.appendChild(reply);

    let button = document.createElement("button");  // for the reply button
    button.innerHTML = "Reply";
    button.setAttribute('id', reviews_obj[i].id);
    button.setAttribute('type','click');
    button.setAttribute('class','btn');
    button.style.display = 'block';
    reply_area.appendChild(button);
    container.appendChild(reply_area)
    reviews.appendChild(container)
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
    if (reply_text.value.length != 0)
    {
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

