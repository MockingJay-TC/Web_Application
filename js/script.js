// container for the sign in form
var signin = document.querySelector('.contact-bg1');
// the input box of deposit form

var newForm = document.querySelector('.contact-bg');
var signInBtn = document.querySelector("#In-sign");
var balance = document.querySelector('#balance');
var depositBtn = document.querySelector("#dept");
var signOutBtn = document.querySelector("#out");
var welcomeMsg = document.querySelector("#welcomeMsg");
depositBtn.addEventListener('click', deposit);
signOutBtn.addEventListener('click', signOut);
// is user logged in?
isLoggedIn();

signInBtn.addEventListener('click', function () {
    // get username
    var username = document.querySelector("#username").value;
    // get password
    var password = document.querySelector("#password").value;
    if (username == "" && password == "") {
        alert("Please type your username and password");
    } else if (username == "") {
        alert("Please type your username");
    } else if (password == "") {
        alert("Please type your password");
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('balance', '0.00');
        isLoggedIn();
    }
})

function isLoggedIn() {
    if (localStorage.getItem('username') != "null" && localStorage.getItem('username') != null) {
        welcomeMsg.innerText = localStorage.getItem('username');
        signin.style.display = "none";
        newForm.style.display = "block";
        balance.innerText = localStorage.getItem('balance');
        signOutBtn.style.visibility = "visible";
    } else {
        newForm.style.display = "none";
    }
}


function signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('balance')
    signin.style.display = "block";
    welcomeMsg.innerText = "PhoenixMJ Bank"
    newForm.style.display = "none";
    location.reload();
}

function deposit() {
    var depositAmount;
    var initialBalance = parseFloat(localStorage.getItem('balance'));
    var amountInp = document.querySelector("#ghc");
    if (amountInp.value == "" | parseFloat(amountInp.value) < 0) {
        depositAmount = 0.00;
    } else depositAmount = parseFloat(amountInp.value);
    localStorage.setItem('balance', (depositAmount + initialBalance));
    // set the balance innerText to the new balance from the cookie
    balance.innerText = localStorage.getItem("balance");
    amountInp.value = "";
    alert("Deposit of Ghs " + depositAmount + " made.\nNew balance is Ghs " + localStorage.getItem("balance"));
}