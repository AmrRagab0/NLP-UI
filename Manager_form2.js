const tickets_form = document.querySelector('#tickets_form');
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

let reviews_obj = [{user:"seif", agent: "Sara", rate:"5",id:"5",user_sum:"good", agent_sum:"thank you"}, {user:"nada",agent: "Gwen",rate:"2",id:"6",user_sum:"bad", agent_sum:"Appreciated"}];
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
    ticket.innerHTML= "'" + reviews_obj[i].user_sum + "'";
    ticket.setAttribute('class','info');
    ticket.style.display = 'block';
    review_area.appendChild(ticket);

    container.appendChild(review_area);

    let reply_area = document.createElement("div");  // to contain the reply part
    reply_area.setAttribute('class','reply_details');

    let agent_name = document.createElement("label");  // for viewing agent name
    agent_name.innerHTML= reviews_obj[i].agent;
    reply_area.appendChild(agent_name);
    agent_name.style.display = 'block';

    let reply_sum = document.createElement("p");  // for the reply summarization
    reply_sum.disabled = true;
    reply_sum.innerHTML= "'" + reviews_obj[i].agent_sum + "'";
    reply_sum.setAttribute('class','info');
    reply_sum.style.display = 'block';
    reply_area.appendChild(reply_sum);

    container.appendChild(reply_area)
    reviews.appendChild(container)
}


