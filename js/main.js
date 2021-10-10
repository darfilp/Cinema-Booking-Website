const schemeSvg = document.querySelector('.scheme__svg'),
currentPrice = document.querySelector('.price__counter');
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