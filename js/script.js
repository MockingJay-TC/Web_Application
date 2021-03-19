
var signin = document.querySelector('.contact-bg1');


var newForm = document.querySelector('.contact-bg');
var signInBtn = document.querySelector("#In-sign");
var reset = document.querySelector("#reset");
var balance = document.querySelector('#balance');
var depositBtn = document.querySelector("#dept");
var signOutBtn = document.querySelector("#out");
var welcomeMsg = document.querySelector("#welcomeMsg");
depositBtn.addEventListener('click', deposit);
signOutBtn.addEventListener('click', signOut);

isLoggedIn();

signInBtn.addEventListener('click', function () {
    
    var username = document.querySelector("#username").value;

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

reset.addEventListener('click',function (){
    username.value("");
    password.value(""); 
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
    balance.innerText = localStorage.getItem("balance");
    amountInp.value = "";
    alert("Deposit of Ghs " + depositAmount + " made.\nNew balance is Ghs " + localStorage.getItem("balance"));
}