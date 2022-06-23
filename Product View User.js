
let queryString = new URLSearchParams(window.location.search);
var Product_name = queryString.get("Product");
var user_name = queryString.get("user_name");

let text1 = "Adding review for product  (" + Product_name + ")";
document.getElementById('product_name').innerHTML=(text1);

const user_product_view_form = document.querySelector('#user_product_view_form');
//user_product_view_form.addEventListener('submit', onSubmit);
const User_Review = document.getElementById("user_review");

let review= {
    username: user_name,
    product: Product_name,
    rate: null,
    review_txt: null
}



// button click action
function clicking(e)
{
    let review_text = document.getElementById('review-text');
    let review_btn = document.getElementById('add-review');

    if (e.target.tagName.toLowerCase() == "button") {
        e.preventDefault();
        review_text.disabled = true;
        review_btn.remove();

        review.review_txt = review_text.innerHTML;

        let star5 = document.getElementById("star-5-2");
        let star4 = document.getElementById("star-4-2");
        let star3 = document.getElementById("star-3-2");
        let star2 = document.getElementById("star-2-2");
        let star1 = document.getElementById("star-1-2");

        star5.disabled = true;
        star4.disabled = true;
        star3.disabled = true;
        star2.disabled = true;
        star1.disabled = true;

        if(star5.checked)
        {
            review.rate = 5;
            //review_text.innerHTML = "5";
        } else if(star4.checked)
        {
            review.rate = 4;
            //review_text.innerHTML = "4";
        } else if(star3.checked)
        {
            review.rate = 3;
            //review_text.innerHTML = "3";
        } else if(star2.checked)
        {
            review.rate = 2;
            //review_text.innerHTML = "2";
        } else if(star1.checked)
        {
            review.rate = 1;
            //review_text.innerHTML = "1";
        }
    }
}
user_product_view_form.addEventListener('click', clicking);





/*
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

*/





//login_form.addEventListener('submit', onSubmit);

