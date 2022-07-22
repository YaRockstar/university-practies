const card = document.querySelector('.card-wrapper');
card.addEventListener('mousemove', rotate);
card.addEventListener('mouseout', returnPosition);

function rotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeight) / 10}deg) rotateY(${(event.offsetX - halfHeight) / 10}deg)`;
}

function returnPosition(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = `rotateX(${event.offsetY = 0}deg) rotateY(${event.offsetX = 0}deg)`;
}