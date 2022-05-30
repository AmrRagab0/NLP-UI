
let queryString = new URLSearchParams(window.location.search);
var Product_name = queryString.get("Product");
var user_name = queryString.get("user_name");

const user_product_view_form = document.querySelector('#user_product_view_form');
user_product_view_form.addEventListener('submit', onSubmit);
const User_Review = document.getElementById("user_review");

radio= document.getElementsByName("radio")
let review= {
    username: user_name,
    product: Product_name,
    rate: null,
    review_txt: null
}

function onSubmit(e)
{
    e.preventDefault();
    if(radio[0].checked)
    {
        review.rate = 1;
    } else if(radio[1].checked)
    {
        review.rate = 2;
    } else if(radio[2].checked)
    {
        review.rate = 3;
    } else if(radio[3].checked)
    {
        review.rate = 4;
    } else if(radio[4].checked)
    {
        review.rate = 5;
    }
    review.review_txt = User_Review.value
    console.log(review)
}

const Product_name_page_header = document.getElementById('product_name');
Product_name_page_header.textContent = Product_name;
const user_name_page_header = document.getElementById('user_name');
user_name_page_header.textContent = user_name;






//login_form.addEventListener('submit', onSubmit);

