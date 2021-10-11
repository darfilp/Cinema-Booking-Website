const schemeSvg = document.querySelector('.scheme__svg'),
currentPrice = document.querySelector('.price__counter'),
menuButton = document.querySelector('.nav__button'),
menu = document.querySelector('.menu');

let cost = 800,
    totalPrice = 0;


schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let countSeat = schemeSvg.querySelectorAll('.active').length;
        totalPrice = countSeat * cost;
        currentPrice.textContent = totalPrice;
    }
});

menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('is-open');
})