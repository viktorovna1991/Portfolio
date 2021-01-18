//Design of inputs

var current = null;
document.querySelector('#card').addEventListener('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#date').addEventListener('focus', function (e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});

// Save data in LocalStorage

var storedCard=window.localStorage.getItem('card');
if ( storedCard )
    document.getElementById('card').value=storedCard;

var storedDate=window.localStorage.getItem('date');
if ( storedDate )
    document.getElementById('date').value=storedDate;

var storedCreditCard=window.localStorage.getItem('creditCard');
if ( storedCreditCard )
    document.getElementById('creditCard').value=storedCreditCard;

function myMessage() {
    alert("Thank you for Your donation!");
}

function store() {
    window.localStorage.setItem('card',document.getElementById('card').value);
    window.localStorage.setItem('date',document.getElementById('date').value);
    window.localStorage.setItem('creditCard',document.getElementById('creditCard').value);
    myMessage();
}
