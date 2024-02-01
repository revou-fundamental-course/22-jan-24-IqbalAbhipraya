function showHamburgerMenu() {
    document.querySelector('.burger-list').style.display = 'flex';
}

function hideHamburgerMenu() {
    document.querySelector('.burger-list').style.display = 'none';
}

function validateForm(){
    var nama = document.forms['contact-us-form']['name-field'].value;
    var email = document.forms['contact-us-form']['email-field'].value;
    var interest = document.forms['contact-us-form']['interest-field'].value;

    console.log(nama, email, interest)

    if (!nama){
        document.getElementById('error-name').innerHTML = "Please fill in the name field";
        document.getElementById('name-field').style.borderColor = 'red';
    }else{
        document.getElementById('error-name').innerHTML = "";
        document.getElementById('name-field').style.borderColor = 'black';
    }

    if (email == '' || !(email.includes('@'))){
        document.getElementById('error-email').innerHTML = "Please fill in the email field";
        document.getElementById('email-field').style.borderColor = 'red';
        var emailCheck = false;
    }else{
        document.getElementById('error-email').innerHTML = "";
        document.getElementById('email-field').style.borderColor = 'black';
        emailCheck = true;
    }

    if (!interest){
        document.getElementById('error-interest').innerHTML = "Please pick one of the option";
        document.getElementById('interest-field').style.borderColor = 'red';
    }else{
        document.getElementById('error-interest').innerHTML = "";
        document.getElementById('interest-field').style.borderColor = 'black';
    }

    if (emailCheck == true && nama != "" && interest != "") {
        alert("The data is received, sales person will contact you 1x24 hours")

        nama = '';
        email = '';
        interest = '';
    }
    return false 
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(k) {
    showDivs(slideIndex += k);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName('img-slideshow');
    if (n > imgList.length) {
        slideIndex = 1;

    }
    else if (n <  1) {
        slideIndex = imgList.length;
    }
    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 4000);
